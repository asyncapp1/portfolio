import { ProfileData } from './types';

export const profileData: ProfileData = {
  name: "NAVNEET PRAJAPATI",
  location: "Azamgarh, Uttar Pradesh",
  phone: "+91 7271088606",
  email: "navneetprajapati26@gmail.com",
  linkedin: "https://www.linkedin.com/in/navneetprajapati26/",
  github: "https://github.com/navneetprajapati26",
  youtube: "https://www.youtube.com/@asyncapp",
  
  education: [
    {
      institution: "Rajkiya Engineering College Sonbhadra",
      degree: "Bachelor of technology (Computer science)",
      duration: "07 2020 -- 07 2024",
      location: "Sonbhadra, India"
    },
    {
      institution: "SDS Intercollege Varanasi",
      degree: "intermediate (PCM)",
      duration: "2018 -- 2020",
      location: "Varanasi, India"
    }
  ],
  
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "DBMS",
    "OOPS Concept",
    "Backend Development",
    "Android Development"
  ],
  
  technicalSkills: [
    {
      category: "Languages",
      items: ["Dart", "JavaScript", "Python", "Java", "C", "C++"]
    },
    {
      category: "Developer Tools",
      items: ["VS Code", "Android Studio", "Intellij"]
    },
    {
      category: "Technologies/Frameworks",
      items: ["Flutter", "Bloc", "Riverpod", "Provider", "GetX", "Linux", "GitHub", "NodeJS", "ExpressJS", "Git", "MongoDB", "DynamoDB", "serverless framework", "AWS lambda", "Firebase"]
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
        "Promoted from intern to full-time role. Achievements include:",
        "Designed code architecture for iOS Flutter projects implementing Riverpod with clean architecture",
        "Developed centralized cookie management system for API interactions using Dio",
        "Implemented background API calling system and background processing infrastructure",
        "Built common API calling framework with standardized response handling and force update functionality",
        "Successfully delivered purchase module for iOS and implemented numerous UI components with state management"
      ],
      technologies: "Flutter (Riverpod), clean architecture, Dio, iOS development"
    },
    {
      company: "Visario",
      link: "https://www.myvisario.com/",
      position: "Full Stack Developer",
      duration: "Sep 2023 - Feb 2024",
      location: "Amsterdam-Netherlands",
      remote: true,
      description: [
        "Here my role is Development of applications using Technologies: Flutter (Riverpod), Node.js, AWS (Cognito, Lambda, API Gateway, DynamoDB, S3 bucket)"
      ],
      technologies: "Flutter (Riverpod), Node.js, AWS"
    },
    {
      company: "Subspace",
      link: "https://subspace.money/",
      position: "SDE Internship",
      duration: "Oct 2023 - Dec 2023",
      location: "Bengaluru",
      remote: true,
      description: [
        "Here my role is Development of applications using Technologies: Flutter (Bloc), flutter-Animation, GraphQL API integration Node.js"
      ],
      technologies: "Flutter (Bloc), flutter-Animation, GraphQL, Node.js"
    },
    {
      company: "AsyncApp YouTube",
      link: "https://www.youtube.com/@asyncapp",
      position: "Educator",
      duration: "Feb 2023 - Present",
      location: "My own YouTube chanel",
      description: [
        "Creating and publishing educational content in video format. Leading the development of new projects and documentation."
      ],
      technologies: "Flutter, Node.js, AWS"
    },
    {
      company: "GradClabs",
      link: "https://gradclubs.app/",
      position: "Internship",
      duration: "Jun 2023 - Aug 2023",
      location: "Canda",
      remote: true,
      description: [
        "Here my role was developed a website using Flutter. Implemented a full Chatbot system and WhatsApp automation used technology: Flutter (Provider), Node.js, AWS (ES2 Instance), Firebase (functions, hosting, storage)."
      ],
      technologies: "Flutter (Provider), Node.js, AWS, Firebase"
    },
    {
      company: "Sofodel",
      link: "https://www.sofodel.com/",
      position: "Internship",
      duration: "Oct 2022 - Jun 2023",
      location: "Delhi, India",
      remote: true,
      description: [
        "Here my role was Focused on UI development. Assisted in the building and deployment of projects. using Flutter (Provider, GetX), Node.js"
      ],
      technologies: "Flutter (Provider, GetX), Node.js"
    }
  ],
  
  projects: [
    {
      title: "Utility Flutter for Pub.dev",
      link: "https://pub.dev/packages/utility_flutter",
      duration: "10 2023",
      technologies: "Flutter, Dart, HTTP, Shared Preferences",
      description: [
        "Open-source package simplifying HTTP and shared preferences operations in Flutter. Features include default headers, request timeouts, standardized error responses, and local variable storage."
      ],
      liveLink: "https://pub.dev/packages/utility_flutter"
    },
    {
      title: "Digital Painting Canvas and Whiteboard",
      link: "https://play.google.com/store/apps/details?id=com.mylight.shyampatt",
      duration: "09 2023",
      technologies: "Flutter, Riverpod, Hive DB, CustomPainter",
      description: [
        "Digital whiteboard for Android TV/Windows PC. Drawing platform for Android/iOS with multiple drawing saves and children's templates."
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.mylight.shyampatt"
    },
    {
      title: "Bill Generator Application",
      link: "https://play.google.com/store/apps/details?id=com.myligh.parcha.parcha_app",
      duration: "08 2023",
      technologies: "Provider, Hive DB",
      description: [
        "Manages shop info and bills (create, update, delete, share, PDF). Integrated customer database and archived bill access."
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.myligh.parcha.parcha_app"
    },
    {
      title: "Full-Stack Blogging Platform",
      link: "https://youtu.be/aWNm1VBFQII?si=b1k3bZqeIRd4xkF6",
      duration: "08 2023",
      technologies: "Flutter, Node.js",
      description: [
        "User authentication and blog management (post, edit, delete). Cross-user blog visibility. Accompanied by instructional YouTube series."
      ]
    },
    {
      title: "File Size Reducer",
      link: "https://github.com/navneetprajapati26/file_reducer",
      duration: "09 2023",
      technologies: "BLoC, Go Routes, Express.js",
      description: [
        "Reduces file quality as per user preference and retrieves files post-compression."
      ]
    },
    {
      title: "Real-Time Chatting Application",
      link: "https://github.com/navneetprajapati26/chat_app",
      duration: "07 2023",
      technologies: "GetX, Socket.io",
      description: [
        "Supports real-time group chats with user-specific nicknames."
      ]
    },
    {
      title: "Dynamic Wallpaper Application",
      link: "https://play.google.com/store/apps/details?id=com.mylight.wallApp",
      duration: "04 2023",
      technologies: "Provider, Wallpaper API",
      description: [
        "Features extensive wallpaper browsing, direct setting, and search functionality."
      ]
    },
    {
      title: "Classic Snake Game",
      link: "https://play.google.com/store/apps/details?id=com.mylight.snake_game",
      duration: "11 2022",
      technologies: "Flutter",
      description: [
        "Classic snake game with real-time score and high-score tracking."
      ]
    }
  ],
  
  extracurricular: [
    {
      title: "Team Leadership",
      description: "I am class representative of my branch in my college, and also I am head of skit department in our college."
    }
  ]
}; 