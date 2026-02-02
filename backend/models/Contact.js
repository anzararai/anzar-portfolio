const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [1, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters']
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide valid email']
    },

    message: {
      type: String,
      required: [true, 'Message is required'],
      trim : true,
      minlength : [1, 'Message must be at least 5 characters'],
      maxlength : [1000, 'Message cannot exceed 1000 characters']
    },

    status: {
      type: String,
      enum: ['read', 'unread'],
      default: 'unread'
    }
  },
  {
    timestamps: true
  }
);

contactSchema.index({email: 1, createdAt: -1});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;