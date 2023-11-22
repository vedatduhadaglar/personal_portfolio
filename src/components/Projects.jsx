import React from "react";
import SkillBadge from "./SkillBadge";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen border-t-1 lg:px-6 border-black "
    >
      <div className="w-full text-center text-4xl sm:text-2xl lg:text-6xl font-bold ">
        Projects
      </div>
      <SkillBadge name={"React ⚛️"} color={"#61DBFB"} />
      <SkillBadge name={"Tailwind CSS 🍃"} color={"cyan"} />
      <SkillBadge name={"Chakra UI⚡"} color={"lime"} />
      <SkillBadge name={"AI 🤖"} color={"red"} />
      <SkillBadge name={"Google Maps API 🗺️"} color={"yellow"} />
    </section>
  );
};

export default Projects;
