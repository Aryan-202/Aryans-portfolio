import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // When closing, start animating and wait for animation to complete
      setIsAnimating(true);
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match the transition duration
    } else {
      // When opening, just open immediately
      setIsMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
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
    <header className={`fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border shadow-lg w-[95%] sm:w-[90%] max-w-4xl ${isMobileMenuOpen || isAnimating ? 'rounded-[2rem]' : 'rounded-full'}`}>
      <div className="container mx-auto px-3 sm:px-6 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-xl font-bold flex-shrink-0">
            <img src="./logo.png" alt="Logo" width={40} height={40} className="rounded-full w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors font-medium px-2 lg:px-3 py-2 rounded-full hover:bg-accent text-sm lg:text-base whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 cursor-pointer flex-shrink-0"
            >
              <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden rounded-full w-8 h-8 sm:w-9 sm:h-9 cursor-pointer flex-shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              ) : (
                <Menu className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
          <nav className="flex flex-col gap-2 pb-4 border-t border-border pt-4 px-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors font-medium py-3 px-4 rounded-xl hover:bg-accent text-left"
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