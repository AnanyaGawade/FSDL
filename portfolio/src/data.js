// Centralized content — edit here to update the site without touching components.

export const profile = {
  name: 'Ananya Vikas Gawade',
  taglines: ['AI & GenAI Enthusiast', 'Full-Stack Developer', 'UI/UX Designer'],
  location: 'Pune, Maharashtra, India',
  email: 'ananyagawade5@gmail.com',
  phone: '+91 7666255481',
  github: 'https://github.com/AnanyaGawade',
  githubLabel: 'github.com/AnanyaGawade',
  linkedin: 'https://linkedin.com/in/ananya-gawade',
  linkedinLabel: 'linkedin.com/in/ananya-gawade',
  intro:
    'Computer Engineering student (Computer Science, AI & Data Science focus) at Pimpri Chinchwad College of Engineering, CGPA 8.325 — building end-to-end products, from AI-powered systems to polished user interfaces.',
  resumeHref: '/resume.pdf', // Replace with your actual resume file (see README for instructions)
  photoSrc: '/profile-photo.png', // Replace with your cutout photo (see README for instructions)
};

export const about = {
  paragraphs: [
    "I work across the full stack of building a product — not just the code, but the thinking that comes before and after it. I design user-centered interfaces in Figma, moving from wireframes to clickable prototypes before a line of code is written.",
    "Then I build the thing: full-stack applications with React on the front end and Spring Boot, Java, and MySQL underneath, wired together with clean, well-documented REST APIs.",
    "Increasingly, I layer in intelligence — Python, LLMs, prompt engineering, Gemini AI and the OpenAI API — to make the products I ship actually reason, not just render.",
    "Outside of coursework, I lead as Accounts & Finance Head at MLSC PCCoE, and I've carried that same build-it-end-to-end habit into a full-stack internship where I shipped production features under real deadlines.",
  ],
};

export const skills = [
  {
    id: 'ai',
    label: 'AI / ML & Data',
    eyebrow: 'Systems that reason',
    items: [
      'Python',
      'Machine Learning (Supervised & Unsupervised)',
      'NLP Basics',
      'LLMs',
      'Generative AI',
      'Prompt Engineering',
      'Gemini AI',
      'OpenAI API basic',
      'Hugging Face basic',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'EDA',
      'Power BI',
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Development',
    eyebrow: 'Systems that run',
    items: [
      'Java',
      'C++',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Spring Boot',
      'HTML/CSS',
      'RESTful APIs',
      'SQL',
      'MySQL',
      'MongoDB',
      'SQLite',
    ],
  },
  {
    id: 'uiux',
    label: 'UI/UX Design',
    eyebrow: 'Systems that feel right',
    items: [
      'Figma (Certified)',
      'Sketch',
      'Adobe XD basic',
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Usability Testing',
      'Design Systems',
      'Responsive UI Design',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Tools',
    eyebrow: 'Everything underneath',
    items: [
      'Azure basic',
      'AWS basic',
      'GCP basic',
      'Git/GitHub',
      'Linux',
      'VS Code',
      'OOP',
      'Data Structures & Algorithms',
    ],
  },
];

export const experience = [
  {
    id: 'sindans',
    role: 'Full Stack Intern',
    org: 'Sindans Software Solutions',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Engineered a hospital file management system with React.js, improving data retrieval efficiency by ~35% and cutting report generation time by 20 minutes per session.',
      'Integrated RESTful APIs with Python and Spring Boot across 4+ modules.',
      'Resolved 15+ critical bugs, reducing downtime by ~25%.',
      'Collaborated in an Agile team, accelerating feature delivery by ~20% across 3 sprints.',
    ],
  },
];

export const projects = [
  {
    id: 'job-screening',
    title: 'AI-Based Job Screening System',
    subtitle: 'Multi-Agentic',
    description:
      'Automated candidate evaluation across 500+ resumes using a coordinated multi-agent pipeline, boosting screening speed by ~40%.',
    stack: ['Python', 'NLP', 'Scikit-learn', 'OpenAI API', 'Multi-Agent Architecture'],
    metric: '40% faster screening',
    href: 'https://github.com/AnanyaGawade',
    category: 'ai',
  },
  {
    id: 'finsight',
    title: 'FinSight',
    subtitle: 'Intelligent Money Management Platform',
    description:
      'AI-powered personal finance app with voice-based entry and real-time analytics for 50+ test users; improved budget accuracy by ~30%.',
    stack: ['Next.js', 'TypeScript', 'Gemini AI', 'SQLite', 'Drizzle ORM'],
    metric: '30% better budget accuracy',
    href: 'https://github.com/AnanyaGawade',
    category: 'ai',
  },
  {
    id: 'miras-studio',
    title: "Mira's Studio",
    subtitle: 'Appointment Management System',
    description:
      'Real-time salon scheduling system handling 100+ bookings/week, cutting manual scheduling effort by ~50%.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    metric: '100+ bookings/week',
    href: 'https://github.com/AnanyaGawade',
    category: 'fullstack',
  },
  {
    id: 'flowplan',
    title: 'FlowPlan',
    subtitle: 'Task Management Application',
    description:
      'Task manager built on a reusable component architecture, improving load time by ~30%.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    metric: '30% faster load time',
    href: 'https://github.com/AnanyaGawade',
    category: 'fullstack',
  },
  {
    id: 'lerno',
    title: 'Lerno',
    subtitle: 'Learning Management System',
    description: 'Scalable LMS supporting 200+ concurrent users across courses and cohorts.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    metric: '200+ concurrent users',
    href: 'https://github.com/AnanyaGawade',
    category: 'fullstack',
  },
];

export const leadership = [
  {
    id: 'mlsc-finance',
    role: 'Accounts & Finance Head',
    org: 'MLSC PCCoE',
    period: 'Aug 2025 – Present',
    points: [
      'Directed 5+ technical events and hackathons for 300+ participants.',
      'Delivered training sessions on Web Dev, AI, and Data Science, increasing engagement by ~40%.',
    ],
  },
  {
    id: 'mlsc-mgmt',
    role: 'Management Team Member',
    org: 'MLSC PCCoE',
    period: 'Oct 2024 – Apr 2025',
    points: ['Coordinated workshops and hackathons impacting 300+ students.'],
  },
];

export const certifications = [
  { id: 'nptel-python', title: 'Python for Data Science', issuer: 'NPTEL — Elite Score 73%' },
  { id: 'udemy-ml', title: 'Machine Learning using Python', issuer: 'Udemy' },
  { id: 'udemy-dsa', title: 'Mastering Data Structures & Algorithms in C++', issuer: 'Udemy' },
  { id: 'udemy-java', title: 'Java Masterclass 2025', issuer: 'Udemy' },
  { id: 'sololearn-js', title: 'Introduction to JavaScript & JavaScript Intermediate', issuer: 'SoloLearn' },
  { id: 'aws-simulearn', title: 'AWS SimuLearn: Cloud Computing Essentials', issuer: 'AWS Training & Certification' },
  { id: 'figma-uiux', title: 'Figma UI/UX Design Essentials', issuer: 'Figma' },
  { id: 'copyright-crop', title: 'Copyright Registration — AI-Based Crop Price Prediction System', issuer: 'Government of India' },
  { id: 'medium-pub', title: 'Cloud Infrastructure and Database Systems for Scalable Applications', issuer: 'Published on Medium' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
