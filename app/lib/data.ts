import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// icones 
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaGit,
  FaSass,
  FaWordpress,
  FaBootstrap,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";

export const  headerLink = [
  {
    name: "Belfellah.dev",
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
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
]as const;

export const projectsData = [
  {
    title: "travel advisor",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "IPAs", "Css","Google maps"],
    imageUrl: "/traveladvisor.png",
    link: "https://travle-adviser.netlify.app/",
    codeLink:"https://github.com/MohammedBelfellah/travle-adviser"
  },
  {
    title: "IP Address Tracker",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js","IPAS" ,"Css", "Html"],
    imageUrl: "/iptracker.png",
    link: "https://ip-address-tracker-five-taupe.vercel.app/",
    codeLink:"https://github.com/MohammedBelfellah/IP-Address-Tracker"
  },
  {
    title: "todo list",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "MUI", "Next.js", "Css", "localStorage"],
    imageUrl: "/todoList.png",
    link: "https://todo-appfvd.vercel.app/",
    codeLink:"https://github.com/MohammedBelfellah/todo-appfvd"
  },
  
] as const;


export const skillsData = [
  { name: 'HTML', icon: React.createElement<typeof FaHtml5>(FaHtml5) },
  { name: 'CSS', icon: React.createElement<typeof FaCss3>(FaCss3) },
  { name: 'JavaScript', icon: React.createElement<typeof FaJs>(FaJs) },
  { name: 'TypeScript', icon: React.createElement('img', { src: '/typescript.png', alt: 'typescript' ,style: { width: '32px', height: '32px' }}) },
  { name: 'React', icon: React.createElement<typeof FaReact>(FaReact) },
  { name: 'Next.js', icon: React.createElement('img', { src: 'nextjs.png', alt: 'nextjs' ,style: { width: '32px', height: '32px' }})},
  { name: 'Node.js', icon: React.createElement<typeof FaNode>(FaNode) },
  { name: 'Git', icon: React.createElement<typeof FaGit>(FaGit) },
  { name: 'Tailwind', icon:React.createElement<typeof SiTailwindcss>(SiTailwindcss)},
  { name: 'Bootstrap', icon: React.createElement<typeof FaBootstrap>(FaBootstrap) },
  { name: 'Sass', icon: React.createElement<typeof FaSass>(FaSass) },
  { name: 'WordPress', icon: React.createElement<typeof FaWordpress>(FaWordpress) },
  { name: 'Material UI', icon: React.createElement('img', { src: 'material-ui.svg', alt: 'nextjs' ,style: { width: '32px', height: '32px' }})},
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;





