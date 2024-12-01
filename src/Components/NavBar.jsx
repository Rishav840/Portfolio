import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] bg-black ${
        scrolled ? "shadow-2xl shadow-gray-500/20" : ""
      } duration-300`}
    >
      <nav className="relative flex justify-between items-center w-full text-white p-5 container">
        <div>
          <h1 className="text-2xl">Rishav</h1>
        </div>

        <ul
          className={`absolute top-full left-0 right-0 bg-black md:flex md:space-x-5 md:static overflow-hidden duration-300 ${
            nav ? "h-[216px]" : "h-0"
          } md:h-auto`}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" cursor-pointer text-gray-500 hover:text-white duration-100 uppercase  "
            >
                <Link onClick={()=> setNav(!nav)} className=" md:px-2 p-2 px-5 block " to={link} smooth duration={500}>{link}</Link>
              
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-gray-500 text-3xl md:hidden"
        >
          {nav ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
