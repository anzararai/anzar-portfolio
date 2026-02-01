const express = require('express');
const cors = require('cors');
// require('dotenv').config();

const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Server is running',
    endpoints: {
      contact: 'POST /api/contact',
      viewAll: 'GET /api/contact'
    }
  })
})

app.use('/api/contact', contactRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on https://localhost:${PORT}`)
})