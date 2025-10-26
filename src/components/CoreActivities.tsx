import { Wrench, Trophy, Network, GraduationCap } from "lucide-react";

const CoreActivities = () => {
  const activities = [
    {
      icon: Wrench,
      title: "Technical Workshops",
      description:
        "Hands-on workshops covering cutting-edge technologies, programming languages, and development tools. Learn from industry experts and peers.",
    },
    {
      icon: Trophy,
      title: "Hackathons & Competitions",
      description:
        "Participate in coding competitions, hackathons, and technical challenges. Showcase your skills and win exciting prizes.",
    },
    {
      icon: Network,
      title: "Networking Events",
      description:
        "Connect with alumni, industry professionals, and fellow tech enthusiasts. Build lasting relationships and explore career opportunities.",
    },
    {
      icon: GraduationCap,
      title: "Mentorship Programs",
      description:
        "Get guided by experienced seniors and alumni. Receive personalized career advice and technical mentorship for your growth.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            What We <span className="text-accent">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of activities designed to enhance your technical skills and professional network
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-card rounded-2xl p-8 border border-border card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <activity.icon className="text-primary-foreground" size={32} />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-card-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreActivities;
