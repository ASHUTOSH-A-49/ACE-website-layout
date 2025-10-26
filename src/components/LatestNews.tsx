import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestNews = () => {
  const news = [
    {
      title: "ACE TechFest 2025 - Registration Now Open",
      date: "March 15, 2025",
      excerpt:
        "Join us for the biggest technical fest of the year. Exciting competitions, workshops, and prizes await!",
      category: "Events",
    },
    {
      title: "New AI/ML Workshop Series Announced",
      date: "March 10, 2025",
      excerpt:
        "Learn cutting-edge machine learning techniques from industry experts. Limited seats available.",
      category: "Workshops",
    },
    {
      title: "ACE Members Win National Hackathon",
      date: "March 5, 2025",
      excerpt:
        "Our team secured first place at the National Coding Championship 2025. Congratulations to the winners!",
      category: "Achievements",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Latest <span className="text-accent">Updates</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay informed about our latest events, achievements, and opportunities. Never miss out on what's happening at ACE.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent-glow hover-glow font-semibold group">
              View All News
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column - News Items */}
          <div className="space-y-6">
            {news.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-border card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category & Date */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-3">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors group"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
