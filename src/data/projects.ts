export type Project = {
  title: string
  role: string
  description: string
  focus: string
  link: string
  image: string
}


export const projects: Project[] = [
  {
    title: 'Bookstore Application',
    role: 'Full-stack Developer · Database Designer',
    description:
      'Built a React + FastAPI management interface for bookstore operations and modelled the relational database schema.',
    focus: 'Web · Database Design',
    link: 'https://github.com/Faiisu/bookRentalSystem',
    image: 'https://placehold.co/800x450?text=Bookstore+App',
  },
  {
    title: 'Community Application',
    role: 'Project Manager · System & DB Designer',
    description:
      'Led 12 engineers to ship a campus communication and event platform, tracking milestones and architecting core modules.',
    focus: 'Project Leadership · System Design',
    link: 'https://github.com/orgs/Software-eng-01204341/repositories',
    image: 'https://placehold.co/800x450?text=Community+App',
  },
  {
    title: 'Gold Price Prediction',
    role: 'Deep Learning Engineer · Project Owner',
    description:
      'Designed an LSTM pipeline that ingests financial time-series data, preprocesses sequences, and predicts 5-minute price movement.',
    focus: 'AI · Time-series',
    link: 'https://github.com/Faiisu/DL_LSTM_XAUUSD_predict',
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