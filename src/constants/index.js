import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ansible,
  aws,
  java,
  keras,
  kubernetes,
  mysql,
  python,
  spring,
  tensorflow,
  terraform,
  meta,
  starbucks,
  tesla,
  dbs,
  nyp,
  ntu,
  shopify,
  carrent,
  jobit,
  tripguide,
  chatapp,
  ragcli,
  stablediffusionwebapp,
  wordle,
  clone2048,
  dkeep,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Engineer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },

  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "ansible",
    icon: ansible,
  },
  {
    name: "terraform",
    icon: terraform,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "keras",
    icon: keras,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "DBS Bank",
    icon: dbs,
    iconBg: "#d3d3d3",
    date: "July 2023 - Present",
    points: [
      "Develop & maintain CI/CD Jenkins pipelines using Groovy & Shell scripting",
      "Provide L2 Support for app teams utilising shared pipelines",
      "Collaborate with cross-functional teams including SRE, Cybersecurity & other app teams to drive developer experience",
      "Involve in the development of new Kubernetes-based platform for bank-wide use (pipeline, platform & infrastructure)",
      "Participate in infrastructure capacity preparation work (server hardware onboarding) for Disaster Recovery (DR) drill",
    ],
  },
  {
    title:
      "Specialist Diploma in Cloud Computing & Intelligent Services Management",
    company_name: "Nanyang Polytechnic",
    icon: nyp,
    iconBg: "#d3d3d3",
    date: "April 2023 - March 2024",
    points: [
      "Underwent a year-long advance diploma that covers cloud computing technologies",
      "Took modules covering Virtualization, AWS services, Docker, DevOps Engineering & Machine Learning",
      "Implemented a fullstack application on AWS following best security practices & cost optimisation",
      "Implemented end-to-end Recommender System for E-Commerce using AWS SageMaker",
      "Achieved a CGPA of 3.83/4.00",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "DBS Bank",
    icon: dbs,
    iconBg: "#d3d3d3",
    date: "July 2022 - July 2023",
    points: [
      "Developed User Interfaces (UIs) for inhouse CMS using React, Typescript & RTK Query",
      "Developed Backend APIs that perform CRUD operations & implemented mapping according to Frontend teams' requirements using Java Spring Boot",
      "Implemented Java Spring Batch Framework for batch reporting via JasperReports that utilise multi-vendor DBs (OracleDB & MariaDB)",
      "Led the implementation of encryption of credentials using jasypt & internal encryption-as-a-service tooling",
      "Led the implementation of script scheduler using Tivoli Workload Scheduler & scripting for secure file transfer to OnDemand portal",
    ],
  },
  {
    title: "FlexiMasters in Business and Financial Analytics",
    company_name: "Nanyang Technological University",
    icon: ntu,
    iconBg: "#d3d3d3",
    date: "January 2022 - May 2022",
    points: [
      "Took post graduate courses in Database Management, Data Visualisation, AI & Blockchain technologies",
      "Achieved a CGPA of 4.6/5.0",
    ],
  },
  {
    title: "Business Intelligence (BI) Developer",
    company_name: "DBS Bank",
    icon: dbs,
    iconBg: "#d3d3d3",
    date: "July 2021 - July 2022",
    points: [
      "Developed Tableau dashboards with Presto Connector & deployed to Tableau Server",
      "Implemented Kafka-MongoDB-Tableau POC for realtime streaming data",
      "Created a Google Chrome extension plugin to auto-refresh Tableau dashboards on Tableau Server",
    ],
  },
  {
    title: "B.Eng in Mechanical Engineering",
    company_name: "Nanyang Technological University",
    icon: ntu,
    iconBg: "#d3d3d3",
    date: "August 2017 - June 2021",
    points: [
      "Collaborated with Healthcare professionals from National Cancer Centre Singapore on Breast Cancer Segmentation for Final Year Project",
      "Implemented 2D U-Net Neural Networks on pre-processed 3D CT Scans",
      "Awarded Certificate of Distinction for excellent work done during Internship with SP Group",
      "Developed Microsoft PowerApps applications & PowerBI Dashboards for CP monitoring",
    ],
  },
];

const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
];

const projects = [
  {
    name: "Realtime Chat App",
    description:
      "Web-based Chat platform that allows users to login, search & add other registered users. It also has a chatbot function that integrates with OpenAI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/ngyewkong/realtime-chatapp-react",
    project_live_url: "https://realtime-chatapp-react.vercel.app/",
  },
  {
    name: "RAG Chatbot in CLI",
    description:
      "Python application that enables users to ask GPT questions on local set of documents & getting it to provide the answer alongside with the sources.",
    tags: [
      {
        name: "ChatGPT",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "orange-text-gradient",
      },
      {
        name: "Chroma",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: ragcli,
    source_code_link: "https://github.com/ngyewkong/rag-langchain",
    project_live_url: "",
  },
  {
    name: "Stable Diffusion Web App",
    description:
      "A React Web App that generates images based on user input prompt using Stable Diffusion model. Powered by HuggingFace's pre-trained models.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: stablediffusionwebapp,
    source_code_link: "https://github.com/ngyewkong/React_Stable_Diffusion",
    project_live_url: "",
  },
  {
    name: "Web3.0 Google Keep",
    description:
      "A Google Keep Note Taking App built on React & Motoko. Powered by Web3.0 Decentralised Blockchain Technology, Internet Computer Protocol (ICP).",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Motoko",
        color: "orange-text-gradient",
      },
      {
        name: "ICPBlockchain",
        color: "pink-text-gradient",
      },
    ],
    image: dkeep,
    source_code_link:
      "https://github.com/ngyewkong/icp_blockchain_projects_dkeep",
    project_live_url: "",
  },
  {
    name: "Wordle Web",
    description:
      "A Wordle Clone based on the popular game by New York Times with onscreen keyboard functionality. Built using basic web technologies (HTML,CSS, JS).",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: wordle,
    source_code_link: "https://github.com/ngyewkong/wordle-clone",
    project_live_url: "https://ngyewkong.github.io/wordle-clone/",
  },
  {
    name: "2048 Web",
    description:
      "A 2048 Clone built with mobile & web functionality (mobile swipes & keyboard arrows). Built using basic web technologies (HTML,CSS, JS).",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: clone2048,
    source_code_link: "https://github.com/ngyewkong/2048-clone",
    project_live_url: "https://ngyewkong.github.io/2048-clone/",
  },
];

export { services, technologies, experiences, testimonials, projects };
