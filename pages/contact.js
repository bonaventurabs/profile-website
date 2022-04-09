import React from "react";
import { Element } from "react-scroll";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactPage() {
  return (
    <Element id="contact" name="contact">
      <div>
        <div className="w-full mt-20 h-auto flex flex-col justify-center items-center">
          <h2 className="text-indigo-900 sm:text-5xl text-3xl font-semibold text-center">
            Contact
          </h2>
          <p className="text-left font-medium mt-8 flex-wrap">
            Get in touch with me through:
          </p>
          <a
            href="mailto:bonaventurabagas.bb@gmail.com"
            className="flex items-center object-center justify-center font-semibold text-white md:mt-6 mt-4 bg-indigo-900 rounded-md w-36 h-12 gap-2 text-lg ease-in duration-200 hover:bg-black hover:scale-110"
          >
            <MdEmail size="1.8rem"/>E-mail
          </a>
          <p className="text-left font-medium mt-4 flex-wrap">
            or
          </p>
          <section className="flex justify-between text-center mx-20 my-3 md:gap-10 gap-2 object-bottom">
            <a
              href="https://www.linkedin.com/in/bonaventura-bagas/"
              className="flex justify-center items-center cursor-pointer ease-in duration-200 hover:scale-110"
            >
              <FaLinkedin className="md:w-14 md:h-14 w-12 h-12 text-gray-400 md:m-3 p-1 hover:text-black" />
            </a>
            <a
              href="https://github.com/bonaventurabs"
              className="flex justify-center items-center cursor-pointer ease-in duration-200 hover:scale-110"
            >
              <FaGithub className="md:w-14 md:h-14 w-12 h-12 text-gray-400 md:m-3 p-1 hover:text-black" />
            </a>
            <a
              href="https://www.instagram.com/navent.bb"
              className="flex justify-center items-center cursor-pointer ease-in duration-200 hover:scale-110"
            >
              <FaInstagram className="md:w-14 md:h-14 w-12 h-12 text-gray-400 md:m-3 p-1 hover:text-black" />
            </a>
          </section>
        </div>
      </div>
    </Element>
  );
}

export default ContactPage;
