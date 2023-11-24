import React from "react";
import img from "../assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="w-full h-full lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:px-6">
        <div className="col-span-5 place-self-center lg:place-self-start mt-4 lg:mt-0 mb-6 ">
          <img src={img} className="w-72" />
        </div>
        <div className="col-span-7">
          <h3 className="text-4xl font-semibold text-center">About Me</h3>
          <p className="mt-3">
            I'm a 22 year old software engineering student from Turkey. During
            my university education, I had the chance to try out different
            fields of software engineering but app development turned out to be
            my favourite. If you would like to get in contact with me feel free
            to message me on Linkedin. 😎
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
