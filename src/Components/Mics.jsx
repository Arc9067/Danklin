import React from "react";
import mics from "../assets/mics.png";

function Mics() {
  return (
    <section className="pb-36 w-full">
      <div className="container w-full flex justify-center items-center flex-col gap-9">
        <h1 className="text-green-600 text-5xl font-normal font-secondary tracking-wide">
          TOKENOMICS
        </h1>

        <div className="grid w-full lg:grid-cols-3 justify-center items-center gap-12 mt-12">
          <article className="flex items-center justify-center flex-col gap-5">
            <img src={mics} alt="" />
            <h1 className="text-black text-3xl font-normal font-['Fruktur'] tracking-wide">
              Total Supply
            </h1>
            <h3 className="text-black text-2xl font-medium font-['Mona Sans'] tracking-wide">
              1,000,000,000
            </h3>
          </article>
          <article className="flex items-center justify-center flex-col gap-5">
            <img src={mics} alt="" />
            <h1 className="text-black text-3xl font-normal font-['Fruktur'] tracking-wide">
              Lp Burned
            </h1>
            <h3 className="text-black text-2xl font-medium font-['Mona Sans'] tracking-wide">
              100%
            </h3>
          </article>
          <article className="flex items-center justify-center flex-col gap-5">
            <img src={mics} alt="" />
            <h1 className="text-black text-3xl font-normal font-['Fruktur'] tracking-wide">
              Tax
            </h1>
            <h3 className="text-black text-2xl font-medium font-['Mona Sans'] tracking-wide">
              0%
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mics;
