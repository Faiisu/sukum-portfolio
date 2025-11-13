export type Project = {
  title: string
  role: string
  description: string
  focus: string
  link: string
  image: string
}

export type SkillColumn = {
  title: string
  items: string[]
}

export const projects: Project[] = [
  {
    title: 'Bookstore Application',
    role: 'Full-stack Developer · Database Designer',
    description:
      'Built a React + FastAPI management interface for bookstore operations and modelled the relational database schema.',
    focus: 'Web · Database Design',
    link: 'https://github.com',
    image: 'https://placehold.co/800x450?text=Bookstore+App',
  },
  {
    title: 'Community Application',
    role: 'Project Manager · System & DB Designer',
    description:
      'Led 12 engineers to ship a campus communication and event platform, tracking milestones and architecting core modules.',
    focus: 'Project Leadership · System Design',
    link: 'https://github.com',
    image: 'https://placehold.co/800x450?text=Community+App',
  },
  {
    title: 'Gold Price Prediction',
    role: 'Deep Learning Engineer · Project Owner',
    description:
      'Designed an LSTM pipeline that ingests financial time-series data, preprocesses sequences, and predicts 5-minute price movement.',
    focus: 'AI · Time-series',
    link: 'https://github.com',
    image: 'https://placehold.co/800x450?text=Gold+Prediction',
  },
  {
    title: 'News Classification',
    role: 'Machine Learning Modeler',
    description: 'Developed and evaluated machine learning models to classify news content with reliable accuracy.',
    focus: 'ML · NLP',
    link: 'https://github.com',
    image: 'https://placehold.co/800x450?text=News+Classifier',
  },
]

export const profileParagraphs = [
  'I have experience in developing deep learning models and building data preprocessing pipelines with a strong foundation in algorithms and mathematics.',
  'I am particularly interested in applying AI and machine learning to improve business processes and system performance.',
]

export const education = {
  school: 'Kasetsart University',
  degree: 'Bachelor of Computer Engineering',
  timeline: '2023 – Present · GPA 3.04',
  note: 'Expected Graduation: 2027',
}

export const languages = [
  { name: 'Thai', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
]

export const skillColumns: SkillColumn[] = [
  {
    title: 'Core Strengths',
    items: [
      'Data Engineering / Data Science',
      'Web Full-stack Development',
      'Machine Learning / AI',
      'Database Design',
    ],
  },
  {
    title: 'Ways I Work',
    items: ['Algorithm Understanding', 'Project Management', 'Git & Collaboration', 'Teamwork'],
  },
]

export const traits = [
  'Data Engineering / Data Science',
  'Web Full-stack Development',
  'Machine Learning / AI',
  'Database Design',
  'Algorithm Understanding',
  'Project Management',
  'Git & Collaboration',
  'Teamwork',
]

export const contactInfo = {
  phone: '091-285-2513',
  email: 'sukum.d@ku.th',
  location: 'Bangkok, Thailand',
}
