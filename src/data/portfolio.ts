export type SkillColumn = {
  title: string
  items: string[]
}

export const profileParagraphs = [
  'I have experience in machine learning, software development, and database design across third normal form and data warehousing.',
  'My strong grounding in algorithms and mathematics helps me understand how deep learning and machine learning models work, and I am focused on using AI to improve system performance and build smarter, more efficient software.',
]

export const education = {
  school: 'Kasetsart University',
  degree: 'Bachelor of Computer Engineering',
  timeline: '2023 - Present | GPA 3.04',
  note: 'Expected Graduation: 2027',
}

export const languages = [
  { name: 'Thai', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
]

export const skillColumns: SkillColumn[] = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript / TypeScript', 'SQL','C/Cpp'],
  },
  {
    title: 'Web Development',
    items: ['React', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Machine Learning & Deep Learning',
    items: ['Model intuition (KNN, LSTM, CNN, vector space)', 'Data preprocessing', 'scikit-learn', 'PyTorch'],
  },
  {
    title: 'Data & Tools',
    items: ['Data warehouse & 3NF design', 'MySQL', 'MongoDB', 'Git'],
  },
]

export const traits = [
  'Machine learning & deep learning',
  'Data preprocessing',
  'React & FastAPI',
  'REST API design',
  'Data warehouse & 3NF',
  'MySQL & MongoDB',
  'Project management',
  'Team collaboration',
  'Problem solving',
  'System thinking',
  'Git workflows',
]

export const contactInfo = {
  email: 'sukum.d@ku.th',
  location: 'Bangkok, Thailand',
}
