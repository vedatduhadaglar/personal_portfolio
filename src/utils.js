import react from "./assets/react.png";
import vue from "./assets/vue.png";
import node from "./assets/node.png";
import java from "./assets/java.png";
import postgres from "./assets/postgres.png";
import js from "./assets/js.png";
import docker from "./assets/docker.png";
import tailwind from "./assets/tailwind.png";

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const skills = [
  { img: react, name: "React.js/Native" },
  { img: vue, name: "Vue.js" },
  { img: js, name: "ES6 JavaScript" },
  { img: tailwind, name: "Tailwind CSS" },
  { img: node, name: "Node.js" },
  { img: java, name: "Java" },
  { img: postgres, name: "PostgreSQL" },
  { img: docker, name: "Docker" },
];
