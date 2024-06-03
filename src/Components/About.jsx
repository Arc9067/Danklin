import React from "react";
import image2 from "../assets/image2.svg";

function About() {
  return (
    <section className="pb-36 w-full">
      <div className="container w-full flex justify-center items-center flex-col gap-9">
        <h1>
          <span className="text-red-500 text-5xl font-normal font-['Fruktur'] tracking-wide">
            DANKLIN
          </span>
          <span className="text-green-600 text-5xl font-normal font-['Fruktur'] tracking-wide">
            {" "}
          </span>
          <span className="text-cyan-400 text-5xl font-normal font-['Fruktur'] tracking-wide">
            CHRONICLES
          </span>
        </h1>

        <img src={image2} alt="" className="mt-10" />
      </div>
    </section>
  );
}

export default About;
