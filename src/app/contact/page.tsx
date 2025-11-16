"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="bg-background">
      <section className="pt-24 pb-20">
        <section id="contact" className="py-20">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Get in Touch
            </h2>

            <div className="flex justify-center items-center gap-6 mb-10">
              <Link
                href="https://linkedin.com/in/bonaventura-bagas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>

              <Link
                href="mailto:bonaventurabagas.bb@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>bonaventurabagas.bb@gmail.com</span>
              </Link>

              <Link
                href="https://github.com/bonaventurabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px] bg-background border-border"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
