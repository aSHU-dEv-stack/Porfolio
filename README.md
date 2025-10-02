# Ashutosh Mishra - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Cybersecurity, Web Development, UI/UX Design, and Artificial Intelligence.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Particle System**: Physics-based particle animation with mouse interaction
- **Dark/Light Theme**: Toggle between dark and light modes with theme persistence
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Modern UI/UX**: Clean, professional design with attention to detail
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Portfolio section with detailed project cards
- **Testimonials Carousel**: Auto-rotating testimonial slider
- **Skills Display**: Comprehensive skills section with interactive badges

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JavaScript for all interactions
- **Canvas API**: For particle system animation
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## 📁 Project Structure

\`\`\`
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
├── README.md           # Project documentation
└── public/
    └── images/
        └── ashutosh-profile.jpg
\`\`\`

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local server for development (Live Server, Python's SimpleHTTPServer, etc.)

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/aSHU-dEv-stack/Porfolio.git
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd portfolio
\`\`\`

3. Open `index.html` in your browser or use a local server:

**Using Python:**
\`\`\`bash
python -m http.server 8000
\`\`\`

**Using Node.js (http-server):**
\`\`\`bash
npx http-server
\`\`\`

**Using VS Code Live Server:**
- Install Live Server extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

\`\`\`css
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --accent-color: #3b82f6;
  /* ... other colors */
}
\`\`\`

### Adding Projects

Add new project objects to the `projects` array in `script.js`:

\`\`\`javascript
const projects = [
  {
    id: 5,
    title: "Your Project Name",
    description: "Project description",
    image: "image-url",
    tools: ["Tool1", "Tool2"],
    category: "Category"
  }
]
\`\`\`

### Modifying Skills

Update the `skills` array in `script.js`:

\`\`\`javascript
const skills = [
  "New Skill 1",
  "New Skill 2",
  // ... more skills
]
\`\`\`

### Changing Personal Information

Update the contact information in `index.html`:

\`\`\`html
<div class="contact-link">
  <i class="fas fa-envelope"></i>
  <span>your.email@example.com</span>
</div>
\`\`\`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Sections

1. **Home/Hero**: Introduction with profile image and CTA buttons
2. **About**: Biography, skills, and statistics
3. **Tech Expertise**: Four main technology domains
4. **Portfolio**: Featured projects with details
5. **Design Process**: Development methodology
6. **Certifications**: Professional achievements
7. **Testimonials**: Client feedback carousel
8. **Contact**: Contact information and form

## ⚡ Performance Optimizations

- Lazy loading for images
- Efficient particle system with requestAnimationFrame
- CSS transforms for animations (GPU acceleration)
- Intersection Observer for scroll animations
- Debounced resize events

## 🔒 Security Features

- No external dependencies (except CDN fonts and icons)
- Form validation
- Secure external links with `rel="noopener"`
- Content Security Policy ready

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ashutosh Mishra**

- Website: [Your Website]
- LinkedIn: [linkedin.com/in/ashutosh-mishra](https://linkedin.com/in/ashutosh-mishra)
- GitHub: [github.com/ashutosh-mishra](https://github.com/ashutosh-mishra)
- Email: ashutosh.mishra@email.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ashutosh-mishra/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile.png)

### Dark Mode
![Dark Mode Screenshot](screenshots/dark-mode.png)

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement project filtering
- [ ] Add more interactive animations
- [ ] Create admin panel for content management
- [ ] Add analytics integration
- [ ] Implement newsletter subscription
- [ ] Add more accessibility features

## 📞 Contact

For any queries or suggestions, feel free to reach out:

- Email: ashutosh.mishra@email.com
- LinkedIn: [Ashutosh Mishra](https://linkedin.com/in/ashutosh-mishra)

---

**Built with ❤️ by Ashutosh Mishra**
