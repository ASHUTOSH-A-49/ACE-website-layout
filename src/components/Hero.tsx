import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ACE Computer Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
          Association of
          <br />
          <span className="text-accent">Computer Engineers</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-light">
          Innovate. Connect. Lead the Future of Tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent-glow hover-glow font-semibold text-lg px-8 py-6 group"
          >
            Join ACE Today
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm font-semibold text-lg px-8 py-6"
          >
            Explore Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Active Members" },
            { number: "50+", label: "Projects Completed" },
            { number: "100+", label: "Workshops Conducted" },
            { number: "25+", label: "Industry Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-primary-foreground">
              <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
