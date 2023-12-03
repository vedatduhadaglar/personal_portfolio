import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import wander from "../assets/wander.png";
import dateion from "../assets/dateion.png";
import { motion, useInView } from "framer-motion";
import { item, container } from "../utils";

const projectsData = [
  {
    name: "Wander AI 🎈",
    description:
      "Say goodbye to hours of research and let Wander do the work for you, providing you with clear and comprehensive travel itineraries that fit your preferences with the power of AI.",
    img: wander,
    url: "https://relaxed-bavarois-fd6ec1.netlify.app/",
    skills: [
      { name: "React ⚛️", color: "#61DBFB" },
      { name: "Tailwind CSS 🍃", color: "#FFF0F5" },
      { name: "AI 🤖", color: "lavender" },
      { name: "Chakra UI 💚", color: "coral" },
      { name: "Google Maps API 🗺️", color: "#FFFACD" },
      { name: "Web 🌐", color: "wheat" },
      { name: "GPT 🧮", color: "aquamarine" },
    ],
  },
  {
    name: "Dateion 🗓️",
    description:
      "An application where employees could schedule when they would be in office during the COVID pandemic. Admin users can add or remove people from the schedule. Includes authentication and Excel export.",
    img: dateion,
    url: "",
    skills: [
      { name: "Svelte 🍊", color: "orange" },
      { name: "Web 🌐", color: "wheat" },
      { name: "Firebase 🔥", color: "yellow" },
      { name: "Excel 🗓️", color: "aquamarine" },
      { name: "SvelteKit 🍊", color: "orange" },
      { name: "Node.js ⚙️", color: "#00FF7F" },
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="projects" className="w-full h-screen pb-8 border-t-1 lg:px-6">
      <div className="w-full text-center text-4xl sm:text-2xl lg:text-6xl font-bold mb-6">
        My Projects
      </div>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full flex flex-col gap-4 sm:flex-row justify-center items-center"
      >
        {projectsData.map((project, index) => (
          <motion.div variants={item} key={index}>
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              img={project.img}
              url={project.url}
              skills={project.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
