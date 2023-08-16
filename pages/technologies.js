import React from "react";
import { Element } from "react-scroll";
import { techContent } from "../components/TechnologiesContent";

function TechnologiesPage() {
  return (
    <Element id="technologies" name="technologies">
      <div className="w-full h-12"></div>
      <div className="container mt-8 h-auto px-5 mx-auto">
        <div className="text-center mb-14">
          <h2 className="sm:text-5xl text-3xl font-medium text-indigo-900 mb-4">
            Technologies
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have worked with several technology stack in developing desktop app, mobile app, website, and API.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto mx-2">
          {techContent.map((tech) => (
            <div key={tech.tech} className="p-2 md:w-1/4 sm:w-1/3 w-1/2">
              <div className="bg-white rounded block p-4 py-6 h-full items-center shadow-lg ease-in duration-200 hover:scale-110">
                <div className="flex justify-center">
                  {< tech.icon className="text-gray-500 w-8 h-8 flex-shrink-0 hover:text-black"/>}
                  {/* <tech.icon className="text-gray-500 w-8 h-8 flex-shrink-0 hover:text-black" /> */}
                </div>
                <div className="flex justify-center">
                  <span className="title-font font-medium text-indigo-900">
                    {tech.tech}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default TechnologiesPage;