import React from "react";
import image2 from "../assets/image2.svg";
import O1 from "../assets/1.svg";
import O2 from "../assets/2.svg";
import O3 from "../assets/3.svg";
import O4 from "../assets/4.svg";
import O5 from "../assets/5.svg";
import O6 from "../assets/6.svg";
import O7 from "../assets/7.svg";
import O8 from "../assets/8.svg";
import O9 from "../assets/9.svg";
import O10 from "../assets/10.svg";
import O11 from "../assets/11.svg";
import O12 from "../assets/12.svg";
import O13 from "../assets/13.svg";

function About() {
  return (
    <section className="pb-36 w-full">
      <div className="container w-full flex justify-center items-center flex-col gap-9">
        <h1 className="text-center">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5">
          <img src={O1} alt="" />
          <img src={O2} alt="" />
          <img src={O3} alt="" />
          <img src={O4} alt="" />
          <img src={O5} alt="" />
          <img src={O6} alt="" />
          <img src={O7} alt="" />
          <img src={O8} alt="" />
          <img src={O9} alt="" />
          <img src={O10} alt="" />
          <img src={O11} alt="" />
          <img src={O12} alt="" />
          <img src={O13} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
