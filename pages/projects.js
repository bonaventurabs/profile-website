import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import { projectContent } from "../components/ProjectsContent";

function ProjectsPage() {
  return (
    <Element id="projects" name="projects">
      <div className="w-full h-20"></div>
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <h2 className="text-indigo-900 text-5xl font-semibold text-center">
          Projects
        </h2>
        <section className="flex flex-col lg:grid lg:grid-cols-2 p-8 lg:p-12 place-items-center items-center justify-center gap-x-8 gap-y-12">
          {projectContent.map((p, i) => {
            return (
              <div key={i} className="rounded-lg shadow-xl text-center w-96">
                <div className="rounded-lg w-full h-72 relative sm: mb-5 md:mb-0">
                  <Image
                    src={p.image}
                    alt="portfolio"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg cursor-pointer"
                  />
                </div>
                <div className="text-center z-20 w-full">
                  <h3 className="text-indigo-900 text-xl tracking-wide">
                    {p.title}
                  </h3>
                  <hr className="w-12 h-1 my-1 mx-auto border bg-gray-400" />
                </div>
                <p className="w-full px-10 font-normal text-justify">
                  {p.description}
                </p>
                <div>
                  <div className="text-center z-20 w-full font-semibold">
                    Stack
                  </div>
                  <ul className="flex justify-around p-2">
                    {p.tags.map((t, i) => {
                      return(
                        <li key={i} className="border-solid border border-slate-600 rounded px-1 text-sm text-gray-500">
                          {t}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <ul className="list-none p-0 flex justify-around my-5">
                  <button
                    onClick= {() => {
                      window.location.href=p.source
                    }}
                    disabled={p.isSourceAvailable}
                    className="w-24 text-white bg-indigo-900 text-base rounded-xl py-1 px-4 duration-200 hover:bg-black disabled:text-gray-700 disabled:bg-gray-500 disabled:opacity-70"
                  >
                    Code
                  </button>
                  <button
                    onClick= {() => {
                      window.location.href=p.visit
                    }}
                    disabled={p.isLinkAvailable}
                    className="w-24 text-white bg-indigo-900 text-base rounded-xl py-1 px-4 duration-200 hover:bg-black disabled:text-gray-700 disabled:bg-gray-500 disabled:opacity-70"
                  >
                    Visit
                  </button>
                </ul>
              </div>
            );
          })}
        </section>
      </div>
    </Element>
  );
}

export default ProjectsPage;
