import { Construction } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <Construction size={64} className="mx-auto text-muted-foreground" />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Under Construction
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          This page is still being built. Check back soon for my latest
          projects!
        </p>
      </div>
    </div>
  );
};

export default Projects;
