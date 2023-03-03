import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.jpg";
import Project6 from "./assets/project6.jpg";

import Testimonial1 from "./assets/testimonial1.jpg";
import Testimonial2 from "./assets/testimonial2.jpg";
import Testimonial3 from "./assets/testimonial3.jpg";
import Testimonial4 from "./assets/testimonial4.jpg";
import Testimonial5 from "./assets/testimonial5.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Testimonials",
    path: "testimonial",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    title: "Web Design & Logo",
    description: "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
  },
  {
    id: 2,
    name: " Front-end Development ",
    title: " Build Engaging User Interfaces ",
    description: " Create visually appealing and user-friendly websites and web applications using HTML, CSS, and JavaScript. ",
  },
  {
    id: 3,
    name: " Apps Development ",
    title: " iOS & Android ",
    description: " Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing. ",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    percentage: 85,
    description: "HTML (Hypertext Markup Language) is the standard markup language used for creating and designing web pages. It is a code that is used to structure content on a webpage and provide meaning and context to the text, images, videos, and other media on the page.",
  },

  {
    id: 2,
    name: "CSS",
    percentage: 75,
    description: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and layout of a webpage written in HTML. CSS allows web developers to control the appearance and styling of individual HTML elements, such as fonts, colors, layout, and spacing.",
  },

  {
    id: 3,
    name: "JavaScript",
    percentage: 70,
    description: "JavaScript is a high-level, dynamic programming language that is widely used for developing web applications and adding interactivity to web pages. JavaScript allows developers to create dynamic and responsive web content, including animations, user interface enhancements, and interactive features.",
  },

  {
    id: 4,
    name: "PHP",
    percentage: 40,
    description: "PHP is a server-side scripting language that is widely used for developing dynamic web applications and websites. PHP is an open-source language and can be easily integrated with HTML and CSS to create dynamic web pages and applications.",
  },

  {
    id: 5,
    name: "React JS",
    percentage: 70,
    description: "React JS is a popular and widely-used JavaScript library for building user interfaces and web applications. Developed by Facebook, React JS provides developers with a powerful and flexible framework for building complex UI components and applications.",
  },

  {
    id: 6,
    name: "Bootstrap",
    percentage: 70,
    description: "Bootstrap is a free and open-source front-end framework for building responsive, mobile-first websites and web applications. Developed by Twitter, Bootstrap provides developers with a powerful and flexible toolkit for designing and styling web pages.",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: "Development",
    title: "eNov Furniture",
    description: "Online platform where customers can browse, select, and purchase a wide range of furniture products, sofa, chairs, and other home or office furnishings.",
    href: "https://enovfurniture.netlify.app/",
  },
  {
    id: 2,
    img: Project2,
    category: "UI UX Design",
    title: "Gooir",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    href: "https://enovfurniture.netlify.app/",
  },
  {
    id: 3,
    img: Project3,
    category: "Development",
    title: "Binar Car Rental",
    description: "Online platform that allows customers to browse, select, and rent a car for a specified period of time. The website typically features a wide range of cars, including compact cars, sedans, SUVs, vans, and luxury cars, from various brands and models.",
    href: "https://binar-car-rental-customer.netlify.app/",
  },
  {
    id: 4,
    img: Project5,
    category: "Development",
    title: "Stay Fit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    href: "https://enovfurniture.netlify.app/",
  },
  {
    id: 6,
    img: Project4,
    category: "Branding",
    title: "Quote Generator",
    description: "The website may offer a variety of categories, such as motivation, success, happiness, love, friendship, and many more.",
    href: "https://raxhaquotesgenerator31.netlify.app/",
  },
];

export const cv = [
  {
    id: 1,
    title: "Binar Academy Bootcamp",
    subtitle: "Front End Engineering",
    date: "2022 - 2022",
    description: "Built car rental website app for 4 months. Tech Lead in JIRA Software with 4 members.",
    category: "education",
  },

  {
    id: 2,
    title: "PLN Institute Technology",
    subtitle: "Electrical Engineering",
    date: "2016 - 2021",
    description: "Led lecturer assistant at Algorithm and Programming Laboratory for 2 years.",
    category: "education",
  },

  {
    id: 3,
    title: "Lecturer Assistant Head",
    subtitle: "Algorithm & Programming Laboratory",
    date: "2017 - 2019",
    description: "Managed 80+ students and teach about the C programming language which is held 2 times a day. Led a team of 9 lecturer assistants and managed the schedule and practicum system.",
    category: "experience",
  },

  {
    id: 4,
    title: "Distribution Network Maintenance",
    subtitle: "PT. PLN (Persero) UP3 Cikupa",
    date: "2020 - 2020",
    description: "Supported monitoring operation and maintenance of distribution network in 4 areas",
    category: "experience",
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: "Barbara Wilson",
    author: "CEO Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Charlie Smith",
    author: "Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Roy Wang",
    author: "Manager GYM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Testimonial4,
    name: "Jennifer Smith",
    author: "CEO & Founder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Testimonial5,
    name: "Paul Freeman",
    author: "Photographer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
