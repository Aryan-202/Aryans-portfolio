# client/components.json

{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}


---

# client/eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])


---

# client/index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aryan's | Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>


---

# client/package.json

{
  "name": "Aryan's Portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.3",
    "@tailwindcss/cli": "^4.1.17",
    "@tailwindcss/postcss": "^4.1.17",
    "@tailwindcss/vite": "^4.1.16",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.552.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.5",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.10.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7"
  }
}

---

# client/src/App.css



---

# client/src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App


---

# client/src/assets/assets.ts

import x from './twitter-x.svg'

export const images = {
    x,
}

---

# client/src/components/Background.tsx

import { cn } from "@/lib/utils";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />


      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}

---

# client/src/components/layouts/Header.tsx

import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border rounded-full shadow-lg w-[95%] max-w-4xl">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-xl font-bold">
            <img src="./logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors font-medium px-3 py-2 rounded-full hover:bg-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 cursor-pointer"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden rounded-full w-9 h-9 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            md:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="flex flex-col gap-2 pb-4 border-t border-border pt-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-accent text-left"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

---

# client/src/components/layouts/index.ts



---

# client/src/components/layouts/Layout.tsx

import { Background } from "@/components/Background";
import Header from "./Header";
import { useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animate');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}

---

# client/src/components/sections/About/About.module.css

.about {
  position: relative;
}

.skillItem {
  transition: all 0.3s ease;
}

.skillItem:hover {
  transform: translateY(-2px);
}

.gradientText {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Animation for skill items */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

---

# client/src/components/sections/About/About.tsx

import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { Card } from "@/components/ui/Card";
import {
  MapPin,
  Calendar,
  Award,
  Phone,
  GraduationCap,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 scroll-animate">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <div className="space-y-4">
                <div>
                  <ul className="text-muted-foreground leading-relaxed list-disc space-y-1">
                    <li>
                      Full Stack Developer passionate about efficient, scalable
                      solutions
                    </li>
                    <li>
                      Specialized in creating user-friendly digital experiences
                      that solve real problems
                    </li>
                    <li>
                      Committed to delivering solutions that make meaningful
                      impact on users' lives
                    </li>
                    <li>
                      Believe in clean code, thoughtful design, and continuous
                      learning
                    </li>
                    <li>
                      Driven by curiosity and the challenge of transforming
                      complex ideas into intuitive interfaces
                    </li>
                    <li>
                      Focus on writing maintainable code that stands the test of
                      time
                    </li>
                    <li>
                      Passionate about bridging the gap between technical
                      requirements and user needs
                    </li>
                    <li>
                      Always exploring new ways to improve performance and
                      enhance user satisfaction
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h4 className="text-2xl font-semibold mb-6">Personal Details</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-lg">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-lg">{personalInfo.email}</p>
                  </div>
                </div> */}

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium text-lg">2+ Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Specialization
                    </p>
                    <p className="font-medium text-lg">
                      Full Stack Development
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-lg">
                      B.Tech in Computer Science
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Availability
                    </p>
                    <p className="font-medium text-lg">
                      Open for Opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Skills Preview */}
              {/* <div className="mt-8 pt-6 border-t border-border">
                <h5 className="text-lg font-semibold mb-4">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "AWS"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </Card>
          </motion.div>
        </div>

        {/* Why Work With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 lg:mb-8">
              Why Work With Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold">Fast & Efficient</h4>
                <p className="text-muted-foreground text-sm">
                  Deliver high-quality code with optimal performance and clean
                  architecture
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-semibold">Creative Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Innovative approaches to complex problems with user-centric
                  design
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold">Team Player</h4>
                <p className="text-muted-foreground text-sm">
                  Excellent communication skills and collaborative mindset
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


---

# client/src/components/sections/About/index.ts

export { default } from './About';

---

# client/src/components/sections/Contact/Contact.module.css

.contact {
  position: relative;
}

/* Social link animations */
.socialLink {
  transition: all 0.3s ease;
}

.socialLink:hover {
  transform: translateY(-2px);
}

/* Contact info card animations */
.contactInfoItem {
  transition: all 0.3s ease;
}

.contactInfoItem:hover {
  transform: translateX(5px);
}

/* Gradient text for headings */
.gradientText {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Floating animation for decorative elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floatAnimation {
  animation: float 3s ease-in-out infinite;
}

---

# client/src/components/sections/Contact/Contact.tsx

import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Form - Centered and full width on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-2xl"
          >
            <Card className="p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <ContactForm />
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-background/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and challenges. 
              Whether you have a project in mind or just want to say hello, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

---

# client/src/components/sections/Contact/ContactForm.module.css

.contactForm {
  width: 100%;
}

.formGroup {
  margin-bottom: 1.5rem;
}

.label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--foreground);
}

.input,
.textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--ring);
}

.input::placeholder,
.textarea::placeholder {
  color: var(--muted-foreground);
}

.textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

/* Animation for form elements */
.formGroup {
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Success state */
.successMessage {
  text-align: center;
  padding: 3rem 1rem;
}

.successIcon {
  color: #10b981;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .formGroup {
    margin-bottom: 1rem;
  }
  
  .input,
  .textarea {
    padding: 0.625rem 0.875rem;
  }
}

---

# client/src/components/sections/Contact/ContactForm.tsx

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle } from "lucide-react";
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}



const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://aryans-portfolio-9srv.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-500" />
        <h4 className="mb-2 font-semibold text-2xl">Message Sent!</h4>
        <p className="mb-6 text-muted-foreground">
          Thank you for your message. I'll get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="rounded-full"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {/* Error Message */}
      {error && (
        <div className="bg-destructive/10 mb-6 p-4 border border-destructive/20 rounded-lg">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-6">
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </div>

        {/* Email Field */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Subject Field */}
      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="What's this about?"
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={styles.textarea}
          placeholder="Tell me about your project or just say hello..."
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8"
      >
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="py-6 rounded-full w-full font-semibold text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 w-5 h-5" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
};

export default ContactForm;


---

# client/src/components/sections/Contact/index.ts

export { default } from './Contact';

---

# client/src/components/sections/Hero/Hero.module.css

.hero {
  position: relative;
  overflow: hidden;
}

.gradientBg {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    rgba(168, 85, 247, 0.1) 50%, 
    rgba(236, 72, 153, 0.1) 100%);
}

/* Animation for floating elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floatAnimation {
  animation: float 6s ease-in-out infinite;
}

---

# client/src/components/sections/Hero/Hero.tsx

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                {personalInfo.name}
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                {personalInfo.title}
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                {personalInfo.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href={personalInfo.resumeLink} download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {getIcon(link.icon)}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Avatar */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-sm font-semibold">🥰</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-sm font-semibold">❤️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

---

# client/src/components/sections/Hero/index.ts



---

# client/src/components/sections/Projects/index.ts

export { default } from './Projects';

---

# client/src/components/sections/Projects/Projects.module.css

.projectCard {
  transition: all 0.3s ease;
  border: 1px solid var(--border);
}

.projectCard:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px var(--primary);
}

.projectOverlay {
  backdrop-filter: blur(4px);
}

/* Animation for project cards */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.projectCard {
  animation: slideUp 0.6s ease-out;
}

/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Gradient border effect */
.gradientBorder {
  position: relative;
  background: var(--card);
}

.gradientBorder::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  padding: 2px;
  background: linear-gradient(135deg, var(--primary), var(--primary-foreground));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}

---

# client/src/components/sections/Projects/Projects.tsx

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import type { Project } from "@/types/project";
import styles from './Projects.module.css';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <h3 className="text-2xl font-semibold text-center">Featured Projects</h3>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-background/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <a href="https://github.com/Aryan-202" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className={`overflow-hidden h-full transition-all duration-300 ${styles.projectCard}`}>
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-4xl">🚀</div>
          </div>
          
          {/* Overlay with links */}
          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${styles.projectOverlay}`}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" className="flex-1" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Projects;

---

# client/src/components/sections/Skills/index.ts

export { default } from './Skills';

---

# client/src/components/sections/Skills/Skills.module.css

.skills {
  position: relative;
}

.skillItem {
  transition: all 0.3s ease;
}

.skillItem:hover {
  transform: translateX(5px);
}

/* Animation for skill bars */
@keyframes skillFill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.skillLevel {
  animation: skillFill 1s ease-out;
}

/* Gradient text for headings */
.gradientText {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Pulse animation for featured skills */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.pulseAnimation {
  animation: pulse 2s ease-in-out infinite;
}

---

# client/src/components/sections/Skills/Skills.tsx

import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { 
  Code2, 
  Database,
  Server
} from "lucide-react";
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST API", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Java", level: 70 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      category: "Database & Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Firebase", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 lg:p-8 h-full hover:shadow-xl transition-all duration-300 border-0">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{category.category}</h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className={styles.skillItem}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

---

# client/src/components/ui/button.tsx

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }


---

# client/src/components/ui/Card/Card.module.css

.card {
  border-radius: var(--radius-lg);
  background: var(--card);
  color: var(--card-foreground);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card--default {
  border: 1px solid var(--border);
  box-shadow: 
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card--outline {
  border: 2px solid var(--border);
  background: transparent;
}

.card--ghost {
  border: none;
  background: transparent;
  box-shadow: none;
}

.card--hover:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Dark mode specific styles */
.dark .card--default {
  box-shadow: 
    0 1px 3px 0 rgba(0, 0, 0, 0.3),
    0 1px 2px 0 rgba(0, 0, 0, 0.2);
}

.dark .card--hover:hover {
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.cardHeader {
  display: flex;
  flex-direction: column;
  space-y: 1.5;
  padding: 1.5rem 1.5rem 0;
}

.cardTitle {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
  margin: 0;
}

.cardDescription {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  line-height: 1.5;
  margin-top: 0.5rem;
}

.cardContent {
  padding: 1.5rem;
  padding-top: 0;
}

.cardFooter {
  display: flex;
  align-items: center;
  padding: 0 1.5rem 1.5rem;
  gap: 0.5rem;
}

/* Animation for card entrance */
@keyframes cardEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card[data-animate="true"] {
  animation: cardEnter 0.5s ease-out;
}

/* Gradient border variant */
.card--gradient {
  position: relative;
  background: var(--card);
  border: none;
}

.card--gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  padding: 2px;
  background: linear-gradient(135deg, var(--primary), var(--primary-foreground));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}

/* Glass morphism variant */
.card--glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .card--glass {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

---

# client/src/components/ui/Card/Card.tsx

import * as React from "react";
import { cn } from "@/lib/utils";
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost";
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.card,
          styles[`card--${variant}`],
          hover && styles['card--hover'],
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles.cardHeader, className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(styles.cardTitle, className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(styles.cardDescription, className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles.cardContent, className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles.cardFooter, className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
};

---

# client/src/components/ui/Card/index.ts

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './Card';
export type { CardProps } from './Card';

---

# client/src/components/ui/Footer/Footer.module.css



---

# client/src/components/ui/Footer/Footer.tsx



const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer

---

# client/src/components/ui/Footer/index.ts



---

# client/src/components/ui/Modal/index.ts



---

# client/src/components/ui/Modal/Modal.module.css



---

# client/src/components/ui/Modal/Modal.tsx



---

# client/src/data/index.ts



---

# client/src/data/personalInfo.ts

export const personalInfo = {
  name: "Aryan Vishwakarma",
  title: "Full Stack Developer",
  description: "I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.",
  email: "aryanvishwakarma275@gmail.com",
  location: "Gorakhpur, Uttar Pradesh, India",
  avatar: "/hero.jpg",
  resumeLink: "/resume.docx"
}


---

# client/src/data/projects.ts

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/Aryan-202/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image: "/project-images/ecommerce.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/Aryan-202/task-manager",
    liveUrl: "https://taskflow-demo.netlify.app",
    image: "/project-images/taskmanager.jpg",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    githubUrl: "https://github.com/Aryan-202/weather-dashboard",
    liveUrl: "https://weather-dash-aryan.vercel.app",
    image: "/project-images/weather.jpg",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "REST API Service",
    description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation for a social media platform.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com/Aryan-202/social-api",
    liveUrl: null,
    image: "/project-images/api.jpg",
    featured: false,
    category: "Backend"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with dark/light theme, smooth animations, and optimized performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Aryan-202/portfolio-website",
    liveUrl: "https://aryan-vishwakarma.vercel.app",
    image: "/project-images/portfolio.jpg",
    featured: true,
    category: "Frontend"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with rooms, file sharing, and emoji reactions using WebSocket technology.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Aryan-202/chat-app",
    liveUrl: "https://chatapp-aryan.herokuapp.com",
    image: "/project-images/chat.jpg",
    featured: false,
    category: "Full Stack"
  }
];

---

# client/src/data/skills.ts

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Next.js"
    ]
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "Java",
      "Express.js",
      "REST API",
      "GraphQL",
      "Redis"
    ]
  },
  {
    category: "Database & Tools",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Git",
      "Docker",
      "AWS",
      "Firebase",
      "Redis"
    ]
  }
];

---

# client/src/data/socialLinks.ts

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Aryan-202",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aryan-vishwakarma-387927321/",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://x.com/AryanxSenpai",
    icon: "twitter"
  },
  
]

---

# client/src/hooks/index.ts



---

# client/src/hooks/useLocalStorage.ts

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };
  const [storedValue, setStoredValue] = useState<T>(readValue);
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      
      setStoredValue(valueToStore);
      
     
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage;

---

# client/src/hooks/useScroll.ts



---

# client/src/hooks/useTheme.ts

import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

type Theme = 'dark' | 'light';

export const useTheme = (): { theme: Theme; setTheme: (theme: Theme) => void } => {
  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>('theme', 'light');
  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    setStoredTheme(theme);
  }, [theme, setStoredTheme]);

  return {
    theme,
    setTheme,
  };
};

---

# client/src/index.css

@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

/* Custom scroll animation for section transitions */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-animate {
  animation: fadeInUp 0.6s ease-out;
}

/* Ensure proper spacing for fixed navbar */
section {
  scroll-margin-top: 80px;
}

---

# client/src/lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

---

# client/src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


---

# client/src/pages/Home.tsx

import { Layout } from "@/components/layouts/Layout";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;

---

# client/src/pages/index.ts



---

# client/src/styles/animations.css



---

# client/src/styles/globals.css



---

# client/src/styles/mixins.css



---

# client/src/styles/variables.css



---

# client/src/types/common.ts



---

# client/src/types/index.ts

export * from './common';
export * from './personal';
export * from './project';

---

# client/src/types/personal.ts



---

# client/src/types/project.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  featured: boolean;
  category: string;
}

export interface ProjectsFilter {
  category: string;
  featured: boolean;
}

---

# client/src/utils/animations.ts



---

# client/src/utils/constants.ts



---

# client/src/utils/helpers.ts



---

# client/src/utils/index.ts



---

# client/tsconfig.app.json

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,


    /*shadcn ui*/
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}


---

# client/tsconfig.json

{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}


---

# client/tsconfig.node.json

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}


---

# client/vite.config.ts

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


---

# codes.md



---

# LICENSE

MIT License

Copyright (c) 2025 Aryan Vishwakarma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

# README.md


# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful Aceternity UI background with smooth animations and dark/light theme support.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
    
- **Responsive**: Fully responsive design that works on all devices
    
- **Dark/Light Theme**: Toggle between dark and light modes
    
- **Smooth Animations**: CSS animations and transitions for better user experience
    
- **TypeScript**: Fully typed for better development experience
    
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
    
- **Aceternity UI**: Beautiful background effects and components
    
- **React 19**: Latest React features and performance improvements
    

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
    
- **Styling**: Tailwind CSS, CSS Modules
    
- **UI Components**: Shadcn/ui, Aceternity UI, Radix UI
    
- **Icons**: Lucide React
    
- **Build Tool**: Vite
    
- **Routing**: React Router DOM
    
- **Package Manager**: npm
    

## 📁 Project Structure

```text

client/
├── src/
│   ├── components/
│   │   ├── layouts/          # Header, Layout components
│   │   ├── sections/         # Home page sections (Hero, About, Contact)
│   │   ├── ui/               # Reusable UI components (Button, Card, Modal, Footer)
│   │   └── Background.tsx    # Aceternity UI background component
│   ├── pages/                # Page components
│   ├── hooks/                # Custom React hooks
│   ├── data/                 # Static data (personal info, projects, skills)
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   ├── styles/               # Global styles and CSS variables
│   └── lib/                  # Library configurations
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🎨 Components Overview

### Layout Components

- **Layout**: Main layout wrapper with background and header
    
- **Header**: Navigation header with theme toggle
    
- **Background**: Aceternity UI animated background
    

### Page Sections

- **Hero**: Introduction section with call-to-action
    
- **About**: Personal information and skills
    
- **Contact**: Contact form and information
    

### UI Components

- **Button**: Customizable button component
    
- **Card**: Content card with various styles
    
- **Modal**: Dialog and modal components
    
- **Footer**: Site footer with links
    

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
    
- npm or yarn package manager
    

### Installation

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/Aryan-202/portfolio-website.git
    cd portfolio-website/client
    ```
    
2. **Install dependencies**
    
    ```bash
    npm install
    ```
    
3. **Start the development server**
    
    ```bash
    npm run dev
    ```
    
4. **Open your browser**  
    Navigate to `http://localhost:5173`
    

### Available Scripts

- `npm run dev` - Start development server
    
- `npm run build` - Build for production
    
- `npm run lint` - Run ESLint
    
- `npm run preview` - Preview production build
    

## 🎯 Customization

### Personal Information

Update your personal details in `src/data/personalInfo.ts`:

```typescript

export const personalInfo = {
  name: "Aryan Vishwakarma",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  // ... other details
}
```
### Projects

Add your projects in `src/data/projects.ts`:

```typescript

export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    // ... other project details
  }
]
```
### Skills

Update your skills in `src/data/skills.ts`:

```typescript

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"]
  }
]
```
## 🌙 Theme System

The portfolio includes a built-in theme system with dark/light mode support:

- **Automatic detection**: Uses system preference by default
    
- **Manual toggle**: Theme toggle button in header
    
- **Persistence**: Theme preference saved in localStorage
    

### Adding New Themes

Extend the theme system by updating:

- `src/hooks/useTheme.ts`
    
- `src/index.css` (CSS variables)
    
- Component styles
    

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: < 768px
    
- Tablet: 768px - 1024px
    
- Desktop: > 1024px
    

## 🎨 Styling Guidelines

- Use Tailwind CSS classes for most styling
    
- CSS Modules for component-specific styles
    
- Global styles in `src/styles/` directory
    
- CSS variables for consistent theming
    

## 🔧 Development

### Adding New Components

1. Create component in appropriate directory
    
2. Export from `index.ts` for clean imports
    
3. Add TypeScript types in `src/types/`
    
4. Use CSS Modules for styling
    

### Code Quality

- ESLint for code linting
    
- TypeScript for type safety
    
- Prettier for code formatting (if configured)
    

## 📦 Building for Production

bash

npm run build

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
    
- **Netlify**: Drag and drop the `dist` folder
    
- **GitHub Pages**: Use GitHub Actions for deployment
    

## 👨‍💻 About Me

I'm Aryan Vishwakarma, a passionate Full Stack Developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications.

## 📞 Connect With Me

- **GitHub**: [Aryan-202](https://github.com/Aryan-202)
    
- **LinkedIn**: [Aryan Vishwakarma](https://linkedin.com/in/aryan-vishwakarma-387927321/)
    
- **Portfolio**: [Live Demo](https://your-portfolio-link.com/)
    

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://license/) file for details.

## 🤝 Contributing

1. Fork the project
    
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
    
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
    
4. Push to the branch (`git push origin feature/AmazingFeature`)
    
5. Open a Pull Request
    

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for beautiful background components
    
- [Shadcn/ui](https://ui.shadcn.com/) for accessible UI components
    
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
    
- [Lucide](https://lucide.dev/) for beautiful icons
    

---

**Note**: Remember to update the personal information, project details, and contact information in the respective data files to customize the portfolio for your own use.

---

# server/package.json

{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "description": "Backend for portfolio website with email functionality",
  "type": "commonjs",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "dotenv": "^16.3.1",
    "nodemailer": "^6.9.7",
    "zod": "^3.22.4",
    "express-rate-limit": "^7.1.5",
    "typescript": "^5.2.2",
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/nodemailer": "^6.4.14",
    "@types/node": "^20.8.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10",
    "ts-node": "^10.9.1"
  }
}

---

# server/src/config/email.ts

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const emailTransporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
emailTransporter.verify((error) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter is ready to send messages');
  }
});

---

# server/src/controllers/contactController.ts

import { Request, Response } from 'express';
import { emailTransporter } from '../config/email';
import { ContactFormData } from '../types/contact';
import { createResponse } from '../utils/response';

export const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Email content for you (the portfolio owner)
    const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; }
            .content { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span>
                <span class="value">${name} (${email})</span>
              </div>
              <div class="field">
                <span class="label">Subject:</span>
                <span class="value">${subject}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="margin-top: 10px; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div class="field">
                <small>Sent from your portfolio contact form</small>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Auto-reply to the person who filled the form
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; text-align: center; }
            .content { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Reaching Out!</h2>
            </div>
            <div class="content">
              <p>Hello <strong>${name}</strong>,</p>
              
              <p>Thank you for getting in touch! I've received your message and will get back to you as soon as possible.</p>
              
              <p>Here's a summary of your message:</p>
              
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br>${message}</p>
              </div>
              
              <p>I typically respond within 24-48 hours. If your inquiry is urgent, feel free to connect with me on LinkedIn.</p>
              
              <p>Best regards,<br>
              <strong>Aryan Vishwakarma</strong><br>
              Full Stack Developer</p>
              
              <hr style="margin: 20px 0;">
              
              <p style="font-size: 12px; color: #666;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to portfolio owner
    await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject}`,
      html: ownerEmailHtml,
    });

   
    await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Aryan Vishwakarma',
      html: autoReplyHtml,
    });

    res.status(200).json(
      createResponse(true, 'Message sent successfully! We\'ve also sent a confirmation email to your inbox.')
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    res.status(500).json(
      createResponse(false, 'Failed to send message. Please try again later.')
    );
  }
};

---

# server/src/index.ts

import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { corsOptions } from './middleware/cors';
import { validateContactForm } from './middleware/validation';
import { sendContactEmail } from './controllers/contactController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions from this IP, please try again later.'
  }
});

// Middleware
app.use(helmet());
app.use(corsOptions);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Apply rate limiting to contact route
app.use('/api/contact', limiter);

// Routes
app.post('/api/contact', validateContactForm, sendContactEmail);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service: ${process.env.EMAIL_SERVICE}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});


---

# server/src/middleware/cors.ts

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [
  'https://welcomearyan.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000'
];

export const corsOptions = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.some(allowedOrigin => 
      origin === allowedOrigin || 
      origin.startsWith(allowedOrigin.replace('https://', 'http://'))
    )) {
      return callback(null, true);
    } else {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      console.log('CORS blocked for origin:', origin);
      return callback(new Error(msg), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
});

---

# server/src/middleware/validation.ts

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(1, 'Message is required').max(2000),
});

export const validateContactForm = (req: Request, res: Response, next: NextFunction) => {
  try {
    contactSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors.map(err => ({
          field: err.path[0],
          message: err.message
        }))
      });
    }
    next(error);
  }
};

---

# server/src/types/contact.ts

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

---

# server/src/utils/response.ts

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
}

export const createResponse = <T>(
  success: boolean,
  message: string,
  data?: T,
  errors?: Array<{ field: string; message: string }>
): ApiResponse<T> => ({
  success,
  message,
  data,
  errors,
});

---

# server/tsconfig.json

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

