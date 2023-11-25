import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import wander from "../assets/wander.png";
import { motion, useInView } from "framer-motion";
import { item, container } from "../utils";

const projectsData = [
  {
    name: "Wander AI 🎈",
    description:
      "Say goodbye to hours of research and let Wander do the work for you, providing you with clear and comprehensive travel itineraries that fit your preferences with the power of AI.",
    img: wander,
    url: "https://relaxed-bavarois-fd6ec1.netlify.app/",
  },

  {
    name: "Wander AI 🎈",
    description:
      "Say goodbye to hours of research and let Wander do the work for you, providing you with clear and comprehensive travel itineraries that fit your preferences with the power of AI.",
    img: wander,
    url: "https://relaxed-bavarois-fd6ec1.netlify.app/",
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
          <motion.div variants={item}>
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              img={project.img}
              url={project.url}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
