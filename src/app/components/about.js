import React from "react";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
           Hello, my name is Mardo Mai. I am a junior developer learning at Kuressaare Ametikool.
          </p>
          <p className="pb-5">
            I am proficient in frontend skills like React, HTML, CSS, Tailwind and Python.
          </p>

          <p>In backend I know Node.js and PHP.</p>

          <p>
            In my spare time I play games and go to the gym.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;