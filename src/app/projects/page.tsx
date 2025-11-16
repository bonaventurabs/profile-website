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
// import ReactMarkdown from "react-markdown";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  images?: string[];
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
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      ],
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with real-time updates.",
      tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
                {project.images && project.images.length > 0 && (
                  <div className="relative">
                    {project.images.length === 1 ? (
                      <div className="h-48 overflow-hidden">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div className="h-48 overflow-hidden">
                                <Image
                                  src={image}
                                  alt={`${project.title} - Image ${
                                    imageIndex + 1
                                  }`}
                                  className="w-full h-full object-cover"
                                  width={800}
                                  height={450}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    )}
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  {/* <div className="text-sm text-muted-foreground prose prose-sm prose-neutral dark:prose-invert max-w-none">
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                  </div> */}
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
