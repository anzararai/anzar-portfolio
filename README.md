# 🌐 Portfolio Website – Anzar Arai

Personal portfolio website with a full-stack contact form. Built to showcase my projects and make it easy for people to reach out.

**Live:** [anzar-portfolio.vercel.app](https://anzar-portfolio.vercel.app)

## What's Inside

**Frontend:** Next.js, React, Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express, MongoDB, Nodemailer

The contact form saves messages to MongoDB and sends me an email notification. Pretty straightforward MERN stack implementation.

## Project Structure

```
portfolio/
├── frontend/           # Next.js app
│   ├── components/     # React components
│   └── app/           # Pages and layouts
│
└── backend/           # Express API
    ├── config/        # DB connection
    ├── models/        # MongoDB schemas
    ├── controllers/   # Business logic
    └── routes/        # API endpoints
```

## Running Locally

### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
# PORT=5000
# MONGODB_URI=your_mongodb_connection
# EMAIL_USER=your_gmail
# EMAIL_PASS=your_gmail_app_password
# FRONTEND_URL=http://localhost:3000

npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install

# Create .env.local with:
# NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

npm run dev
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000

## API Endpoints

```
POST /api/contact    # Submit contact form
GET  /api/contact    # View all messages
```

## Deployment

- Frontend on Vercel (auto-deploys from GitHub)
- Backend on Render (free tier works fine)
- Database on MongoDB Atlas (also free)

Don't forget to add environment variables in deployment platforms.

## Quick Notes

For Gmail to work, you need an App Password (not your regular password). Enable 2-Step Verification first, then generate it from Google Account settings.

MongoDB Atlas needs your IP whitelisted. Use `0.0.0.0/0` for development.

## Tech Choices

Went with Next.js because it's fast and handles routing well. MongoDB for the database since it's simple to set up and free to host. Nodemailer handles emails without needing a third-party service.

Tailwind makes styling faster, and Framer Motion adds some nice animations without much code.

---

Built this as my first full-stack project. Feel free to reach out if you have questions!

**Contact:** anzarai9503@gmail.com  
**GitHub:** [github.com/anzararai](https://github.com/anzararai)