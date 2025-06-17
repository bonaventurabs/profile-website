import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

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
        <p className="text-muted-foreground font-medium flex items-center justify-center">
          <MapPin size={24} className="mr-2 inline-block" /> Jakarta, Indonesia
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Navigation /> */}
      <HeroSection />
      {/* <OverviewSection /> */}
    </div>
  );
}
