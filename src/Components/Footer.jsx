import React from "react";
import x from "../assets/x.svg";
import telegram from "../assets/telegram.svg";
import dex from "../assets/dextool.svg";

function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="container flex flex-col justify-center items-center">
        <ul className="justify-center items-center gap-9 flex flex-wrap">
          <li className="justify-center items-center gap-2.5 flex">
            <img src={x} alt="" />
            <div className="text-black text-xl font-normal font-['Mona Sans'] leading-loose">
              Twitter (X)
            </div>
          </li>
          <li className="justify-center items-center gap-2.5 flex">
            <img src={telegram} alt="" />
            <div className="text-black text-xl font-normal font-['Mona Sans'] leading-loose">
              Telegram
            </div>
          </li>
          <li className="justify-center items-center gap-2.5 flex">
            <img src={dex} alt="" />
            <div className="text-black text-xl font-normal font-['Mona Sans'] leading-loose">
              Dextools
            </div>
          </li>
        </ul>
        <h1 className="text-5xl font-normal font-['Fruktur'] tracking-wide flex items-end justify-end gap-1 mt-12">
          <span className="text-red-500 ">©</span>
          <span className="text-sky-600 ">2024</span>
          <span className="text-amber-300">Danklin</span>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
