"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  website: string;
  description: string;
  skills: string[];
  logo: string;
}

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {}
  );

  const initialExperiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2021 - Present",
      location: "San Francisco, USA",
      website: "techcorp.com",
      description:
        "Led development of scalable web applications and mentored junior developers. Focused on creating robust solutions with modern technologies.",
      skills: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
      logo: "/placeholder.svg",
    },
    {
      role: "Software Engineer",
      company: "Innovation Labs",
      period: "2019 - 2021",
      location: "Austin, USA",
      website: "innovationlabs.com",
      description:
        "Developed and maintained multiple client-facing applications using React and Node.js. Implemented responsive designs and optimized performance.",
      skills: ["React", "JavaScript", "CSS", "Git", "CI/CD"],
      logo: "/placeholder.svg",
    },
  ];

  const toggleExpansion = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-24 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Professional Experience
        </h1>
        <div className="relative space-y-8">
          <div className="absolute left-[2.25rem] top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary/40 via-primary/60 to-primary/40" />

          {initialExperiences.map((experience, index) => (
            <Card
              key={index}
              className={`p-6 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-md relative ${
                expandedCards[index] ? "bg-accent" : "bg-card"
              }`}
              onClick={() => toggleExpansion(index)}
            >
              <div className="absolute left-8 top-8 -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-background border-[3px] border-primary relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                </div>
              </div>

              <div className="flex items-start gap-6 ml-12">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-background flex items-center justify-center">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 object-contain"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.role}
                      </h3>
                      <p className="text-muted-foreground">
                        @ {experience.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground">
                      {experience.period}
                    </span>
                  </div>

                  <div
                    className={`mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedCards[index]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{experience.location}</span>
                      <span>•</span>
                      <a
                        href={`https://${experience.website}`}
                        className="hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.website}
                      </a>
                    </div>
                    <p className="text-foreground mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Experience;
