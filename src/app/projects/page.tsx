import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
      image: "/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with real-time updates.",
      tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
