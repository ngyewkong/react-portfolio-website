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
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "DBS Bank",
    icon: dbs,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Develop and maintain CI/CD Jenkins pipelines using Groovy & Shell scripting",
      "Provide L2 Support for app teams utilising shared pipelines",
      "Collaborate with cross-functional teams including SRE, Cybersecurity, and other app developers to improve developer experience",
      "Involve in the development of new Kubernetes-based platform (pipeline and infrastructure)",
    ],
  },
  {
    title:
      "Specialist Diploma in Cloud Computing & Intelligent Services Management",
    company_name: "Nanyang Polytechnic",
    icon: nyp,
    iconBg: "#383E56",
    date: "April 2023 - March 2024",
    points: [
      "Underwent a year long diploma that covers cloud computing technologies",
      "Took modules covering Virtualization, AWS services, Docker, DevOps Engineering & Machine Learning",
      "Implemented a fullstack application on AWS following best security practices & cost optimisation",
      "Implemented end-to-end Recommender System for E-Commerce using AWS SageMaker",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "DBS Bank",
    icon: dbs,
    iconBg: "#383E56",
    date: "July 2022 - July 2023",
    points: [
      "Developed User Interfaces (UIs) for inhouse CMS using React, Typescript and RTK Query",
      "Implemented Java Spring Batch Framework for batch reporting via JasperReports",
      "Led the implementation of encryption of credentials using jasypt and internal encryption-as-a-service tooling",
      "Led the implementation of script scheduler using Tivoli Workload Scheduler and scripting for secure file transfer to OnDemand portal",
    ],
  },
  {
    title: "FlexiMasters in Business and Financial Analytics",
    company_name: "Nanyang Technological University",
    icon: ntu,
    iconBg: "#383E56",
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
    iconBg: "#383E56",
    date: "July 2021 - July 2022",
    points: [
      "Developed Tableau Dashboards with Presto Connector and Tableau Server deployment",
      "Implemented Kafka-MongoDB-Tableau POC for realtime streaming data",
      "Created a Google Chrome extension plugin to auto-refresh Tableau Dashboards on Tableau Server",
    ],
  },
  {
    title: "B.Eng in Mechanical Engineering",
    company_name: "Nanyang Technological University",
    icon: ntu,
    iconBg: "#383E56",
    date: "August 2017 - June 2021",
    points: [
      "Collaborated with Healthcare professionals from National Cancer Centre Singapore on Breast Cancer Segmentation for Final Year Project",
      "Implemented 2D U-Net Neural Networks on pre-processed 3D CT Scans",
      "Awarded Certificate of Distinction for excellent work done during Internship with SP Group",
      "Developed Microsoft PowerApps applications and PowerBI Dashboards for CP monitoring",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
