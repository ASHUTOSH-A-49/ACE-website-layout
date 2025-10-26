import { Code2, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
              About <span className="text-accent">ACE</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Association of Computer Engineers (ACE) is the premier technical club of the Computer Science and Engineering Department at NIT Raipur. We are a community of passionate tech enthusiasts dedicated to fostering innovation, collaboration, and technical excellence.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through workshops, hackathons, technical talks, and collaborative projects, ACE provides a platform for students to enhance their technical skills, network with industry professionals, and work on cutting-edge technologies.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { icon: Code2, label: "Technical Excellence" },
                { icon: Users, label: "Community Driven" },
                { icon: Lightbulb, label: "Innovation First" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <item.icon className="text-primary-foreground" size={28} />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-2 border-border p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-5xl">
                    ACE
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    Department of CSE
                  </h3>
                  <p className="text-muted-foreground">
                    National Institute of Technology, Raipur
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Established to promote technical culture and innovation in computer engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
