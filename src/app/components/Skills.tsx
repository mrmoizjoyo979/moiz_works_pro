import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div data-aos="zoom-out" className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5x1 font-bold">Core Skills and Expertise,</h2>
          <p className="text-gray-500 pt-2">
            "I am a skilled web developer
            with expertise in Java, HTML, and Tailwind CSS. I create clean,
            responsive, and visually appealing web applications, combining
            robust back-end logic in Java with well-structured HTML and stylish,
            adaptable designs using Tailwind CSS. I’m passionate about
            delivering efficient, user-friendly solutions that meet modern web
            standards."
          </p>
        </div>
        <div>
            <div className="grid grid-cols-2 text-neutral-200 font-bold text-3xl sm:text-4xl">
                <div className="space-y-2">
                    <h2>Typescript</h2>
                    <h2>Javascript</h2>
                    <h2>Next.JS</h2>
                </div>
                <div className="space-y-2">
                    <h2>Tailwind</h2>
                    <h2>CSS</h2>
                    <h2>Node.JS</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
