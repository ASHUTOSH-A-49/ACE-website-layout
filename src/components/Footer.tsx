import { Mail, MapPin, Phone, Linkedin, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Alumni", href: "#alumni" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Academic Calendar", href: "#" },
    { name: "Course Schedule", href: "#" },
    { name: "Department Notices", href: "#" },
    { name: "Lab Bookings", href: "#" },
    { name: "Technical Docs", href: "#" },
    { name: "Open Source", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">
                  ACE
                </span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">ACE</div>
                <div className="text-xs text-primary-foreground/80">NIT Raipur</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Association of Computer Engineers - Empowering future tech leaders through innovation, collaboration, and excellence.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  Department of CSE, NIT Raipur, Raipur, Chhattisgarh 492010
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 text-accent" />
                <a
                  href="mailto:ace@nitrr.ac.in"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  ace@nitrr.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 text-accent" />
                <a
                  href="tel:+917712254200"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +91 771 225 4200
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} ACE - Association of Computer Engineers, NIT Raipur. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
