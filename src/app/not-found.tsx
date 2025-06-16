"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <>
      {/* <Navigation /> */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-background relative overflow-hidden pt-16">
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="relative z-10 text-center space-y-6 px-4 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/">Go Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
