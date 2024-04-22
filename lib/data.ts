import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaTeamspeak } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import offertCreditCore from "@/public/offertCreditCore.png";
import offertCreditMobile from "@/public/offertCreditMobile.jpg";
import offertCreditWeb from "@/public/offertCreditWeb.jpg";
import onboarding from "@/public/onboarding.png";
import parametrizationMaster from "@/public/parametrizationMaster.png";
import packingLogic from "@/public/packingLogic.png";
import cctbProject from "@/public/cctbProject.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "DEVELOPER",
    location: "Ecuador",
    description:
      "While studying I got a job in software development and started learning new technologies both in-house and open source. I worked as a junior for 9 months and was promoted for my good performance and commitment.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "LEADER DEVELOPER",
    location: "Ecuador",
    description:
      "I gained greater responsibilities which made me stand out within the projects. In these years I deployed functionalities in production environments of several projects. I fixed priority bugs and delivered both functional and technical solutions. I was responsible for code reviews and merges.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Ecuador",
    description:
      "I had the opportunity to work for companies abroad which were dedicated to the development of platforms and applications focused on large food industries. Develop new skills both personally and professionally. I got better at teamwork and code testing. Also, I focused on code improvement in both react-native and angular.",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
  {
    title: "Digital Literacy",
    location: "Canada",
    description:
      "At this stage of my life I traveled to Vancouver-Canada which allowed me to meet new people and new cultures. While studying a new skill like software quality assurance I am also working on improving my soft skills and my English.",
    icon: React.createElement(FaTeamspeak),
    date: "2023-204",
  },
] as const;

export const projectsData = [
  {
    title: "Core Banking",
    description:
      "I worked for 3 years in a web site that offers credit through partner analysis with interaction of several apis and external services.",
    tags: ["Javascript", "Designer", "MySql", "Bootstrap", "Java", "Github"],
    imageUrl: offertCreditCore,
  },
  {
    title: "Mobile Banking",
    description:
      "I worked for 1 year in the support of the mobile application of a financial institution increasing credit functionalities similar to the website.",
    tags: ["Jquery", "Javascript", "java", "Mysql", "Github"],
    imageUrl: offertCreditMobile,
  },
  {
    title: "Onboarding",
    description:
      "It is a web site which allows the partner who does not belong to the financial institution to be evaluated and according to their financial balances a credit is automatically pre-qualified.",
    tags: ["Javascript", "HTML", "CSS", "Microservices", "SQL", "Github"],
    imageUrl: onboarding,
  },
  {
    title: "Web Banking",
    description:
      "I worked as a team member to develop a new section of the financial institution's website. This new section allows the user to follow an intuitive flow to obtain a credit according to their payment capacity.",
    tags: ["Apache", "Google maps", "Equifax", "MySql", "Intellij", "Github"],
    imageUrl: offertCreditWeb,
  },
  {
    title: "Parameterization Platform",
    description:
      "Scalable website for any type of clients focused on food processing, such as burger king and freddys. Creation of recipes and products with their parameters such as cooking time, quantity, additions, substitutions.",
    tags: ["Angular", "Tipescript", "SQLserver", "Bootstrap", "Springboot", "Github"],
    imageUrl: parametrizationMaster,
  },
  {
    title: "Packaging application",
    description:
      "Mobile application focused on delivering products through linear programming, optimizing the number and size of bags needed for each order, also showing the products that must contain each bag to be filled.",
    tags: ["React Native", "Typescript", "SQLite", "Linear programming", "Java stream", "Redux"],
    imageUrl: packingLogic,
  },  
  {
    title: "Project java-AWS cloud",
    description:
      "Simple but complete project for the interaction of a school system using a database in the cloud.",
    tags: ["Java", "SQL", "Github"],
    imageUrl: cctbProject,
  },  
  {
    title: "Testing Project",
    description:
      "Selenium testing project of this portfolio, with different cases to take into account. ",
    tags: ["Java", "HTML", "CSS", "Selenium", "React", "Next.js", "Tailwind"],
    //imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Node.js",
  "Git",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Python",
  "Android",
  "PostgreSQL",
  "MySQL",
  "Spring Boot",
  "Angular 18",
  "Postman",
  "AWS",
] as const;
