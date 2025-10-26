import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI/ML", "Web Dev", "Robotics", "IoT"];

  const projects = [
    {
      title: "Smart Campus Navigation",
      category: "AI/ML",
      description: "AI-powered campus navigation system with real-time route optimization",
      image: "bg-gradient-to-br from-primary to-secondary",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      title: "College Event Platform",
      category: "Web Dev",
      description: "Full-stack platform for managing college events and registrations",
      image: "bg-gradient-to-br from-accent to-secondary",
      tags: ["Node.js", "MongoDB", "Next.js"],
    },
    {
      title: "Autonomous Rover",
      category: "Robotics",
      description: "Self-navigating rover with obstacle detection and avoidance",
      image: "bg-gradient-to-br from-secondary to-primary",
      tags: ["Arduino", "C++", "Computer Vision"],
    },
    {
      title: "Smart Home Automation",
      category: "IoT",
      description: "IoT-based home automation system with mobile app control",
      image: "bg-gradient-to-br from-primary/80 to-accent",
      tags: ["Raspberry Pi", "MQTT", "Flutter"],
    },
    {
      title: "Sentiment Analyzer",
      category: "AI/ML",
      description: "Real-time sentiment analysis tool for social media monitoring",
      image: "bg-gradient-to-br from-accent/80 to-primary",
      tags: ["Python", "NLP", "FastAPI"],
    },
    {
      title: "Code Collaboration Tool",
      category: "Web Dev",
      description: "Real-time collaborative coding platform with video chat",
      image: "bg-gradient-to-br from-secondary/80 to-accent/80",
      tags: ["WebRTC", "Socket.io", "React"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Project <span className="text-accent">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore innovative projects built by our talented members
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-accent text-accent-foreground hover:bg-accent-glow font-semibold"
                  : "hover:border-accent hover:text-accent"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 ${project.image} flex items-center justify-center`}
              >
                <div className="text-center text-primary-foreground p-4">
                  <h3 className="font-heading font-bold text-2xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:border-accent hover:text-accent flex-1"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:border-accent hover:text-accent flex-1"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
