import { Linkedin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AlumniSpotlight = () => {
  const alumni = [
    {
      name: "Rahul Sharma",
      batch: "Class of 2020",
      role: "Software Engineer",
      company: "Google",
      quote:
        "ACE gave me the platform to explore my interests and connect with like-minded individuals. The projects and workshops prepared me for industry challenges.",
      initial: "RS",
    },
    {
      name: "Priya Deshmukh",
      batch: "Class of 2019",
      role: "Machine Learning Engineer",
      company: "Microsoft",
      quote:
        "The mentorship program at ACE was invaluable. It helped me navigate my career path and land my dream job in AI/ML.",
      initial: "PD",
    },
    {
      name: "Arjun Patel",
      batch: "Class of 2021",
      role: "Full Stack Developer",
      company: "Amazon",
      quote:
        "Being part of ACE taught me not just technical skills, but also leadership and teamwork. It's been instrumental in my career growth.",
      initial: "AP",
    },
  ];

  return (
    <section id="alumni" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Alumni <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our accomplished alumni who have made their mark in the tech industry
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {alumni.map((person, index) => (
            <div
              key={person.name}
              className="bg-card rounded-2xl p-8 border border-border card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-heading font-bold text-xl">
                    {person.initial}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-card-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{person.batch}</p>
                </div>
              </div>

              {/* Role & Company */}
              <div className="mb-4 pb-4 border-b border-border">
                <p className="font-semibold text-foreground">{person.role}</p>
                <p className="text-accent font-medium">{person.company}</p>
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                "{person.quote}"
              </blockquote>

              {/* LinkedIn Link */}
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          ))}
        </div>

        {/* Mentorship CTA */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-primary-foreground animate-fade-in">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h3 className="font-heading font-bold text-3xl mb-4">
            Join Our Mentorship Program
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
            Connect with our experienced alumni for career guidance, technical mentorship, and industry insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-glow hover-glow font-semibold"
            >
              Find a Mentor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm font-semibold"
            >
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSpotlight;
