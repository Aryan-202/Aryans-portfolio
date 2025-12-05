import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";
import { 
  Mail, 
  MapPin, 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Calendar,
  Coffee
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative z-20 bg-background border-t mt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
                <img 
                  src="./logo.png" 
                  alt="Logo" 
                  className="w-8 h-8 rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Aryan Vishwakarma</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Passionate about creating exceptional digital experiences 
              that are fast, accessible, and visually appealing.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3">Get In Touch</h4>
              <Button 
                size="sm" 
                className="rounded-full"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Social & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getIcon(link.icon)}
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Resources</h4>
              <div className="space-y-2">
                <a 
                  href={personalInfo.resumeLink}
                  download
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download Resume
                </a>
                <a 
                  href="https://github.com/Aryan-202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Coffee className="w-4 h-4" />
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by Aryan Vishwakarma</span>
              <span>•</span>
              <span>© {currentYear}</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Crafted with React, TypeScript & Tailwind CSS
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;