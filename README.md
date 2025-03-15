# Interactive Personal Portfolio Website with 3D Animations

A modern, responsive personal portfolio website that combines elegant design with interactive 3D animations. Built with Express.js and Three.js, this portfolio showcases professional experience and projects through an immersive user interface featuring dynamic particle effects and responsive layouts.

The website delivers a unique user experience through its blend of traditional web elements and modern 3D graphics. It features smooth animations, responsive design, and interactive elements that engage visitors while maintaining professional presentation. The application uses Handlebars templating for efficient page rendering, Three.js for WebGL animations, and Express.js for robust backend routing and static file serving.

## Repository Structure
```
.
├── backend/                 # Server-side application code
│   ├── app.js              # Express application setup and middleware configuration
│   ├── database/           # Database connection and models
│   ├── routes/             # API and page routing definitions
│   ├── server.js           # HTTP server initialization
│   └── static.js           # Static file serving configuration
├── frontend/               # Client-side application code
│   ├── aboutpage/         # About page components and styles
│   └── homepage/          # Home page components and styles
├── package.json           # Project dependencies and scripts
└── README.md             # Project documentation
```

## Usage Instructions
### Prerequisites
- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser with WebGL support
- MongoDB (v4.0 or higher)

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
```

4. Start the development server:
```bash
npm start
```

### Quick Start
1. Access the website by navigating to `http://localhost:3000` in your web browser
2. The home page features a 3D animated background with interactive particles
3. Navigate through different sections using the top navigation bar
4. View projects and skills in their respective sections
5. Download resume using the "Download Resume" button in the navigation

### More Detailed Examples
1. Interacting with 3D animations:
```javascript
// Move mouse across the screen to interact with particles
// Click navigation links for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

2. Responsive navigation:
```javascript
// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
```

### Troubleshooting
1. WebGL Issues
- Problem: 3D animations not rendering
- Solution: Check if your browser supports WebGL
```javascript
if (!window.WebGLRenderingContext) {
    console.error('WebGL is not supported in this browser');
}
```

2. Mobile Navigation Issues
- Problem: Hamburger menu not responding
- Solution: Clear browser cache and ensure JavaScript is enabled
- Check console for potential errors

3. Performance Optimization
- Monitor frame rate using Three.js stats
- Reduce particle count for lower-end devices
- Use device pixel ratio for optimal rendering

## Data Flow
The application follows a client-server architecture with dynamic page rendering and interactive client-side features.

```ascii
[Client Browser] <---> [Express Server] <---> [MongoDB]
      ^                      |
      |                      v
[Three.js Rendering] <--- [Static Files]
```

Key component interactions:
1. Express server handles incoming requests and routes them to appropriate handlers
2. Handlebars templates render dynamic content server-side
3. Three.js manages 3D animations and interactions client-side
4. Static files (CSS, JS, images) are served directly by Express
5. MongoDB stores and retrieves user data and content
6. Client-side JavaScript handles user interactions and animation updates
7. Responsive design adapts layout based on device characteristics