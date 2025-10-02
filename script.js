// Global Variables
let currentTestimonial = 0
const particles = []
const mousePos = { x: 0, y: 0, isActive: false }

// Skills Data
const skills = [
  "UI/UX Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Adobe XD",
  "Design Systems",
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "HTML/CSS",
  "JavaScript",
  "Tailwind CSS",
  "Machine Learning",
  "Python",
  "TensorFlow",
  "AI Integration",
  "Data Analysis",
  "Neural Networks",
  "Cybersecurity",
  "Penetration Testing",
  "Security Auditing",
  "Risk Assessment",
  "Network Security",
  "Ethical Hacking",
]

// Projects Data
const projects = [
  {
    id: 1,
    title: "AI-Powered Security Dashboard",
    description:
      "A comprehensive cybersecurity dashboard with AI-driven threat detection and real-time monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tools: ["React", "Python", "TensorFlow", "Node.js"],
    category: "Cybersecurity + AI",
  },
  {
    id: 2,
    title: "E-commerce Platform with ML Recommendations",
    description:
      "Full-stack e-commerce platform featuring AI-powered product recommendations and secure payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    tools: ["Next.js", "TypeScript", "Python", "Stripe API"],
    category: "Web Development + AI",
  },
  {
    id: 3,
    title: "Healthcare Security Audit Tool",
    description:
      "HIPAA-compliant security assessment tool for healthcare organizations with automated vulnerability scanning.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    tools: ["React", "Node.js", "Security APIs", "Figma"],
    category: "Cybersecurity + UX",
  },
  {
    id: 4,
    title: "AI Chatbot Interface Design",
    description: "Conversational AI interface with natural language processing and adaptive user experience design.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
    tools: ["Figma", "React", "OpenAI API", "Python"],
    category: "AI + UX Design",
  },
]

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CISO at TechCorp",
    content:
      "Ashutosh's multidisciplinary approach to cybersecurity and UX design resulted in security solutions that users actually want to use. His work significantly improved our security posture while enhancing user experience.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content:
      "From AI integration to security implementation, Ashutosh delivered a complete solution. His ability to work across multiple tech domains saved us from hiring multiple specialists.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at AI Solutions Inc",
    content:
      "Ashutosh seamlessly integrated machine learning capabilities into our platform while maintaining top-notch security and user experience. His holistic approach to technology is impressive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Security Director at FinTech Pro",
    content:
      "The security audit and web application Ashutosh delivered exceeded expectations. His understanding of both security requirements and user needs resulted in a perfectly balanced solution.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
]

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

// Initialize Application
function initializeApp() {
  setupNavigation()
  setupThemeToggle()
  setupParticles()
  setupScrollAnimations()
  setupSkills()
  setupProjects()
  setupTestimonials()
  setupContactForm()
  setupSmoothScrolling()
  setupCounterAnimation()
}

// Navigation Setup
function setupNavigation() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        navbar.style.background = "rgba(15, 23, 42, 0.95)"
      }
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.8)"
      navbar.style.boxShadow = "none"
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        navbar.style.background = "rgba(15, 23, 42, 0.8)"
      }
    }
  })
}

// Theme Toggle Setup
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = document.getElementById("theme-icon")

  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon(newTheme)
  })
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon")
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

// Particle System Setup
function setupParticles() {
  const canvas = document.getElementById("particle-canvas")
  const ctx = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particleCount = Math.min(40, Math.floor(window.innerWidth / 40))

  // Physics constants
  const FRICTION = 0.99
  const BOUNCE_DAMPING = 0.7
  const MOUSE_FORCE = 0.0005
  const ATTRACTION_FORCE = 0.0001
  const REPULSION_FORCE = 0.0002
  const MAX_INTERACTION_DISTANCE = 150
  const MIN_DISTANCE = 100

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 2
      this.vy = (Math.random() - 0.5) * 2
      this.size = Math.random() * 4 + 2
      this.mass = this.size * 0.1
      this.opacity = Math.random() * 0.5 + 0.2
      this.charge = Math.random() > 0.5 ? 1 : -1
      this.color = this.getColor()
    }

    getColor() {
      const colors = ["rgba(59, 130, 246, ", "rgba(147, 197, 253, ", "rgba(96, 165, 250, ", "rgba(37, 99, 235, "]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    update() {
      // Apply friction
      this.vx *= FRICTION
      this.vy *= FRICTION

      // Update position
      this.x += this.vx
      this.y += this.vy

      // Boundary collision
      if (this.x <= this.size / 2 || this.x >= canvas.width - this.size / 2) {
        this.vx *= -BOUNCE_DAMPING
        this.x = Math.max(this.size / 2, Math.min(canvas.width - this.size / 2, this.x))
      }
      if (this.y <= this.size / 2 || this.y >= canvas.height - this.size / 2) {
        this.vy *= -BOUNCE_DAMPING
        this.y = Math.max(this.size / 2, Math.min(canvas.height - this.size / 2, this.y))
      }
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color + this.opacity + ")"
      ctx.fill()
      ctx.shadowBlur = 10
      ctx.shadowColor = this.color + "0.5)"
    }
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  // Mouse interaction
  canvas.addEventListener("mousemove", (e) => {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
    mousePos.isActive = true
  })

  canvas.addEventListener("mouseleave", () => {
    mousePos.isActive = false
  })

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particles.forEach((particle, i) => {
      // Particle interactions
      particles.forEach((otherParticle, j) => {
        if (i === j) return

        const dx = otherParticle.x - particle.x
        const dy = otherParticle.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < MAX_INTERACTION_DISTANCE) {
          const force = (particle.charge * otherParticle.charge) / (distance * distance)
          const fx =
            (dx / distance) * force * (particle.charge === otherParticle.charge ? -REPULSION_FORCE : ATTRACTION_FORCE)
          const fy =
            (dy / distance) * force * (particle.charge === otherParticle.charge ? -REPULSION_FORCE : ATTRACTION_FORCE)

          particle.vx -= fx / particle.mass
          particle.vy -= fy / particle.mass
        }

        // Draw connections
        if (distance < MIN_DISTANCE) {
          const opacity = (1 - distance / MIN_DISTANCE) * 0.2
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      // Mouse interaction
      if (mousePos.isActive) {
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const force = MOUSE_FORCE / (distance * distance + 1)
          const fx = (dx / distance) * force * 100
          const fy = (dy / distance) * force * 100

          particle.vx += fx / particle.mass
          particle.vy += fy / particle.mass
        }
      }

      particle.update()
      particle.draw()
    })

    requestAnimationFrame(animate)
  }

  animate()

  // Handle resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

// Scroll Animations Setup
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  const fadeElements = document.querySelectorAll(".fade-in")
  fadeElements.forEach((el) => observer.observe(el))
}

// Skills Setup
function setupSkills() {
  const skillsGrid = document.getElementById("skills-grid")

  skills.forEach((skill, index) => {
    const skillBadge = document.createElement("span")
    skillBadge.className = "skill-badge"
    skillBadge.textContent = skill
    skillBadge.style.animationDelay = `${index * 0.05}s`
    skillsGrid.appendChild(skillBadge)
  })
}

// Projects Setup
function setupProjects() {
  const projectsGrid = document.getElementById("projects-grid")

  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project)
    projectCard.classList.add("fade-in")
    projectsGrid.appendChild(projectCard)
  })
}

function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card"

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="project-overlay">
        <button class="btn btn-primary">
          <i class="fas fa-eye"></i>
          View Details
        </button>
      </div>
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <span class="project-category">${project.category}</span>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tools">
        ${project.tools.map((tool) => `<span class="tool-tag">${tool}</span>`).join("")}
      </div>
    </div>
  `

  return card
}

// Testimonials Setup
function setupTestimonials() {
  updateTestimonial()

  const prevBtn = document.getElementById("prev-testimonial")
  const nextBtn = document.getElementById("next-testimonial")

  prevBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    updateTestimonial()
  })

  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    updateTestimonial()
  })

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    updateTestimonial()
  }, 8000)
}

function updateTestimonial() {
  const testimonialCard = document.getElementById("testimonial-card")
  const testimonial = testimonials[currentTestimonial]

  testimonialCard.innerHTML = `
    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
    <blockquote class="testimonial-content">"${testimonial.content}"</blockquote>
    <div class="testimonial-author">${testimonial.name}</div>
    <div class="testimonial-role">${testimonial.role}</div>
  `
}

// Contact Form Setup
function setupContactForm() {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true

    // Simulate form submission
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      submitBtn.style.background = "#10b981"

      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
        contactForm.reset()
      }, 2000)
    }, 1500)

    console.log("Form submitted:", data)
  })
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      if (targetId === "#") return

      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Counter Animation Setup
function setupCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number")

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target
        const target = Number.parseInt(counter.getAttribute("data-target"))
        animateCounter(counter, target)
        observer.unobserve(counter)
      }
    })
  }, observerOptions)

  counters.forEach((counter) => observer.observe(counter))
}

function animateCounter(element, target) {
  let current = 0
  const increment = target / 50
  const duration = 2000
  const stepTime = duration / 50

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + (target > 10 ? "+" : "")
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + (target > 10 ? "+" : "")
    }
  }, stepTime)
}

// Console Welcome Message
console.log(`
🚀 Welcome to Ashutosh Mishra's Portfolio!
🛡️ Cybersecurity | 💻 Web Development | 🎨 UI/UX Design | 🤖 AI

Built with HTML, CSS, and JavaScript
Featuring interactive particle animations and smooth transitions

Feel free to explore and reach out for collaboration!
`)

// Loading Animation
window.addEventListener("load", () => {
  document.body.classList.add("loading")
})
