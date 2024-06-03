import React from "react";

function Header() {
  return (
    <header className="w-full py-3 bg-[#F7FEB0] absolute top-0 left-0">
      <nav className="container w-full flex items-center justify-between">
        <a
          href=""
          className="text-green-600 text-3xl font-normal font-secondary"
        >
          Danklin
        </a>

        <a
          href=""
          className="w-32 h-12 px-7 py-3.5 bg-red-500 rounded-full border-2 border-white justify-center items-center gap-2.5 inline-flex text-white text-sm font-normal font-secondary leading-tight tracking-tight"
        >
          BUY HERE
        </a>
      </nav>
    </header>
  );
}

export default Header;
