export interface Skill {
  name: string;
  description: string;
  iconName: string;
  glowColor: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture: string[];
  challenges: string;
  solutions: string;
  futureScope: string[];
  isFlagship?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  credentialUrl?: string;
  imageUrl?: string;
  badgeType: string;
  date: string;
}

export interface AchievementItem {
  title: string;
  event: string;
  description: string;
  outcome: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Mahesh Gajanan Kamat",
    titles: [
      "AI Engineer",
      "Data Analytics Enthusiast",
      "Machine Learning Developer",
      "Full Stack Developer"
    ],
    summary: "Motivated Information Science and Engineering undergraduate seeking an entry-level opportunity in Artificial Intelligence, Machine Learning, Data Science, or Data Analytics to apply technical knowledge, solve real-world problems, and contribute to organizational growth.",
    objective: "Seeking opportunities to build intelligent AI-powered applications, transform complex data into actionable insights, and develop scalable end-to-end systems that drive impact.",
    email: "maheshkamat165@gmail.com",
    phone: "+91 6364209080",
    location: "Sirsi, Karnataka, India",
    address: "Marigudi Road, Sirsi, Uttara Kannada, Karnataka – 581401",
    github: "Mahesh-0711",
    linkedin: "mahesh-kamat-",
    availability: "Open for Internships & Full-Time Roles",
    cvUrl: "#"
  },
  
  aboutMetrics: [
    { label: "CGPA", value: "7.91/10" },
    { label: "Graduation", value: "2027" },
    { label: "Focus Area", value: "AI & ML" },
    { label: "Projects Completed", value: "5" },
    { label: "Certifications", value: "6" }
  ],

  skills: [
    {
      category: "Programming",
      skills: [
        { name: "Python", description: "Primary language for AI/ML, time-series forecasting, and automation scripts.", iconName: "python", glowColor: "from-blue-500 to-yellow-500" },
        { name: "Java", description: "Object-oriented software development and structured application programming.", iconName: "java", glowColor: "from-orange-500 to-red-600" },
        { name: "C", description: "Low-level system programming, pointers, structures, and memory layouts.", iconName: "c", glowColor: "from-blue-600 to-indigo-500" },
        { name: "R", description: "Statistical computing, data analysis, modeling, and plotting visualizations.", iconName: "r", glowColor: "from-blue-400 to-blue-700" }
      ]
    },
    {
      category: "AI & ML",
      skills: [
        { name: "Machine Learning", description: "Supervised and unsupervised models, custom classification pipelines.", iconName: "brain", glowColor: "from-purple-500 to-pink-500" },
        { name: "Deep Learning", description: "Neural networks, layers optimization, and deep classification setups.", iconName: "cpu", glowColor: "from-red-500 to-purple-600" },
        { name: "NLP", description: "Natural Language Processing, text mining, and LLM-powered context analysis.", iconName: "message-square", glowColor: "from-indigo-500 to-cyan-500" },
        { name: "Computer Vision", description: "Biometric image processing, thresholding, and CLAHE enhancements with OpenCV.", iconName: "eye", glowColor: "from-emerald-500 to-teal-500" }
      ]
    },
    {
      category: "Data Analytics",
      skills: [
        { name: "Power BI", description: "Interactive dashboard reporting, data modeling, and DAX query creations.", iconName: "bar-chart", glowColor: "from-yellow-400 to-amber-500" },
        { name: "Tableau", description: "Visual analytics, story plotting, workbooks publication, and metric charts.", iconName: "tableau", glowColor: "from-orange-400 to-cyan-500" },
        { name: "Excel", description: "CLEAN structures, Pivot Tables, formulas, VLOOKUP/XLOOKUP audits.", iconName: "file-spreadsheet", glowColor: "from-green-600 to-emerald-500" },
        { name: "Pandas", description: "DataFrame data manipulation, data filtering, and vector operations.", iconName: "table", glowColor: "from-purple-600 to-blue-600" },
        { name: "Plotly", description: "Interactive HTML graphs, reactive plots, and custom visualizations.", iconName: "line-chart", glowColor: "from-pink-500 to-rose-500" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", description: "Modern modular UI component trees, state hooks, and virtual DOM mapping.", iconName: "react", glowColor: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "FastAPI", description: "Asynchronous Python server routing, validation schemas, and automated swagger API docs.", iconName: "zap", glowColor: "from-emerald-400 to-teal-500" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", description: "Relational database schema modeling, constraints, indexing, and audits.", iconName: "mysql", glowColor: "from-blue-500 to-orange-400" },
        { name: "MongoDB", description: "NoSQL document store clusters, collections, aggregation pipelines.", iconName: "mongodb", glowColor: "from-green-500 to-emerald-600" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", description: "Distributed version control system, branching commits, merging branches.", iconName: "git", glowColor: "from-orange-500 to-red-500" },
        { name: "GitHub", description: "Repository sharing, collaboration checks, pull requests, issue audits.", iconName: "github", glowColor: "from-gray-500 to-gray-800" },
        { name: "REST APIs", description: "Secure stateless endpoint routing, query details, code status audits.", iconName: "link", glowColor: "from-indigo-400 to-blue-500" }
      ]
    },
    {
      category: "Concepts",
      skills: [
        { name: "Data Structures", description: "Arrays, lists, queues, trees, graphs, and algorithmic complexity analysis.", iconName: "code", glowColor: "from-purple-500 to-indigo-500" },
        { name: "OOP", description: "Object-Oriented Programming concepts: inheritance, polymorphism, encapsulation, and abstraction.", iconName: "cpu", glowColor: "from-blue-500 to-cyan-500" },
        { name: "DBMS", description: "Database Management Systems: relational design, transactions, ACID, and normalization.", iconName: "database", glowColor: "from-emerald-500 to-teal-500" },
        { name: "Computer Networks", description: "Networking layers, protocols (HTTP, TCP/IP, DNS), routing, and sockets.", iconName: "link", glowColor: "from-brand-purple to-brand-blue" }
      ]
    }
  ] as SkillCategory[],

  journeyTimeline: [
    { year: "2023", title: "Enrolled in Canara Engineering College", description: "Admitted into B.E. Information Science and Engineering program.", iconName: "school" },
    { year: "2023 - 2024", title: "Built Strong Foundations", description: "Mastered core programming languages (Python, Java, C, R) and Data Structures.", iconName: "code" },
    { year: "2024", title: "Databases & API Engineering", description: "Learned MySQL, MongoDB, and REST API creation patterns with FastAPI.", iconName: "database" },
    { year: "2025", title: "Biometric Blood Group Detector", description: "Built fingerprint blood group predictor using OpenCV image preprocessing and classification.", iconName: "brain" },
    { year: "2025", title: "AI Business Analytics Platform", description: "Developed flagship SaaS platform integrating Gemini LLM API and Meta Prophet forecasting.", iconName: "trending-up" },
    { year: "2026 - Present", title: "Transitioning to Industry", description: "Seeking entry-level roles and internships in AI/ML, Data Analytics, and Full Stack.", iconName: "briefcase" }
  ] as TimelineEvent[],

  projects: [
    {
      id: "business-analytics",
      title: "AI Business Analytics Platform",
      tagline: "Full-Stack AI & Data Analytics",
      description: "A full-stack AI-powered Business Analytics Platform providing automated CSV processing, KPI dashboards, AI-generated business insights, natural language queries, and sales forecasting.",
      longDescription: "Developed a full-stack AI-powered Business Analytics Platform using FastAPI and React.js for end-to-end business data analysis. It enables users to upload complex spreadsheets, automatically parse columns via Pandas, view interactive KPI visualizations, query datasets using natural language, and run predictive forecasting on temporal trends.",
      problemStatement: "Non-technical business managers frequently struggle to extract insights from raw spreadsheets, requiring expensive data analysts and time-consuming manual report generation.",
      solution: "Integrated Google Gemini AI for business insights and natural language queries, and used the Prophet model for sales forecasting. Built on FastAPI asynchronously and React on frontend.",
      keyFeatures: [
        "React Frontend modular state hooks & responsive dashboard styling",
        "FastAPI Backend asynchronous routing, validation, and metadata schemas",
        "Secure JWT authentication for stateless session control",
        "Automated CSV processing and column type identification via Pandas",
        "Interactive KPI charts and plots rendered using Plotly and React",
        "Google Gemini AI integration for business insights and natural language queries",
        "Meta Prophet ML model integration for sales forecasting"
      ],
      technologies: ["Python", "FastAPI", "React", "JWT", "Gemini API", "Plotly", "Pandas", "SQLite", "SQLAlchemy", "Git", "REST APIs"],
      githubUrl: "https://github.com/Mahesh-0711/AI-Business-Analytics-Platform",
      architecture: [
        "React Frontend (Vite, Tailwind, Plotly.js)",
        "FastAPI Backend REST endpoints",
        "SQLite Database storing user records and file history",
        "Google Gemini API integration (Langchain-style queries)",
        "Prophet ML Model execution for analytics"
      ],
      challenges: "Varying spreadsheet layouts (missing cells, inconsistent date formats, raw text fields) crashing database ingestion.",
      solutions: "Implemented a robust pre-processing layer using Pandas that runs outlier checks, date parsing fallback strategies, and automated cell formatting before loading data.",
      futureScope: [
        "Integrate live SQL database connectors (MySQL, PostgreSQL)",
        "Add PDF/PowerPoint report export features",
        "Deploy containerized microservices using Docker"
      ],
      isFlagship: true
    },
    {
      id: "blood-group-detection",
      title: "Fingerprint Blood Group Detector",
      tagline: "Machine Learning & Computer Vision",
      description: "Machine Learning-based fingerprint analysis system capable of identifying blood groups through image processing and feature extraction.",
      longDescription: "Developed a fingerprint-based blood group detection system in a four-member team. The system implements digital image preprocessing, ridge orientation mapping, minutiae point coordinates extraction, and classification models to identify correlations between fingerprints and blood groups.",
      problemStatement: "Standard blood group identification requires invasive chemical blood tests (finger-prick), which is inconvenient, carries contamination risks, and lacks digitization options.",
      solution: "Developed an image-processing pipeline that extracts biometric minutiae and textures from high-resolution fingerprint scans and inputs them into classification models. Applied OpenCV and Scikit-learn pipelines.",
      keyFeatures: [
        "Fingerprint image preprocessing (denoising, contrast enhancement using CLAHE)",
        "Ridge density analysis and orientation mapping",
        "Minutiae point extraction using customized OpenCV functions",
        "Classification testing comparing Random Forests and Deep Convolutional Networks",
        "Desktop interface for scan uploading and analysis logs",
        "Gabor filtering for ridge enhancement and orientation estimation",
        "Adaptive thresholding and morphological skeletonization structures"
      ],
      technologies: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "Scikit-Learn"],
      githubUrl: "https://github.com/Mahesh-0711/Fingerprint-Based-Blood-Group-Detection",
      architecture: [
        "Biometric scan input (high-res images)",
        "OpenCV preprocessing layer (Adaptive Thresholding, Gabor filtering)",
        "Feature vector computation (minutiae counts, ridge distances)",
        "Scikit-learn classification pipeline",
        "Result dashboard display"
      ],
      challenges: "Low-contrast fingerprint ridges and scanner noise producing high false-negative ratios in feature extraction.",
      solutions: "Implemented Contrast Limited Adaptive Histogram Equalization (CLAHE) coupled with morphological opening and binarization, yielding sharp binary skeletonized ridges.",
      futureScope: [
        "Incorporate a larger, more diverse training dataset to improve accuracy",
        "Develop a lightweight Android/iOS application using TensorFlow Lite",
        "Add secure storage protocols for biometric data"
      ]
    },
    {
      id: "ai-call-agent",
      title: "Sclerathon AI Call Agent",
      tagline: "Hackathon Project • Voice Routing NLP",
      description: "An automated voice routing and customer query handling agent built using natural language processing pipelines during the Sclerathon Hackathon.",
      longDescription: "Developed an AI call agent for intelligent customer query handling and automated call redirection during the Sclerathon Hackathon. The system parses spoken dialog audio files, performs intent classification using customized NLP pipelines, and routes calls programmatically to optimize service queues.",
      problemStatement: "Support lines experience significant congestion due to manual call routing, which increases customer hold times and raises support overhead costs.",
      solution: "Engineered a low-latency telephony router simulating real-time audio transcription and intent parsing to dispatch support calls programmatically.",
      keyFeatures: [
        "Real-time voice query transcription simulator",
        "Intent classification modeling using fine-tuned NLP pipelines",
        "Automated call queue redirection and department routing rules",
        "Simulated telephony API webhook integrations",
        "Interactive department status control panels",
        "High-throughput concurrent queuing logger structures",
        "Voice dialogue sentiment analysis features"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "FastAPI", "REST APIs", "Git"],
      githubUrl: "https://github.com/Mahesh-0711/Sclerathon-AI-Call-Agent",
      architecture: [
        "FastAPI Asynchronous Gateway service",
        "NLP Intent Classifier pipeline model",
        "Call routing logic webhooks",
        "Telephony routing simulated logs console"
      ],
      challenges: "High processing lag in parsing continuous audio data frames.",
      solutions: "Implemented multi-threaded queuing workers and downsampled audio rates, dropping processing time to under 1.2s.",
      futureScope: [
        "Integrate live Twilio voice response webhooks",
        "Support regional language query mapping",
        "Enhance dialogue voice response agents"
      ]
    }
  ] as Project[],

  education: [
    {
      institution: "Canara Engineering College, Mangalore",
      degree: "Bachelor of Engineering (B.E.)",
      duration: "2023 – 2027",
      score: "CGPA 7.91 / 10",
      details: "Information Science and Engineering. Specializing in AI, Machine Learning, Data Analytics, and Full Stack Development."
    },
    {
      institution: "M.E.S. PU College, Sirsi",
      degree: "Pre-University Course (PUC)",
      duration: "2022 – 2023",
      score: "91%",
      details: "Focused on PCMB (Physics, Chemistry, Mathematics, Biology). Earned top distinction grades in Math and Physics."
    },
    {
      institution: "Don Bosco High School, Sirsi",
      degree: "SSLC (Secondary School Leaving Certificate)",
      duration: "2020 – 2021",
      score: "94%",
      details: "General high school studies. Active participation in district science exhibitions and computer labs."
    }
  ] as EducationItem[],

  certifications: [
    { title: "Programming in Java", provider: "NPTEL", badgeType: "Elite Certificate · 88%", date: "Oct 2025", imageUrl: "/certificates/nptel-java.jpeg" },
    { title: "Sclerathon 2.0", provider: "Canara Engineering College", badgeType: "Certificate of Participation", date: "Dec 2025", imageUrl: "/certificates/sclerathon.jpeg" },
    { title: "Introduction to Data Science", provider: "Infosys Springboard", badgeType: "Course Completion", date: "Mar 2026", imageUrl: "/certificates/infosys-data-science.jpeg" },
    { title: "Introduction to Natural Language Processing", provider: "Infosys Springboard", badgeType: "Course Completion", date: "Mar 2026", imageUrl: "/certificates/infosys-nlp.jpeg" },
    { title: "Introduction to Artificial Intelligence", provider: "Infosys Springboard", badgeType: "Course Completion", date: "Mar 2026", imageUrl: "/certificates/infosys-ai.jpeg" },
    { title: "Foundation Workshop on Product Design & Innovation", provider: "DM IISc", badgeType: "Certificate of Completion", date: "Nov 2025", imageUrl: "/certificates/product-design-innovation.jpeg" }
  ] as CertificationItem[],

  achievements: [
    {
      title: "Developed AI Call Agent",
      event: "Sclerathon Hackathon",
      description: "Designed and engineered an automated AI Call Agent with a four-member team for customer query handling and call routing.",
      outcome: "Enabled natural dialog query processing, customer issue parsing, and automated routing capabilities."
    }
  ] as AchievementItem[],

  softSkills: [
    "Problem Solving",
    "Analytical Thinking",
    "Teamwork",
    "Adaptability",
    "Communication",
    "Continuous Learning"
  ]
};
