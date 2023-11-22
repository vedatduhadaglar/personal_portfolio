import React from "react";

const SkillCard = ({ img, name }) => {
  return (
    <div className="flex flex-col justify-center items-center h-24 w-48">
      <img src={img} className="w-20 h-20 object-contain" alt={name} />
      <span className="text-[#757575] text-sm sm:text-base md:text-lg lg:text-xl">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
