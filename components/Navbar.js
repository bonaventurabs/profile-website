import { React, useState } from "react";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:px-8 md:px-20 justify-between w-full">

              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">
                  Pro<span className="hover:text-blue-600">file</span>
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link 
                    activeClass="Home" 
                    to="home" smooth={true} 
                    offset={50} 
                    duration={500} 
                    className="cursor-pointer text-gray-500 hover:text-blue-600 px-3 py-2 text-md "
                  >Home</Link>
                  <Link 
                    activeClass="Projects" 
                    to="projects" smooth={true} 
                    offset={50} duration={500} 
                    className="cursor-pointer text-gray-500 hover:text-blue-600 px-3 py-2 text-md"
                  >Projects</Link>
                  <Link 
                    activeClass="Technologies" 
                    to="technologies" 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    className="cursor-pointer text-gray-500 hover:text-blue-600 px-3 py-2 text-md">Technologies</Link>
                  <Link 
                    activeClass="Contact" 
                    to="contact" 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    className="cursor-pointer text-gray-500 hover:text-blue-600 px-3 py-2 text-md"
                  >Contact</Link>
                </div>
              </div>

              <div className="flex items-center flex-shrink-0">
                <div className="justify-around text-center gap-2 mx-20 my-10 hidden md:flex ">
                  <a
                    href="https://www.linkedin.com/in/bonaventura-bagas/"
                    className="flex cursor-pointer"
                  >
                    <AiFillLinkedin size={"2rem"} className="text-gray-500 hover:text-black" />
                  </a>
                  <a
                    href="https://github.com/bonaventurabs"
                    className="flex cursor-pointer"
                  >
                    <AiFillGithub size={"2rem"} className="text-gray-500 hover:text-black" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mr-14 flex md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                type="button" 
                className="bg-gray-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-white" 
                aria-controls="mobile-menu" 
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {!isOpen ? (
                  <svg 
                    className="block h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  </svg>
                ):( 
                  <svg 
                    className="block h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div style={{ transition: 'all 3s ease-in-out' }} className="md:hidden w-full" id="mobile-menu">
            <div 
              className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
            >
              <Link href="/home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/projects" activeClass="projects" to="projects" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </Link>
              <Link href="/technologies" activeClass="technologies" to="technologies" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Technologies
              </Link>
              <Link href="/contact" activeClass="contact" to="contact" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        ) : (<div></div>)}
      </nav>
    </div>
  );
}

export default Navbar;