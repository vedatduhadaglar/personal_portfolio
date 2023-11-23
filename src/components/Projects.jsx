import React from "react";
import ProjectCard from "./ProjectCard";
import wander from "../assets/wander.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-screen pb-8 border-t-1 lg:px-6">
      <div className="w-full text-center text-4xl sm:text-2xl lg:text-6xl font-bold mb-6">
        My Projects
      </div>
      <div className="w-full flex flex-col gap-4 sm:flex-row justify-between">
        <ProjectCard
          name={"Wander AI 🎈"}
          description={
            "Say goodbye to hours of research and let Wander do the work for you, providing you with clear and comprehensive travel itineraries that fit your preferences with the power of AI."
          }
          img={wander}
          url={"https://relaxed-bavarois-fd6ec1.netlify.app/"}
        />
        <ProjectCard
          name={"Wander AI 🎈"}
          description={
            "Say goodbye to hours of research and let Wander do the work for you, providing you with clear and comprehensive travel itineraries that fit your preferences with the power of AI."
          }
          img={wander}
        />
        <ProjectCard
          name={"Wander AI 🎈"}
          description={
            "Say goodbye to hours of research and let Wander do the work for you, providing you with clear and comprehensive travel itineraries that fit your preferences with the power of AI."
          }
          img={wander}
        />
      </div>
    </section>
  );
};

export default Projects;
