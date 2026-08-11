export const personal = {
  name: 'LAWRANCE WILLIAM Y',
  fullName: 'Lawrance William Y',
  title: 'Full Stack MERN Developer',
  email: 'lawrancewilliam2605@gmail.com',
  phone: '+91 9360017082',
  location: 'Salem, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/lawrance-william-y',
  github: 'https://github.com/lawrancewilliam',
  resumeUrl: 'https://raw.githubusercontent.com/lawrancewilliam/My-Portfolio/main/Lawrance%20Resume.pdf',
  brand: 'LAWRANCE WILLIAM Y ',
};

export const heroRoles = [
  'MERN Stack Developer',
  'React Developer',
  'Backend Developer',
  'UI Enthusiast',
  'Problem Solver',
];

export const stats = [
  { label: 'Projects Built', value: '8+' },
  { label: 'Technologies Learned', value: '20+' },
  { label: 'Internship Experience', value: '15 Days' },
  { label: 'Certifications Earned', value: '6+' },
];

export const aboutCards = [
  {
    label: 'Introduction',
    title: 'Who I Am',
    description:
      'Enthusiastic postgraduate with a strong foundation in software development and web design. Passionate about bridging backend logic with modern, user-centric interfaces.',
    span: 'large',
  },
  {
    label: 'Objective',
    title: 'Career Goal',
    description:
      'Eager to contribute technical skills in full-stack MERN development to a collaborative team while continuing to grow as a professional.',
    span: 'normal',
  },
  {
    label: 'Skills',
    title: 'Core Strengths',
    description: 'Teamwork, critical thinking, adaptability, and active listening with a focus on clean, scalable code.',
    span: 'normal',
  },
  {
    label: 'Internship',
    title: 'Livewire Experience',
    description: 'Completed an intensive MERN stack internship building and deploying scalable web applications.',
    span: 'normal',
  },
  {
    label: 'Education',
    title: 'MCA Pursuing',
    description: 'Master of Computer Application at Sona College of Technology.',
    span: 'normal',
  },
  {
    label: 'Impact',
    title: 'Quick Stats',
    description: '5+ projects, 20+ technologies, and hands-on experience across the full MERN stack.',
    span: 'wide',
  },
];

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    center: false,
    color: '#d4af37',
    gradient: 'linear-gradient(145deg, #2a2210, #0a0a0a)',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    center: false,
    color: '#f5d060',
    gradient: 'linear-gradient(145deg, #1f1a0d, #0a0a0a)',
    skills: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Passport Authentication', icon: 'passport' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    center: false,
    color: '#ffd700',
    gradient: 'linear-gradient(145deg, #1a1608, #0a0a0a)',
    skills: [
      { name: 'MongoDB', icon: 'mongo' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Amazon RDS', icon: 'mysql' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming Languages',
    center: false,
    color: '#c9a227',
    gradient: 'linear-gradient(145deg, #151208, #0a0a0a)',
    skills: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    center: false,
    color: '#b8860b',
    gradient: 'linear-gradient(145deg, #0f0d06, #0a0a0a)',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];

export const experience = [
  {
    period: '2026',
    role: 'AI Web Development Graduate',
    company: 'Symphozen Labs × Sona College of Technology',
    duration: '60 Hours',
    tags: [
      'AI-Powered Web Apps',
      'Full-Stack AI Integration',
      'Modern Tech Frameworks',
      'Real-world App Building',
      'Hands-on Mentorship',
    ],
  },
  {
    period: '2025',
    role: 'Full Stack Intern',
    company: 'Livewire',
    duration: '15 Days',
    highlights: [
      'MERN Stack Development',
      'Passport Authentication',
      'MongoDB & Express APIs',
      'React frontend integration',
      'REST API design',
      'Team Collaboration',
    ],
  },
];

export const projects = [
  {
    title: 'My PC Planner',
    description:
      'A full-stack PC building planner that helps users configure compatible components, compare specs, and plan builds with an intuitive MERN-powered interface.',
    image: 'https://picsum.photos/seed/pcplanner/900/500',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Component compatibility', 'Build comparison', 'User dashboards', 'REST API backend'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Learnify',
    description:
      'Cloud-based e-learning platform with automated assessment, certification workflows, AWS S3 storage, and RDS-optimized database management.',
    image: 'https://picsum.photos/seed/learnify/900/500',
    tech: ['PHP', 'MySQL', 'AWS', 'RDS'],
    features: ['Course management', 'Auto assessments', 'Certification flow', 'Secure cloud storage'],
    github: '#',
    demo: '#',
  },
  {
    title: 'CampusRepo',
    compact: true,
    description:
      'GitHub-inspired academic project-sharing platform for students and admins — upload, explore, and download projects with role-based dashboards.',
    image: 'https://picsum.photos/seed/campusrepo/900/500',
    tech: ['React', 'Node.js', 'Express', 'React Router', 'Context API'],
    features: [
      'Role-based Authentication',
      'Student & Admin Dashboards',
      'Search, Favorites & Downloads',
      'Responsive Light/Dark UI',
      'MongoDB-ready Architecture',
    ],
    highlights: [
      'Authentication & State Management',
      'Full Stack Architecture',
      'Modern UI/UX Design',
    ],
    github: 'https://github.com/lawrancewilliam/Campus-repo',
    demo: 'https://campus-repo.vercel.app/',
  },
  {
    title: 'Portfolio',
    description:
      'A premium interactive portfolio showcasing my projects, technical skills, certifications, achievements, education, and experience with modern React animations and React Bits components.',
    image: '',
    tech: ['React', 'Framer Motion', 'React Bits', 'Vite', 'GSAP'],
    features: [
      'Responsive Design',
      'Interactive UI',
      'Ultra Black Dark Theme',
      'Scroll Stack Projects',
      'Chroma Grid Skills',
      'Border Glow Education Cards',
      'Target Cursor',
      'Dot Field Hero Background',
    ],
    github: '#',
    demo: '#',
  },
];

export const certifications = [
  { label: 'Internship', title: 'Full Stack Internship', description: 'Livewire — MERN Stack Development' },
  { label: 'NPTEL', title: 'Java Programming', description: 'NPTEL Certification — Java Programming' },
  { label: 'Music', title: 'Trinity Grade 1 Keyboard', description: 'Trinity College London Certification' },
  { label: 'Technical', title: 'Technical Quiz Certificate', description: 'FutureSkills Prime — Data & AI' },
  { label: 'AI Dev', title: 'AI-Assisted App Dev', description: 'FutureSkills Prime Certification' },
  { label: 'Security', title: 'Cybersecurity', description: 'Infosys Springboard Program' },
];

export const achievements = [
  { title: 'MERN Internship', description: 'Completed intensive full-stack internship at Livewire' },
  { title: '60-Hour Full Stack Course', description: 'Completed 60-hour Full Stack Development course — Technology: Svelte' },
  { title: 'NPTEL Certification', description: 'Java Programming — NPTEL Certified' },
  { title: 'Technical Quiz', description: 'Participated in competitive technical assessments' },
  { title: 'Trinity Certification', description: 'Grade 1 Keyboard — Trinity College London' },
  { title: 'Academic Excellence', description: 'Pursuing MCA at Sona College of Technology' },
];

export const education = [
  {
    qualification: 'PG',
    degree: 'Master of Computer Application',
    institution: 'Sona College of Technology',
    duration: '2025 – 2027',
    keyLearning: ['Web Technologies', 'Cloud Computing', 'Software Engineering', 'Full Stack Development'],
  },
  {
    qualification: 'UG',
    degree: 'B.Sc Computer Science',
    institution: 'Jairam Arts & Science College',
    duration: '2022 – 2025',
    keyLearning: ['Data Structures', 'Operating Systems', 'Database Systems', 'OOP Concepts'],
  },
  {
    qualification: 'HSC',
    degree: 'Higher Secondary Certificate',
    institution: 'St. John Matric Higher Secondary',
    duration: '2021 – 2022',
    keyLearning: ['Computer Science', 'Mathematics', 'Problem Solving'],
  },
  {
    qualification: 'SSLC',
    degree: 'Secondary School Leaving Certificate',
    institution: 'St. John Matric Higher Secondary',
    duration: '2019 – 2020',
    keyLearning: ['Science Fundamentals', 'Mathematics', 'Computer Basics'],
  },
];

export const techStack = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript',
  'Bootstrap', 'Tailwind CSS', 'Passport.js', 'Git', 'GitHub', 'VS Code',
];

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];
