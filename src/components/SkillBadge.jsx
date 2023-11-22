import React from "react";

const SkillBadge = ({ color, name }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "14px",
        padding: "6px 10px",
        color: "black",
        marginRight: "4px",
      }}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
