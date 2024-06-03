import React from "react";
import image2 from "../assets/image2.svg";

function About() {
  return (
    <section className="pb-36 w-full">
      <div className="container w-full flex justify-center items-center flex-col gap-9">
        <h1 className="text-green-600 text-5xl font-normal font-secondary tracking-wide">
          ABOUT US
        </h1>
        <p className="lg:max-w-[80%] text-black text-xl font-normal font-['Mona Sans'] leading-7 tracking-tight">
          Welcome to MemeMint, where magic meets the blockchain. Our journey
          began with a simple idea – to blend the enchanting world of memes with
          the power of blockchain technology. We believe that humor and
          innovation can coexist to create something truly unique. Meet Minty
          the Magician, the heart and soul of our project, and join us in
          exploring the endless possibilities.
          <br />
          <br />
          At MemeMint, we are more than just a cryptocurrency project; we're a
          community-driven movement at the intersection of memes, blockchain
          technology, and creative expression. Our journey began in October
          2023, fueled by a shared passion for the limitless world of internet
          humor and the immense potential of blockchain.
        </p>

        <img src={image2} alt="" className="mt-10" />
      </div>
    </section>
  );
}

export default About;
