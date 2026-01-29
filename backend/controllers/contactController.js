const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function 1: Contact form submit karna
const createContact = async (req, res) => {
  try {
    // Step 1: Data lo
    const { name, email, message } = req.body;

    // Step 2: Check karo sab fields bhare hain
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields'
      });
    }

    // Step 3: Database me save karo
    const contact = await Contact.create({
      name,
      email,
      message
    });

    console.log('✅ Contact saved:', contact._id);

    // Step 4: Email bhejo (agar fail ho to bhi continue)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact: ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });
      console.log('✅ Email sent');
    } catch (emailError) {
      console.log('⚠️ Email failed:', emailError.message);
    }

    // Step 5: Success response
    res.status(200).json({
      success: true,
      message: 'Thank you! I will get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong'
    });
  }
};

// Function 2: Sab contacts lana
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
};

// Export karo
module.exports = {
  createContact,
  getAllContacts
};