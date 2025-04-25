import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I am Igoche Anthony a web developer instructor with a passion for
        teaching and coding. I specialize in React and front-end development,
        helping students build real-world projects and master modern web
        technologies.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Project
      </button>
    </div>
  );
};

export default AboutMeText;
