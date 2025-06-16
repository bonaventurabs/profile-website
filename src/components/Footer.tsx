import React from "react";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">{currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
