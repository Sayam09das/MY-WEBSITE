# Interactive Portfolio Website with AI Chatbot Integration

A modern, responsive portfolio website featuring an AI-powered chatbot assistant, interactive 3D animations, and a seamless contact system. The website combines engaging visual elements with practical functionality to showcase professional work and enable direct communication.

This full-stack application uses Node.js and Express for the backend, with MongoDB for data persistence. The frontend leverages Three.js for immersive 3D animations and Handlebars for templating. The integrated AI chatbot provides real-time interaction with visitors, while the email system ensures reliable communication through NodeMailer.

## Repository Structure
```
.
├── backend/                 # Server-side application code
│   ├── app.js              # Express application setup and middleware configuration
│   ├── database/           # Database connection and models
│   ├── models/             # MongoDB schemas and models
│   ├── routes/             # API route definitions
│   ├── services/           # Business logic and external service integrations
│   └── static.js           # Static file serving configuration
├── frontend/               # Client-side application code
│   ├── aboutpage/          # About page components and styles
│   ├── homepage/           # Home page with chatbot integration
│   ├── projectpage/        # Project showcase components
│   └── skillspage/        # Skills display with 3D animations
└── package.json           # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Modern web browser with WebGL support
- Gmail account for email service integration

Required environment variables:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start MongoDB service:
```bash
# MacOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

5. Start the application:
```bash
npm start
```

### Quick Start
1. Access the website at `http://localhost:3000`
2. Navigate through the different sections using the top navigation bar
3. Interact with the AI chatbot by clicking the robot icon in the bottom right
4. Use the contact form to send messages (requires valid email)

### More Detailed Examples

**Using the Chatbot:**
```javascript
// Click the robot icon to open chat
// Example queries:
"Tell me about your experience"
"What projects have you worked on?"
"How can I contact you?"
```

**Sending Contact Messages:**
```javascript
// Fill out the contact form with:
name: "John Doe"
email: "john@example.com"
subject: "Project Inquiry"
message: "I'd like to discuss a potential project..."
```

### Troubleshooting

**Common Issues:**

1. MongoDB Connection Errors
```bash
# Check MongoDB service status
sudo systemctl status mongod

# Verify connection string in .env
MONGO_URI=mongodb://localhost:27017/portfolio
```

2. Email Service Issues
```bash
# Verify Gmail credentials
# Enable "Less secure app access" or use App Password
# Check email service logs
npm run debug
```

3. 3D Animation Performance
- Enable hardware acceleration in browser
- Update graphics drivers
- Reduce particle count in animation.js

## Data Flow
The application processes data through a structured flow from user interaction to storage and response.

```ascii
User Input → Frontend → API Routes → Backend Services → Database
     ↑                                                    ↓
     └────────────── Email Notification ─────────────────┘
```

Component Interactions:
1. Frontend captures user input through forms and chatbot interface
2. API routes validate and process incoming requests
3. Backend services handle business logic and external integrations
4. MongoDB stores contact information and user data
5. Email service sends confirmation messages
6. Three.js handles real-time 3D animations
7. Handlebars manages dynamic content rendering

## Infrastructure
Static File Serving:
- `/images`: Serves static image assets
- `/uploads`: Handles uploaded files and documents
- `/frontend/*`: Serves page-specific static assets

Database:
- MongoDB for contact information storage
- Mongoose ODM for data modeling

Email Service:
- NodeMailer with Gmail SMTP
- HTML email templates for confirmation messages