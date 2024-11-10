import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

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
    title: "CultYoga",
    image: project1,
    description:
      "A fully functional YOga Platform website with features like Disease Based yoga , Diet Program, Filteration and user authentication.",
    technologies: ["React.js", "Tailwind", "Express", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "New Delhi, India ",
  phoneNo: "+91-9625441390",
  email: "namanrajput801@gmail.com",
};
