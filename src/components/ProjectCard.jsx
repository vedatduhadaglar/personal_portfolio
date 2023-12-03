import React from "react";
import SkillBadge from "./SkillBadge";

const ProjectCard = ({ name, description, img, url, skills }) => {
  return (
    <div className="hover:bg-red max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={img} alt="Project" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 hidden md:block">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} color={skill.color} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
