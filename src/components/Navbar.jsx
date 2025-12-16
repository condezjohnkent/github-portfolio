import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menuw, closew } from "../assets";
import { useRef } from "react";

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].title);
  const [hovered, setHovered] = useState(null);
  const navRefs = useRef([]);
   
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  const current = hovered ?? active;
  const index = navLinks.findIndex((n) => n.title === current);
  const el = navRefs.current[index];

   const underlineStyle = el
    ? {
        width: el.offsetWidth,
        left: el.offsetLeft,
      }
    : { opacity: 0 };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0);}}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            John Kent Condez
          </p>
        </Link>

        <ul className="relative list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              ref={(el) => (navRefs.current[index] = el)}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
              onMouseEnter={() => setHovered(nav.title)}
              onMouseLeave={() => setHovered(null)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          
        {(active || hovered) && (
          <span
            className="absolute bottom-[-6px] h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 ease-out pointer-events-none"
            style={underlineStyle}
          />
        )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? closew : menuw}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`absolute top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl p-6 bg-black
              transform transition-all duration-300 ease-out
              ${toggle
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
