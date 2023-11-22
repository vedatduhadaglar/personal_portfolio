import React from "react";
import { motion, useInView } from "framer-motion";
import { container, item, skills } from "../utils";

import SkillCard from "./SkillCard";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <section
      id="skills"
      className="w-full h-screen border-t-1 lg:px-6 border-gray border-b-2"
    >
      <div className="w-full text-center text-4xl sm:text-2xl lg:text-6xl font-bold mb-4 lg:mb-12">
        My Skills
      </div>
      <div className="container mx-auto flex w-4/5">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 w-full gap-y-12 sm:grid-cols-2 lg:grid-cols-4 place-items-center"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <SkillCard img={skill.img} name={skill.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
