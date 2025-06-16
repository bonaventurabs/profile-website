"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const location = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=64&h=64"
                alt="Navent"
              />
              <AvatarFallback>NV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-xl font-bold text-foreground leading-tight"
              >
                Navent
              </Link>
              <span className="text-xs text-muted-foreground">
                also known as Bagas
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/experience", label: "Experience" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`${
                  location === path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <button className="md:hidden text-foreground">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
