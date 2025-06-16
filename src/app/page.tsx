import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Code2, Database, Layout } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background relative overflow-hidden">
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="relative z-10 text-center space-y-6 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Navent
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Currently working as a Software Engineer, focused on building
          innovative solutions and creating impactful user experiences.
        </p>
        <p className="text-muted-foreground font-medium">
          Based in Your Location
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="#projects">Explore My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-accent"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Overview
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Team Collaboration"
              className="w-full h-48 object-cover"
            />
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Code2 className="mx-auto h-8 w-8 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">
                  Bootcamp Experience
                </h3>
                <p className="text-muted-foreground">
                  Intensive full-stack development training with hands-on
                  projects.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team Meeting"
              className="w-full h-48 object-cover"
            />
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Database className="mx-auto h-8 w-8 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">
                  Team Projects
                </h3>
                <p className="text-muted-foreground">
                  Collaborative development experiences in agile environments.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Code Development"
              className="w-full h-48 object-cover"
            />
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Layout className="mx-auto h-8 w-8 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">
                  Technical Skills
                </h3>
                <p className="text-muted-foreground">
                  Modern development practices and technology stack proficiency.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Navigation /> */}
      <HeroSection />
      {/* <OverviewSection /> */}
    </div>
  );
}
