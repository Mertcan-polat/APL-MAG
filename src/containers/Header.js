import React, { useState } from "react";
import HeaderData from "./HeaderData";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ui fixed menu">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex  items-center justify-between bg-white py-4 md: px-10">
          <div className="font-bold text-2xl corsor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className=" text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Mag-Sapphire
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:p1-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0 `}
          >
            {HeaderData.map((link) => (
              <li key={link.id} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  rel="noreferrer"
                  target={link.id === 2 || 3 ? "_blank" : ""}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <a
              className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mertcan-polat?tab=repositories"
            >
              About My Works
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
