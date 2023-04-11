"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed top-0 flex justify-between items-center h-20 w-full mx-auto px-4 text-white bg-blackPrimary ">
      <h1 className="w-full text-3xl font-bold text-primary uppercase">
        React.
      </h1>
      <Nav />
      <div onClick={handleNav} className="z-10 md:hidden">
        <Hamburger />
      </div>
      <NavMobile nav={nav} onClick={handleNav} />
    </header>
  );
};

export default Header;
