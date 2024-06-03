import React from "react";
import logo from "../assets/logo.webp";

function Hero() {
  return (
    <section className="py-36 w-full">
      <div className="container w-full ">
        <div className=" bg-green-600 rounded-3xl w-full grid lg:grid-cols-2 justify-between items-center gap-12">
          <img src={logo} alt="" className="lg:rounded-l-3xl rounded-t-3xl" />
          <div className="flex flex-col gap-5 px-4 pb-8">
            <h1 className="">
              <span className="text-red-500 text-6xl font-normal font-['Fruktur'] ">
                Fux
              </span>
              <span className="text-white text-6xl font-normal font-['Fruktur'] ">
                {" "}
              </span>
              <span className="text-yellow-400 text-6xl font-normal font-['Fruktur'] ">
                with
              </span>
              <span className="text-white text-6xl font-normal font-['Fruktur'] ">
                {" "}
              </span>
              <span className="text-cyan-400 text-6xl font-normal font-['Fruktur'] ">
                Hella
              </span>
              <span className="text-white text-6xl font-normal font-['Fruktur'] ">
                {" "}
                Turtle
              </span>
              <span className="text-amber-300 text-6xl font-normal font-['Fruktur'] ">
                {" "}
              </span>
              <span className="text-orange-500 text-6xl font-normal font-['Fruktur'] ">
                Memes
              </span>
              <span className="text-white text-6xl font-normal font-['Fruktur'] ">
                {" "}
              </span>
            </h1>
            <p className=" text-black text-xl font-medium font-['Mona Sans'] tracking-wide break-all">
              CA: 0x00000000000000000000000000000
            </p>
            <div className="justify-start items-start gap-4 inline-flex">
              <a
                href=""
                className="w-32 px-7 py-3.5 bg-red-500 rounded-full border-2 border-white justify-center items-center gap-2.5 flex text-white text-sm font-normal font-['Fruktur'] leading-tight tracking-tight"
              >
                BUY HERE
              </a>
              <a
                href="https://t.me/DanklinETH"
                className="w-32 px-7 py-3.5 bg-sky-600 rounded-full border-2 border-lime-400 justify-center items-center gap-2.5 flex text-white text-sm font-normal font-['Fruktur'] leading-tight tracking-tight"
              >
                TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
