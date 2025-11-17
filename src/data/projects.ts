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
    title: 'Gold Price Prediction',
    role: 'Deep Learning Engineer & Project Owner',
    description:
      'Designed an LSTM pipeline that preprocesses financial time-series data to predict 15-minute price direction (0.52 acc / 0.61 F1 for up-trend).',
    focus: 'AI / Time-series',
    link: 'https://github.com/Faiisu/Gold_price_predict_LSTM',
    image: 'https://placehold.co/800x450?text=Gold+Prediction',
  },
  {
    title: 'Imbalance Data Classification',
    role: 'Machine Learning Researcher',
    description:
      'Balanced datasets with fixed-size sampling, oversampling, and SMOTE before tuning a KNN pipeline to lift accuracy from 0.78 to 0.97 and minority F1 from 0.54 to 0.95.',
    focus: 'ML / Imbalanced Data',
    link: 'https://github.com/Faiisu/Imbalance-data-handle',
    image: 'https://placehold.co/800x450?text=Imbalance+Classification',
  },
  {
    title: 'Bookstore Application',
    role: 'Full-stack Developer & Database Designer',
    description:
      'Built a React + FastAPI management interface, implemented a 3NF MySQL schema, and wired REST APIs for reliable syncing.',
    focus: 'Web / Database Design',
    link: 'https://github.com/Faiisu/bookRentalSystem',
    image: 'https://placehold.co/800x450?text=Bookstore+App',
  },
  {
    title: 'Community Application',
    role: 'Project Manager & System / DB Designer',
    description:
      'Led 12 engineers, mapped the user-role tree, and delivered the database plus system architecture on schedule.',
    focus: 'Project Leadership / System Design',
    link: 'https://github.com/orgs/Software-eng-01204341/repositories',
    image: 'https://placehold.co/800x450?text=Community+App',
  },
]
