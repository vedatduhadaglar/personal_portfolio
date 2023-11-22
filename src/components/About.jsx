import React from "react";
import img from "../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full border-t-1 lg:px-6 border-gray border-y-2"
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:px-6">
        <div className="col-span-5 place-self-center lg:place-self-start mt-4 lg:mt-0 mb-6 ">
          <img src={img} className="w-96" />
        </div>
        <div className="col-span-7">
          <h3 className="text-4xl font-bold">About Me</h3>
          <p className="mt-3">
            I'm a 22 year old software engineering student from Saxion
            University of Applied Sciences. During school I had the chance to
            try out different fields of software engineering but app development
            turned out to be my favourite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
