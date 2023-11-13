import React from "react";
import image from "../assets/temp3d.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:px-6">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1
            className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Hello, I'm Vedat
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Web Dev", 1400, "Mobile Dev", 1400]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] mb-4 text-lg lg:text-xl">
            Welcome to my portfolio. Feel free to look around. ( ͡° ͜ʖ ͡° )
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit text-white rounded-full mr-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-red-200">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent  border border-black hover:bg-red-200 mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <img src={image} className="w-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
