import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À Propos", href: "#about" },
  { label: "Nos Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
        return;
      }
    }

    if (location.pathname !== "/") {
      if (href.startsWith("#")) {
        navigate("/" + href);
      } else {
        navigate(href);
      }
      return;
    }

    if (href.startsWith("#")) {
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      navigate(href);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-md" 
          : "bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 py-3 md:py-4 px-4 md:px-6">
        <img 
          src={logo} 
          alt="Code Trend" 
          className="h-9 md:h-10 cursor-pointer" 
          onClick={handleLogoClick} 
        />
        
        {/* Navigation Desktop (Inchangée) */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-blue-300 dark:text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Demander un Devis
          </button>

          {/* Bouton Hamburger (Format Mobile Uniquement) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Menu mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Hamburger Déroulant pour Format Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Navigation Rapide
              </span>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.href);
                      }}
                      className="w-full text-left py-3 px-4 rounded-xl text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary active:bg-primary/20 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-primary font-bold">→</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border/60">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-center font-semibold text-sm shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Demander un Devis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
