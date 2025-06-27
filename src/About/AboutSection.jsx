import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">About Me</h2>

        <p className="text-gray-700 text-lg leading-8 text-justify">
          Hello! I'm <span className="font-semibold text-black">MD Omar Faruk Nayeem</span>, a passionate full-stack web developer from Bangladesh. My programming journey began with curiosity and a strong desire to build things that solve real-world problems. Over time, I mastered technologies like <span className="font-semibold text-black">React, Node.js, Express.js, Firebase</span>, and <span className="font-semibold text-black">MongoDB</span>, and I enjoy creating complete MERN-stack applications with responsive UIs and secure backend systems.
        </p>

        <p className="text-gray-700 text-lg leading-8 mt-4 text-justify">
          I especially enjoy working on interactive frontend experiences, smooth user flows, and integrating real-time features using Firebase and MongoDB. Whether it’s a personal project, team collaboration, or freelance work—I love solving challenges with clean, scalable code.
        </p>

        <p className="text-gray-700 text-lg leading-8 mt-4 text-justify">
          Outside of programming, I have a deep interest in exploring new places, watching football, and sometimes relaxing with music or painting. These hobbies help keep me refreshed and bring creativity to my work.
        </p>

        <p className="text-gray-700 text-lg leading-8 mt-4 text-justify">
          I consider myself a consistent learner, team player, and someone who finds joy in helping others grow. I believe coding is not just about writing logic—it's about crafting experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
