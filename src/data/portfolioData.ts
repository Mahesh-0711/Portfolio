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
    summary: "Information Science and Engineering student specializing in Data Science, Data Analytics, and Full-Stack Development. Passionate about transforming complex datasets into clear, actionable insights, engineering robust machine learning pipelines, and building scalable, high-performance web applications that bridge data and user experience.",
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
      category: "Languages",
      skills: [
        { name: "Python", description: "Primary language for AI/ML, time-series forecasting, and data analysis.", iconName: "python", glowColor: "from-blue-500 to-yellow-500" },
        { name: "Java", description: "Object-oriented software development and structured application programming.", iconName: "java", glowColor: "from-orange-500 to-red-600" },
        { name: "JavaScript", description: "Dynamic scripting for client-side interactions and server-side runtimes.", iconName: "javascript", glowColor: "from-yellow-400 to-yellow-600" },
        { name: "C", description: "Low-level systems programming, algorithms, and memory management.", iconName: "c", glowColor: "from-blue-600 to-indigo-500" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", description: "Component-based library for building interactive user interfaces.", iconName: "react", glowColor: "from-cyan-400 to-blue-500" },
        { name: "HTML", description: "Semantic markup language for structuring web pages.", iconName: "html", glowColor: "from-orange-500 to-orange-600" },
        { name: "CSS", description: "Cascading style sheets for responsive layouts, styling, and design systems.", iconName: "css", glowColor: "from-blue-500 to-indigo-500" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", description: "Event-driven asynchronous JavaScript runtime environment.", iconName: "nodejs", glowColor: "from-green-500 to-emerald-600" },
        { name: "Express.js", description: "Minimalist web framework for Node.js API servers.", iconName: "express", glowColor: "from-gray-400 to-slate-500" },
        { name: "FastAPI", description: "Modern, high-performance web framework for Python APIs.", iconName: "zap", glowColor: "from-emerald-400 to-teal-500" },
        { name: "REST APIs", description: "Design and implementation of secure, stateless web services.", iconName: "link", glowColor: "from-indigo-400 to-blue-500" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", description: "NoSQL document-based database for scalable application data.", iconName: "mongodb", glowColor: "from-green-500 to-emerald-600" },
        { name: "MySQL", description: "Relational database schema modeling, queries, and constraints.", iconName: "mysql", glowColor: "from-blue-500 to-orange-400" }
      ]
    },
    {
      category: "AI & GenAI",
      skills: [
        { name: "Machine Learning", description: "Supervised and unsupervised models, training pipelines, and metrics.", iconName: "brain", glowColor: "from-purple-500 to-pink-500" },
        { name: "Deep Learning", description: "Neural networks design, activation functions, and layer tuning.", iconName: "cpu", glowColor: "from-red-500 to-purple-600" },
        { name: "NLP", description: "Natural Language Processing, text preprocessing, and lexical parsing.", iconName: "message-square", glowColor: "from-indigo-500 to-cyan-500" },
        { name: "Transformers", description: "Self-attention sequence architectures for generative tasks.", iconName: "shuffle", glowColor: "from-orange-400 to-red-500" },
        { name: "LLMs", description: "Large Language Models engineering, prompting, and application integration.", iconName: "bot", glowColor: "from-cyan-500 to-blue-600" },
        { name: "LangChain", description: "Orchestration library for chaining LLM calls and managing state.", iconName: "link-2", glowColor: "from-emerald-500 to-teal-600" },
        { name: "RAG", description: "Retrieval-Augmented Generation for grounded database query answers.", iconName: "database-zap", glowColor: "from-purple-600 to-pink-600" }
      ]
    },
    {
      category: "Data Analytics",
      skills: [
        { name: "Power BI", description: "Business intelligence reporting, data modeling, and DAX dashboard design.", iconName: "bar-chart", glowColor: "from-yellow-400 to-amber-500" },
        { name: "Tableau", description: "Visual analytics platform for interactive dashboards and story publications.", iconName: "tableau", glowColor: "from-orange-400 to-cyan-500" },
        { name: "Pandas", description: "Data structures and vector data analysis operations for Python.", iconName: "table", glowColor: "from-purple-600 to-blue-600" },
        { name: "NumPy", description: "Scientific computing, multi-dimensional arrays, and mathematical models.", iconName: "binary", glowColor: "from-blue-400 to-indigo-500" },
        { name: "Plotly", description: "Interactive data visualization library for customized responsive web charts.", iconName: "line-chart", glowColor: "from-pink-500 to-rose-500" },
        { name: "Excel", description: "Data organization, pivot tables, formulas, and lookups auditing.", iconName: "file-spreadsheet", glowColor: "from-green-600 to-emerald-500" }
      ]
    },
    {
      category: "Developer Tools",
      skills: [
        { name: "Git", description: "Distributed version control system for local code history checks.", iconName: "git", glowColor: "from-orange-500 to-red-500" },
        { name: "GitHub", description: "Remote repository hosting, issues, pulls, and developer collaboration.", iconName: "github", glowColor: "from-gray-500 to-gray-800" },
        { name: "VS Code", description: "Integrated development environment and workspace debugger.", iconName: "terminal", glowColor: "from-blue-500 to-cyan-600" },
        { name: "Postman", description: "API client for design validation, mockups, and endpoint testing.", iconName: "send", glowColor: "from-orange-600 to-red-500" }
      ]
    }
  ] as SkillCategory[],

  journeyTimeline: [
    { year: "2023", title: "Enrolled in Canara Engineering College", description: "Admitted into B.E. Information Science and Engineering program.", iconName: "school" },
    { year: "2023 - 2024", title: "Built Strong Foundations", description: "Mastered core programming languages (Python, Java, C, JavaScript) and Data Structures.", iconName: "code" },
    { year: "2024", title: "Databases & API Engineering", description: "Learned MySQL, MongoDB, and REST API creation patterns with FastAPI.", iconName: "database" },
    { year: "2025", title: "Biometric Blood Group Detector", description: "Built fingerprint blood group predictor using OpenCV image preprocessing and classification.", iconName: "brain" },
    { year: "2025", title: "AI Business Analytics Platform", description: "Developed flagship SaaS platform integrating Gemini LLM API and Meta Prophet forecasting.", iconName: "trending-up" },
    { year: "2026", title: "Sphere (SkillBridge)", description: "Built peer-to-peer skill swapping barter web application using MERN stack & REST APIs.", iconName: "users" },
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
      title: "Biometric Blood Group Detection System",
      tagline: "Machine Learning & Image Processing",
      description: "Collaborated in a team to build a machine learning model designed to detect blood groups based on biometric feature inputs.",
      longDescription: "Collaborated in a team to build a machine learning model designed to detect blood groups based on biometric feature inputs. The system implements digital image preprocessing, ridge orientation mapping, minutiae point coordinates extraction, and classification models to identify correlations between fingerprints and blood groups.",
      problemStatement: "Standard blood group identification requires invasive chemical blood tests (finger-prick), which is inconvenient, carries contamination risks, and lacks digitization options.",
      solution: "Developed an image-processing pipeline that extracts biometric minutiae and textures from high-resolution fingerprint scans and inputs them into classification models. Applied OpenCV and Scikit-learn pipelines.",
      keyFeatures: [
        "Collaborated in a team to build a machine learning model designed to detect blood groups based on biometric feature inputs",
        "Performed extensive data preprocessing and feature extraction techniques to ensure model training accuracy",
        "Participated actively across model testing, validation, cross-verification, and technical project documentation",
        "Contrast Limited Adaptive Histogram Equalization (CLAHE) for fingerprint contrast enhancement",
        "Adaptive thresholding, morphological skeletonization, and Gabor filtering for ridge enhancement"
      ],
      technologies: ["Python", "Machine Learning", "Image Processing", "OpenCV", "Scikit-Learn"],
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
      longDescription: "Developed an AI call agent for customer query handling and automated call redirection using Vapi, Python, and NLP workflows within 24 hours. The system parses spoken dialog audio files, performs intent classification using customized NLP pipelines, and routes calls programmatically to optimize service queues.",
      problemStatement: "Support lines experience significant congestion due to manual call routing, which increases customer hold times and raises support overhead costs.",
      solution: "Engineered a low-latency telephony router simulating real-time audio transcription and intent parsing to dispatch support calls programmatically using Vapi and Python.",
      keyFeatures: [
        "Real-time voice query transcription simulator using Vapi integrations",
        "Intent classification modeling using fine-tuned NLP pipelines",
        "Automated call queue redirection and department routing rules",
        "Simulated telephony API webhook integrations",
        "Interactive department status control panels",
        "Voice dialogue sentiment analysis features"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "FastAPI", "Vapi", "Git"],
      githubUrl: "https://github.com/Mahesh-0711/Sclerathon-AI-Call-Agent",
      architecture: [
        "FastAPI Asynchronous Gateway service",
        "Vapi Integration for Voice Conversational Agent",
        "NLP Intent Classifier pipeline model",
        "Call routing logic webhooks"
      ],
      challenges: "High processing lag in parsing continuous audio data frames.",
      solutions: "Implemented multi-threaded queuing workers and downsampled audio rates, dropping processing time to under 1.2s.",
      futureScope: [
        "Integrate live Twilio voice response webhooks",
        "Support regional language query mapping",
        "Enhance dialogue voice response agents"
      ]
    },
    {
      id: "sphere-skillbridge",
      title: "Sphere (SkillBridge)",
      tagline: "Peer-to-Peer Skill Swapping Platform",
      description: "A peer-to-peer skill-swapping platform where users exchange technical skills through a structured time-credit barter system.",
      longDescription: "Addressed the barrier of expensive online courses by building a peer-to-peer skill-swapping platform where users exchange technical skills through a structured time-credit barter system. Developed backend services in Node.js and Express.js to manage user profiles, skill requests, credit transactions, and dynamic session scheduling. Engineered flexible MongoDB schemas to handle match requests, pending swap approvals, and user rating histories accurately. Built a clean frontend in React.js featuring skill search, category filtering, and interactive request dashboards to ensure seamless user engagement.",
      problemStatement: "High costs of specialized online courses and absence of direct learning exchanges limit opportunities for collaborative skill building.",
      solution: "Engineered a decentralized time-credit barter platform using React.js, Node.js, Express.js, and MongoDB, allowing direct and seamless peer-to-peer knowledge transfers.",
      keyFeatures: [
        "Addressed the barrier of expensive online courses by building a peer-to-peer skill-swapping platform where users exchange technical skills through a structured time-credit barter system",
        "Developed backend services in Node.js and Express.js to manage user profiles, skill requests, credit transactions, and dynamic session scheduling",
        "Engineered flexible MongoDB schemas to handle match requests, pending swap approvals, and user rating histories accurately",
        "Built a clean frontend in React.js featuring skill search, category filtering, and interactive request dashboards to ensure seamless user engagement"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/Mahesh-0711/Sphere-SkillBridge",
      architecture: [
        "React.js single-page application client",
        "Node.js & Express.js REST API gateway backend",
        "MongoDB document collections & query validations"
      ],
      challenges: "Synchronizing time-credit transfers atomically to prevent race conditions during simultaneous user ratings.",
      solutions: "Used MongoDB session transactions coupled with backend request locking to verify and update user credit wallets consistently.",
      futureScope: [
        "Implement real-time messaging and video call rooms inside the app",
        "Integrate automated matching alerts via machine learning recommendations",
        "Deploy the ecosystem using Docker and AWS elastic beanstalk"
      ]
    }
  ] as Project[],

  education: [
    {
      institution: "Canara Engineering College",
      degree: "Bachelor of Engineering in Information Science and Engineering",
      duration: "2023 – 2027",
      score: "CGPA: 7.91/10",
      details: "Mangalore, India. Focused on core computer science foundations, information systems, software development, and AI engineering methodologies."
    },
    {
      institution: "M.E.S. PU College",
      degree: "Pre-University Course (PUC)",
      duration: "2022 – 2023",
      score: "Percentage: 91%",
      details: "Sirsi, India. Focused on PCMB (Physics, Chemistry, Mathematics, Biology). Completed with top-tier science and mathematical scores."
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
    { title: "Foundation Workshop on Product Design & Innovation", provider: "IISc Bangalore", badgeType: "Workshop (DM ISSC)", date: "Nov 2025", imageUrl: "/certificates/product-design-innovation.jpeg" },
    { title: "Sclerathon (24-Hour Hackathon)", provider: "Canara Engineering College", badgeType: "Developer (AI Call Agent)", date: "Dec 2025", imageUrl: "/certificates/sclerathon.jpeg" },
    { title: "Programming in Java", provider: "NPTEL", badgeType: "Elite Certificate · 88%", date: "Oct 2025", imageUrl: "/certificates/nptel-java.jpeg" },
    { title: "Introduction to MongoDB", provider: "MongoDB", badgeType: "Course Completion", date: "Apr 2025", imageUrl: "/certificates/mongodb.png" },
    { title: "Artificial Intelligence", provider: "Infosys Springboard", badgeType: "Course Certification", date: "Mar 2026", imageUrl: "/certificates/infosys-ai.jpeg" },
    { title: "Natural Language Processing", provider: "Infosys Springboard", badgeType: "Course Certification", date: "Mar 2026", imageUrl: "/certificates/infosys-nlp.jpeg" }
  ] as CertificationItem[],

  achievements: [
    {
      title: "Developed AI Call Agent",
      event: "Sclerathon (24-Hour Hackathon)",
      description: "Developed an AI-powered customer call agent using Vapi, Python, and NLP workflows within 24 hours.",
      outcome: "Enabled natural dialog query processing, customer issue parsing, and automated routing capabilities."
    },
    {
      title: "Medical Info Retrieval System",
      event: "CEATHERION 2025 (24-Hour Hackathon)",
      description: "Built a 24-hour hackathon project focused on automated medical information retrieval.",
      outcome: "Engineered automated query search and context parsing logic for medical inquiries."
    },
    {
      title: "Product Design & Innovation",
      event: "IISc Bangalore Workshop",
      description: "Attended Foundation Workshop on Product Design & Innovation (DM ISSC).",
      outcome: "Gained core competencies in product conceptualization and architectural design thinking."
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
