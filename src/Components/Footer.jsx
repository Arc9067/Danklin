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
        <h2 className="text-green-600 text-5xl font-normal font-secondary mt-14">© 2024 Danklin</h2>
      </div>
    </footer>
  );
}

export default Footer;
