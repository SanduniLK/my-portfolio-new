export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  features: string[];
  featured: boolean;
  category: "software" | "testing";  
  slug: string;  // Make it required, not optional
}

export const projects: Project[] = [
  // ========== SOFTWARE PROJECTS ==========
  {
    id: 1,
    title: "MediLink – Centralized Medicare Application",
    description: "A centralized healthcare system that maintains patient medical history across multiple medical centers. Features patient registration, appointment booking, telemedicine, digital prescriptions, and AI-based health predictions.",
    longDescription: `
      <h2>Project Overview</h2>
      <p>MediLink is a comprehensive healthcare platform that connects patients, doctors, and medical centers in a unified ecosystem. The system addresses the critical problem of fragmented medical records by providing a centralized repository for patient health information.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Multi-role ecosystem supporting 6 distinct user roles (Patient, Doctor, Admin, etc.)</li>
        <li>AI-driven diagnostics using TensorFlow for predictive health analysis</li>
        <li>Encrypted Digital Prescription system</li>
        <li>Low-latency audio/video consultation features using WebRTC</li>
        <li>QR-based patient identification system</li>
        <li>Automated Queue Management module</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>Built with Flutter for cross-platform mobile development, Firebase for backend services, Node.js for API services, WebRTC for real-time communication, and TensorFlow Lite for on-device AI predictions.</p>
    `,
    image: "/images/projects/medilink_photo.png",
    technologies: ["Flutter", "Firebase", "Node.js", "WebRTC", "TensorFlow"],
    githubUrl: "https://github.com/SanduniLK/MediLink",
    features: [
      "Patient registration & profile management",
      "Appointment booking with real-time queue system",
      "Online payment integration",
      "QR code–based patient identification",
      "Access medical history & reports",
      "Telemedicine (video consultation & audio consultation)",
      "Digital prescriptions",
      "Personalized health analysis reports",
      "Emergency patient access",
      "Notifications & reminders",
      "Doctor registration & authentication",
      "View patient profiles via QR code",
      "Create and send digital prescriptions",
      "Telemedicine consultations",
      "Manage appointments & availability",
      "Medical center registration",
      "Manage doctors, patients, and appointments",
      "View reports and feedback",
      "Role-based access control",
      "Secure patient data handling",
      "Centralized and privacy-focused system",
      "Appointment & Queue Management",
      "Telemedicine System",
      "Digital Prescription System",
      "AI-Based Health Prediction",
      "Health Data Analysis",
      "QR Code-Based Identification",
      "Notification System",
      "Admin Management"
    ],
    featured: true,
    category: "software",
    slug: "medilink-healthcare-app"
  },
  {
    id: 2,
    title: "Flower Inventory Management System",
    description: "Desktop-based inventory management system for flower shops with full CRUD operations for stock management, supplier handling, and sales tracking.",
    longDescription: `
      <h2>Project Overview</h2>
      <p>A comprehensive desktop application for managing flower shop inventory, suppliers, orders, and sales. Built with C# and MySQL for reliable data management.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Real-time stock tracking and alerts</li>
        <li>Supplier management with order history</li>
        <li>Automated bill payment processing</li>
        <li>Sales reporting and analytics</li>
        <li>User-friendly Windows Forms interface</li>
      </ul>
    `,
    image: "/images/projects/flower.png",
    technologies: ["C#", "MySQL", "Windows Forms", ".NET"],
    githubUrl: "https://github.com/SanduniLK/flowershop2",
    features: [
      "Flower stock management",
      "Supplier & order handling",
      "Sales tracking",
      "Full CRUD operations",
      "Automated bill payment processing",
      "Financial records management"
    ],
    featured: true,
    category: "software",
    slug: "flower-inventory-system"
  },
  {
    id: 3,
    title: "E-commerce Website (Chocolate Shop)",
    description: "Web-based e-commerce platform with product listing, shopping cart, order processing, and admin dashboard for complete store management.",
    longDescription: `
      <h2>Project Overview</h2>
      <p>A fully functional e-commerce website for a chocolate shop with product management, shopping cart, and order processing features.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Product listing with categories and search</li>
        <li>Shopping cart with quantity management</li>
        <li>Secure checkout process</li>
        <li>Admin dashboard for product and order management</li>
        <li>User authentication and profile management</li>
      </ul>
    `,
    image: "/images/projects/Gemini_Generated_Image_a5zwlea5zwlea5zw.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/SanduniLK/E-commerce-web-site",
    features: [
      "Product listing with categories",
      "Shopping cart functionality",
      "Order processing system",
      "Admin dashboard",
      "User registration & login",
      "Role-based access control",
      "Responsive design"
    ],
    featured: false,
    category: "software",
    slug: "ecommerce-chocolate-shop"
  },
  
  // ========== TESTING PROJECTS ==========
  {
    id: 4,
    title: "Automation Testing Practice Suite",
    description: "Comprehensive automation testing projects covering real-world scenarios with Selenium WebDriver, TestNG framework, Page Object Model, and Playwright end-to-end tests.",
    longDescription: `
      <h2>Project Overview</h2>
      <p>A comprehensive test automation suite demonstrating expertise in various testing frameworks and tools. Includes real-world testing scenarios and best practices.</p>
      
      <h2>Testing Frameworks Used</h2>
      <ul>
        <li>Selenium WebDriver for browser automation</li>
        <li>TestNG for test management and reporting</li>
        <li>Playwright for modern web testing</li>
        <li>Page Object Model for maintainable tests</li>
        <li>ExtentReports for detailed HTML reports</li>
      </ul>
    `,
    image: "/images/projects/testing.jpg",
    technologies: ["Selenium", "Java", "TestNG", "Playwright", "Page Object Model", "ExtentReports"],
    githubUrl: "https://github.com/SanduniLK/automation-testing",
    features: [
      "Selenium WebDriver with Java",
      "TestNG framework for test management",
      "Page Object Model (POM) design pattern",
      "Playwright end-to-end tests",
      "Login, form & UI validation",
      "Dynamic date-picker automation",
      "Drag-and-drop automation",
      "File upload automation",
      "Multi-window switching",
      "Automated screenshot capture",
      "HTML execution reports with ExtentReports"
    ],
    featured: true,
    category: "testing",
    slug: "automation-testing-suite"
  },
  {
    id: 5,
    title: "Manual QA: Expedia Web Application",
    description: "End-to-end manual testing on booking modules with comprehensive test case design and defect tracking. Designed 20+ test cases for functional and negative scenarios.",
    image: "/images/projects/Screenshot 2026-03-31 001534.jpg",
    technologies: ["Manual Testing", "Test Case Design", "Bug Tracking", "Chrome DevTools"],
    githubUrl: "https://github.com/SanduniLK/Manual-Testing-Expedia-Project",
    features: [
      "20+ test cases for functional & negative scenarios",
      "Mobile responsiveness audits",
      "Complex business logic validation",
      "Full bug life cycle documentation",
      "Platform stability testing",
      "Test case documentation",
      "Defect reporting and tracking"
    ],
    featured: false,
    category: "testing",
    slug: "expedia-manual-testing"
  },
  {
    id: 6,
    title: "Daraz E-Commerce Automation",
    description: "Automation testing for Daraz e-commerce platform using Page Object Model for end-to-end user journeys including Secure Login, Product Search, and Cart Management.",
    image: "/images/projects/Screenshot 2026-03-31 002343.jpg",
    technologies: ["Selenium", "Java", "TestNG", "Page Object Model", "ExtentReports"],
    githubUrl: "https://github.com/SanduniLK/daraz-automation",
    features: [
      "15+ complex test cases",
      "Secure login automation",
      "Product search automation",
      "Cart management testing",
      "Data-driven testing with TestNG",
      "Validation assertions",
      "Test dependency management",
      "Automated screenshot capture",
      "Detailed HTML execution reports"
    ],
    featured: false,
    category: "testing",
    slug: "daraz-automation"
  },
  {
    id: 7,
    title: "Formy Website Automation",
    description: "Comprehensive UI automation suite for Formy website using Java and Selenium WebDriver. Automated 10+ critical components including dynamic date-pickers, drag-and-drop, file uploads, and multi-window switching.",
    image: "/images/projects/Screenshot 2026-03-31 002510.jpg",
    technologies: ["Selenium", "Java", "TestNG", "ChromeDriver"],
    githubUrl: "https://github.com/SanduniLK/Formy-Selenium-Automation",
    features: [
      "Dynamic date-picker automation",
      "Drag-and-drop functionality testing",
      "File upload automation",
      "Multi-window switching",
      "Form submission validation",
      "Element state validation",
      "Cross-browser stability testing"
    ],
    featured: false,
    category: "testing",
    slug: "formy-automation"
  },
  {
    id: 8,
    title: "BMI & Food Recommendation App",
    description: "Cross-platform mobile application developed using Flutter and Dart for Android and iOS. Features BMI and BMR calculation, personalized meal recommendations, food tracking, and interactive charts for a health-focused user experience.",
    longDescription: `
      <h2>Project Overview</h2>
      <p>A health-focused mobile app that calculates BMI and BMR, provides personalized meal recommendations, and tracks food intake with interactive charts.</p>
      
      <h2>Features</h2>
      <ul>
        <li>BMI and BMR calculation based on user inputs</li>
        <li>Personalized meal recommendations based on health goals</li>
        <li>Food tracking with dynamic lists</li>
        <li>Interactive charts for progress tracking</li>
        <li>Search and filter functionality for food items</li>
      </ul>
    `,
    image: "/images/projects/Gemini_Generated_Image_51yrh451yrh451yr.png",
    technologies: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/SanduniLK/bmi_new_app",
    features: [
      "BMI and BMR calculation",
      "Personalized meal recommendations",
      "Food tracking and dynamic lists",
      "Interactive charts and progress tracking",
      "Search and filter functionality",
      "Responsive and clean UI/UX",
      "Modular and scalable code structure"
    ],
    featured: true,
    category: "software",
    slug: "bmi-food-app"
  },
  {
    id: 9,
    title: "MoveHub: Movie Discovery App",
    description: "A Flutter mobile application for discovering popular movies. Users can browse trending movies, search by title, view detailed movie information, and filter movies by rating or release year. Demonstrates API integration, Provider state management, and responsive UI design.",
    longDescription: `
      <h2>Project Overview</h2>
      <p>A Flutter mobile app for discovering movies using The Movie Database (TMDb) API. Features include browsing popular movies, searching, filtering, and viewing detailed movie information.</p>
      
      <h2>Technical Implementation</h2>
      <ul>
        <li>Flutter for cross-platform mobile development</li>
        <li>TMDb API for movie data</li>
        <li>Provider for state management</li>
        <li>Responsive UI design for different screen sizes</li>
      </ul>
    `,
    image: "/images/projects/WhatsApp Image 2026-03-19 at 15.09.59.jpeg",
    technologies: ["Flutter", "Dart", "TMDb API", "Provider"],
    githubUrl: "https://github.com/SanduniLK/movie_app",
    features: [
      "Browse popular movies on home screen",
      "Search movies by title",
      "View detailed movie information including poster, description, and IMDb rating",
      "Filter movies by rating and release year",
      "Display last 5 recent searches for quick access",
      "Handle API errors and loading states",
      "Responsive and interactive UI design"
    ],
    featured: true,
    category: "software",
    slug: "movehub-movie-app"
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}