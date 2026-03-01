"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { useTheme } from "next-themes";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  website: string;
  summary?: string;
  bullets: string[];
  skills: string[];
  logo: string;
  logoDark?: string;
}

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {}
  );
  const { resolvedTheme } = useTheme();

  const initialExperiences: Experience[] = [
    {
      role: "Software Engineer II",
      company: "Traveloka",
      period: "Sep 2025 - Present",
      location: "Tangerang, Banten, Indonesia",
      website: "traveloka.com",
      logo: "/logos/traveloka.png",
      logoDark: "/logos/traveloka-dark.png",
      summary:
        "As a Software Engineer in the Corporate Technology – Lending & Payment team, I have worked closely with Business Analysts, Finance, and Engineers from other teams. Key accomplishments include:",
      bullets: [
        "Led, designed, and developed a new service to replace the existing lending bookkeeping system, reducing data processing time by up to 5 hours using an event-driven architecture.",
        "Contributed to building a chaining system of ~500s jobs that enables dependent job execution, reducing delta time.",
        "Modernized legacy Java batch applications by adopting Spring as a standard framework, and implemented AWS Lambda SnapStart to reduce cold start latency.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "AWS",
        "Event-Driven Architecture",
        "Lambda",
        "SQL",
        "Kotlin",
        "Datadog",
      ],
    },
    {
      role: "Software Engineer",
      company: "Traveloka",
      period: "Jan 2024 - Aug 2025",
      location: "Tangerang, Banten, Indonesia",
      website: "traveloka.com",
      logo: "/logos/traveloka.png",
      logoDark: "/logos/traveloka-dark.png",
      summary: "Key accomplishments include:",
      bullets: [
        "Analyzed and optimized a long-running data pipeline job, reducing execution time by up to 60% (from ~3 hours to ~1 hour).",
        "Reduced overprovisioned RDS storage in production using AWS Blue/Green deployment with under 1 minute of downtime, saving up to $1,000 annually.",
      ],
      skills: [
        "Java",
        "Scala",
        "AWS",
        "Spring Boot",
        "SQL",
        "Datadog",
        "RDS",
      ],
    },
    {
      role: "GoTo Devcamp 2023",
      company: "GoTo Group",
      period: "Dec 2023",
      location: "Jakarta, Indonesia",
      website: "gotocompany.com",
      logo: "/logos/goto.png",
      bullets: [
        "Earned an Honorable Mention at GoTo DevCamp 2023 Hackathon by building an auction system within GoTo environment in 24 hours.",
        "Learned Clean Architecture in Go, message queues, memory caching with Redis, and monitoring using Prometheus and Grafana.",
      ],
      skills: ["Go", "Redis", "Clean Architecture"],
    },
    {
      role: "Software Engineer Intern",
      company: "OCBC Indonesia",
      period: "May 2022 - Aug 2022",
      location: "Jakarta, Indonesia",
      website: "ocbc.id",
      logo: "/logos/ocbc.png",
      summary:
        "As an Intern Software Engineer at Bank OCBC NISP, contributed to building an HR Management System to help HR teams manage workflows and data in a centralized platform. Key accomplishments include:",
      bullets: [
        "Designed and implemented the SQL database schema for the HR Management System.",
        "Developed multiple backend modules in Go (Golang), improving the efficiency of HR operations.",
      ],
      skills: ["Go", "REST APIs", "SQL"],
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
                <div className={`w-16 h-16 rounded-lg overflow-hidden border border-border flex items-center justify-center shrink-0 p-1 ${resolvedTheme === "dark" ? "" : "bg-white"}`}>
                  <Image
                    src={
                      resolvedTheme === "dark" && experience.logoDark
                        ? experience.logoDark
                        : experience.logo
                    }
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
                        {experience.company} ·{" "}
                        <a
                          href={`https://${experience.website}`}
                          className="hover:text-foreground hover:underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {experience.website}
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedCards[index]
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    {experience.summary && (
                      <p className="text-foreground mb-2">
                        {experience.summary}
                      </p>
                    )}
                    <ul className="list-disc list-inside space-y-1 text-foreground mb-4">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
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
