import project1 from "../assets/projects/weather-app.jpg";
import project2 from "../assets/projects/cultYoga.webp";
import project3 from "../assets/projects/lms.jpg";
import project4 from "../assets/projects/t2h.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1+ years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like React.js, Next js Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1+ years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Full Stack Developer",
    company: "DNS Group",
    description: `Built and maintained an ERP product using React.js, Node.js, Express, and MySQL ORM. Developed RESTful APIs and handled large-scale data in MySQL.Implemented Global Components like autocomplete, pagination, Managed CRUD operations and optimized data handling for performance.`,
    technologies: ["React.js", "Node js", "Express js", "Mysql"],
  },
  {
    year: "Oct 2023 - Aug 2024",
    role: "Frontend Developer",
    company: "Admire Holidays",
    description: `Implemented MongoDB-backed APIs for efficient data retrieval and integration. Utilized React.js to create responsive and engaging user interfaces for various data routes. Demonstrated proficiency in Next.js, optimizing routes for server-side rendering and improved performance`,
    technologies: ["Next.js", "Tailwind", "Node Js", "MongoDB", "React.js"],
  },
  {
    year: "Aug 2022 - Mar 2023",
    role: "Fronten Developer",
    company: "Technoculutre Research",
    description: `Design and build the ui of application using next js, typescript, tailwind css. Used different types of state managers library like xstate and zustand`,
    technologies: ["Next js", "Tailwind", "Zustand", "Typescript"],
  },
];

export const PROJECTS = [
  {
    title: "Mausam",
    image: project1,
    description:
      "Mausam is a feature-rich weather app built with React, offering a sleek UI, search functionality, third-party integrations, and dark/light mode support. It includes interactive weather charts for an enhanced user experience.",
    technologies: [
      "React.js",
      "Tailwind",
      "Tanstack Query",
      "ShadcnUi",
      "ThirdParty API Integration",
    ],
  },
  {
    title: "CultYoga",
    image: project2,
    description:
      "Cultyoga is a modern yoga platform offering pose libraries, disease-based yoga solutions, progress tracking, video tutorials, personalized profiles, dark/light mode, and mobile compatibility for an engaging wellness experience.",
    technologies: [
      "React.js",
      "Node.js",
      "ExpressJS",
      "MongoDb",
      "Authentication",
    ],
  },
  {
    title: "Learning Management System",
    image: project3,
    description:
      "A cutting-edge LMS built with the MERN stack, Redux, React Query, and Shadcn UI, featuring authentication, caching, search, sorting, and advanced functionalities for learning management.",
    technologies: [
      "React.js",
      "Redux",
      "React query",
      "ShadCN-UI",
      "ExpressJS",
      "Node.js",
    ],
  },
  {
    title: "MakeMyHoneymoon",
    image: project4,
    description:
      "A stunning TripToHoneymoon website built with modern technologies, offering dynamic packages, seamless navigation, secure booking, and a personalized experience for couples to plan their perfect honeymoon.",
    technologies: ["NextJS", "MongoDb", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "New Delhi, India ",
  phoneNo: "+91-9625441390",
  email: "namanrajput801@gmail.com",
};
