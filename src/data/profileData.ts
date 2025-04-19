import { ProfileData } from './types';

export const profileData: ProfileData = {
  name: "NAVNEET PRAJAPATI",
  location: "Gurugram, Haryana",
  phone: "+91 7271088606",
  email: "navneetprajapati26@gmail.com",
  linkedin: "https://www.linkedin.com/in/navneetprajapati26/",
  github: "https://github.com/navneetprajapati26",
  youtube: "https://www.youtube.com/@asyncapp",
  resume: "https://drive.google.com/file/d/1Xw-hPYZzP77D0EHOdA1P8Fej7cny0Jdc/view?usp=sharing",
  cv: "https://drive.google.com/file/d/1osOOCtfIhHfsa8BBzlGmxmx8seuQ-GLc/view?usp=sharing",
  
  education: [
    {
      institution: "Rajkiya Engineering College Sonbhadra",
      degree: "Bachelor of Technology (Computer Science)",
      duration: "07 2020 -- 07 2024",
      location: "Sonbhadra, India"
    },
    {
      institution: "SDS Intercollege Varanasi",
      degree: "Intermediate (PCM)",
      duration: "2018 -- 2020",
      location: "Varanasi, India"
    }
  ],
  
  coursework: [
    "Data Structures & Algorithms",
    "Mobile App Development",
    "UI/UX Design Principles",
    "Software Architecture",
    "REST API Development",
    "Cross-platform Development",
    "State Management Patterns",
    "Database Systems"
  ],
  
  technicalSkills: [
    {
      category: "Languages",
      items: ["Dart", "Go", "JavaScript", "Python", "Java"]
    },
    {
      category: "Developer Tools",
      items: ["Android Studio", "VS Code", "GoLand", "Intellij"]
    },
    {
      category: "Technologies/Frameworks",
      items: [
        "Flutter", "Bloc", "Riverpod", "Provider", "GetX", "Linux", "Go", "Gin", "GORM", 
        "GitHub", "NodeJS", "ExpressJS", "Git", "MongoDB", "DynamoDB", "PostgreSQL", 
        "MySQL", "SQLite", "Firebase", "serverless framework", "AWS lambda", "AWS (Cognito, API Gateway, S3)",
        "GitHub Actions", "RESTful APIs", "GraphQL"
      ]
    }
  ],
  
  experiences: [
    {
      company: "Internshala",
      link: "https://internshala.com/",
      position: "Associate Software Engineer",
      duration: "Feb 2024 - Present",
      location: "Gurugram",
      remote: false,
      description: [
        "Promoted from intern to full-time role based on exceptional Flutter development performance",
        "Designed and implemented iOS Flutter application architecture using Riverpod with clean architecture principles (Repository Pattern, Use Cases, and Domain-Driven Design)",
        "Developed a robust centralized cookie management system for API interactions using Dio, improving authentication workflows and security",
        "Created background API calling system with retry mechanisms and offline-first capabilities",
        "Built reusable UI components with complex state management, improving development velocity by 30%",
        "Implemented complex purchase flow with proper state handling and error recovery mechanisms"
      ],
      technologies: "Flutter, Riverpod, Clean Architecture, Dio, iOS Development, REST APIs"
    },
    {
      company: "Visario",
      link: "https://www.myvisario.com/",
      position: "Full Stack Developer",
      duration: "Sep 2023 - Feb 2024",
      location: "Amsterdam-Netherlands",
      remote: true,
      description: [
        "Designed and developed full-stack visa application platform with Flutter frontend and Go backend",
        "Implemented complex multi-step user onboarding process with form validation, image uploads, and document processing",
        "Built responsive and adaptive UI components that work seamlessly across mobile, tablet, and web",
        "Integrated Razorpay payment gateway with secure transaction handling and receipt generation",
        "Utilized Flutter's Riverpod for state management, ensuring clean separation of UI and business logic"
      ],
      technologies: "Flutter (Riverpod), Go, AWS (Cognito, Lambda, API Gateway, DynamoDB, S3), RESTful APIs"
    },
    {
      company: "Subspace",
      link: "https://subspace.money/",
      position: "SDE Internship",
      duration: "Oct 2023 - Dec 2023",
      location: "Bengaluru",
      remote: true,
      description: [
        "Developed Flutter applications with Bloc pattern for predictable state management",
        "Created complex UI animations and transitions for enhanced user experience",
        "Implemented GraphQL API integration for efficient data fetching and real-time updates",
        "Optimized app performance through widget rebuilding optimization and memory management"
      ],
      technologies: "Flutter (Bloc), Flutter Animation, GraphQL, Node.js"
    },
    {
      company: "AsyncApp YouTube",
      link: "https://www.youtube.com/@asyncapp",
      position: "Flutter and Full-Stack Educator",
      duration: "Feb 2023 - Present",
      location: "YouTube Channel",
      remote: true,
      description: [
        "Create educational content focused on Flutter development, state management, and app architecture",
        "Produce tutorial series on integrating Flutter with backend technologies like Go and Node.js",
        "Demonstrate implementation of advanced Flutter features including animations, custom painters, and complex widgets",
        "Share knowledge on deployment strategies and cloud integration with AWS and Firebase"
      ],
      technologies: "Flutter, Go, Node.js, AWS, Firebase"
    },
    {
      company: "GradClabs",
      link: "https://gradclubs.app/",
      position: "Flutter Developer Internship",
      duration: "Jun 2023 - Aug 2023",
      location: "Canada",
      remote: true,
      description: [
        "Developed responsive Flutter web application with adaptive layouts for different screen sizes",
        "Implemented complete chatbot system with natural language processing integration",
        "Created WhatsApp automation system for user notifications and engagement",
        "Built and deployed application using Firebase for authentication, database, and hosting"
      ],
      technologies: "Flutter (Provider), Node.js, AWS (EC2), Firebase (Functions, Hosting, Storage)"
    },
    {
      company: "Sofodel",
      link: "https://www.sofodel.com/",
      position: "Flutter Developer Internship",
      duration: "Oct 2022 - Jun 2023",
      location: "Delhi, India",
      remote: true,
      description: [
        "Designed and implemented UI components following material design guidelines",
        "Built responsive layouts that adapt to different screen sizes and orientations",
        "Collaborated in cross-functional teams for application development and deployment",
        "Utilized Provider and GetX state management solutions for various applications"
      ],
      technologies: "Flutter (Provider, GetX), Node.js, RESTful APIs"
    }
  ],
  
  projects: [
    {
      title: "Parcha (Invoice & Inventory System)",
      link: "https://play.google.com/store/apps/details?id=com.myligh.parcha.parcha_app",
      duration: "12 2024 – 01 2025",
      technologies: "Flutter (Riverpod), SQLite, IndexDB",
      description: [
        "Built cross-platform solution using Flutter that works seamlessly across desktop, mobile, and web platforms",
        "Implemented complex state management using Riverpod for predictable application behavior",
        "Developed offline-first architecture with SQLite on mobile and IndexDB on web for local data persistence",
        "Created custom PDF invoice generation with integrated UPI payment QR codes",
        "Built responsive UI with multiple themes and layout adaptations for different device sizes"
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.myligh.parcha.parcha_app"
    },
    {
      title: "Restaurant Management Suite",
      link: "",
      duration: "Present",
      technologies: "Go (GIN, GORM), PostgreSQL, Flutter, React",
      description: [
        "Developing Flutter admin dashboard with complex UI components and real-time data visualization",
        "Implementing advanced state management for multi-outlet management with Riverpod",
        "Building responsive UIs that adapt to mobile, tablet, and desktop form factors",
        "Creating custom Flutter widgets for tableside ordering and menu management",
        "Integrating with RESTful API backend built with Go for real-time data synchronization"
      ]
    },
    {
      title: "Utility Flutter for Pub.dev",
      link: "https://pub.dev/packages/utility_flutter",
      duration: "10 2023",
      technologies: "Flutter, Dart, HTTP, Shared Preferences",
      description: [
        "Published Flutter package with over 500+ downloads on pub.dev used by developers worldwide",
        "Implemented simplified HTTP client with standardized request/response handling and retry mechanisms",
        "Created easy-to-use shared preferences wrapper for local storage with type safety",
        "Wrote comprehensive documentation and examples for developer adoption"
      ],
      liveLink: "https://pub.dev/packages/utility_flutter"
    },
    {
      title: "Shyampatt (Painting Canvas and Whiteboard)",
      link: "https://play.google.com/store/apps/details?id=com.mylight.shyampatt",
      duration: "09 2023",
      technologies: "Flutter, Riverpod, Hive DB, CustomPainter",
      description: [
        "Developed cross-platform drawing application with Flutter's CustomPainter for real-time drawing capabilities",
        "Implemented platform-specific code for Android TV, Windows PC, and mobile devices",
        "Used Riverpod for state management of complex drawing state (strokes, colors, brush sizes)",
        "Created persistent storage system using Hive DB for saving and loading drawings"
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.mylight.shyampatt"
    },
    {
      title: "File Size Reducer",
      link: "https://github.com/navneetprajapati26/file_reducer",
      duration: "09 2023",
      technologies: "Flutter, BLoC, Go Routes, Express.js",
      description: [
        "Built Flutter application with BLoC pattern for predictable state management",
        "Implemented Go Routes for declarative routing and deep linking support",
        "Created custom UI for file upload, quality selection, and download interfaces",
        "Integrated with Express.js backend for file processing and compression"
      ]
    },
    {
      title: "Dynamic Wallpaper Application",
      link: "https://play.google.com/store/apps/details?id=com.mylight.wallApp",
      duration: "04 2023",
      technologies: "Flutter, Provider, REST API Integration",
      description: [
        "Created Flutter application with Provider state management for wallpaper browsing and setting",
        "Implemented platform-specific code for setting wallpapers on Android devices",
        "Built custom grid layout with lazy loading and image caching for optimal performance",
        "Integrated with REST API for fetching wallpaper collections with search functionality"
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.mylight.wallApp"
    }
  ],
  
  extracurricular: [
    {
      title: "Class Representative",
      description: "Served as Class Representative for Computer Science branch in Rajkiya Engineering College, coordinating between students and faculty. Led skit department for college cultural events, demonstrating teamwork and creative direction."
    }
  ]
};