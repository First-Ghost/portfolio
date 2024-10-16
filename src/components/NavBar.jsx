import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full h-[80px] z-10 bg-[#242424] shadow-lg sticky top-0 mx-auto  ">
      <div className="px-2 flex justify-between items-center mx-auto   md:max-w-[1100px] h-full">
        <div
          className="flex items-center 
         "
        >
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-default text-[#4EE1A0]">
            PORTOFOLIO
          </h1>
          <ul className="hidden md:flex ml-[5rem] text-[18px] ]">
            <li className="cursor-pointer mr-5   hover:text-[#4EE1A0] ">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>{" "}
            <li className="cursor-pointer mr-5  hover:text-[#4EE1A0]">
              <Link to="experience" smooth={true} offset={-200} duration={500}>
                Experience
              </Link>
            </li>
            <li className="cursor-pointer mr-5  hover:text-[#4EE1A0]">
              <Link to="projects" smooth={true} offset={-50} duration={500}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer  hover:text-[#4EE1A0] ">
              <Link to="contact" smooth={true} offset={-50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClose}>
          {!nav ? (
            <GiHamburgerMenu size={40} className="text-[20px]" />
          ) : (
            <BiX size={60} className="text-[35px]" />
          )}
        </div>
      </div>
      <ul
        className={`  transition-all md:hidden duration-500 ease-in-out ${
          !nav
            ? "max-h-0 opacity-0 overflow-hidden"
            : "max-h-screen opacity-100"
        } absolute bg-[#242424]  w-full px-8`}
      >
        <li className="cursor-pointer w-[22%] mx-auto mb-5 text-[24px] font-bold hover:text-[#4EE1A0] hover:tracking-widest duration-500 border-b-2 border-[#4EE1A0]  ">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            <p className="mx-auto">Home</p>
          </Link>
        </li>
        <li className="cursor-pointer w-[50%] mx-auto mb-5 text-[24px] font-bold hover:text-[#4EE1A0] hover:tracking-widest  duration-500  border-b-2 border-[#4EE1A0] ">
          <Link
            onClick={handleClose}
            to="experience"
            smooth={true}
            offset={-200}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="cursor-pointer w-[33%]  mx-auto mb-5 text-[24px] font-bold hover:text-[#4EE1A0] hover:tracking-widest duration-500  border-b-2 border-[#4EE1A0] ">
          <Link
            onClick={handleClose}
            to="projects"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
        </li>

        <li className="cursor-pointer w-[33%]  mx-auto mb-5 text-[24px] font-bold hover:text-[#4EE1A0] hover:tracking-widest duration-500  border-b-2 border-[#4EE1A0]   ">
          <Link
            onClick={handleClose}
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
