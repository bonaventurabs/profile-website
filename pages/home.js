import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import profileImg from "../public/images/profile/profile2.jpg";

function HomePage() {
  return (
    <Element id="home" name="home">
      <div>
        <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
          <div className="lg:w-2/5 md:w-full lg:h-96 md:h-60 shadow-xl rounded-full relative px-10 hidden md:block md:ml-10 md:mt-14 lg:mt-0">
            <Image
              src={profileImg}
              alt="profileImg"
              layout="fill"
              objectFit="cover"
              className="rounded-full hidden md:block md:object-top"
            />
          </div>
          <div className="flex flex-col md:ml-28 mx-10 mt-10">
            <h1 className="font-semibold text-6xl text-left mb-10">
              Bonaventura <span className="text-blue-900">Bagas</span> Sukarno
            </h1>
            <p className="text-left font-normal mb-7 flex-wrap">
              I have interest in technology and have been studying at Institut
              Teknologi Bandung (ITB) in Information System and Technology for the
              last three years. Technology for the last three years. Technology
              for the last three years. Technology for the last three years. nology for the last three years.
            </p>
            <Link
              activeClass="Peojects" 
              to="projects" smooth={true} 
              offset={50} 
              duration={500}
              className="font-semibold text-white md:mt-10 mt-5 pt-2 bg-indigo-900 rounded-md w-40 h-12 text-lg hover:bg-black cursor-pointer"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="h-3">

        </div>
      </div>
    </Element>
  );
}

export default HomePage;
