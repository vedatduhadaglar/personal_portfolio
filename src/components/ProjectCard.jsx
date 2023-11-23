import React from "react";
import SkillBadge from "./SkillBadge";

const ProjectCard = ({ name, description, img, url }) => {
  return (
    <div className=" hover:bg-red max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg">
      <a href={url} target="_blank">
        <img className="w-full" src={img} alt="Project" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 hidden md:block">
          <SkillBadge name={"React ⚛️"} color={"#61DBFB"} />
          <SkillBadge name={"Tailwind CSS 🍃"} color={"#FFF0F5"} />
          <SkillBadge name={"AI 🤖"} color={"lavender"} />
          <SkillBadge name={"Chakra UI 💚"} color={"coral"} />
          <SkillBadge name={"Google Maps API 🗺️"} color={"#FFFACD"} />
          <SkillBadge name={"Web 🌐"} color={"wheat"} />
          <SkillBadge name={"GPT 🧮"} color={"aquamarine"} />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
