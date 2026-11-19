import { motion } from "framer-motion";
import { Play, Camera, Film } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 dark:bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10 dark:from-background/50 dark:via-transparent dark:to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-blue-200 dark:text-primary text-xs md:text-sm font-medium tracking-wide uppercase mb-6">
            Agence Digitale &amp; Production Vidéo · Tanger, Maroc
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-blue-300 dark:text-card-foreground transition-colors duration-200">
            On ne suit pas la tendance,{" "}
            <span className="gradient-text">on la crée.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white dark:text-muted-foreground max-w-2xl mx-auto mb-10 transition-colors duration-200">
            Production audiovisuelle, marketing digital de performance et conception web moderne pour propulser votre marque vers l&apos;avenir à Tanger et partout au Maroc.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Voir nos Projets
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 rounded-xl border border-border text-white dark:text-foreground font-semibold hover:bg-primary/10 hover:text-primary-foreground dark:hover:bg-secondary transition-colors"
            >
              Parler à un Expert
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-3 max-w-lg mx-auto gap-4 sm:gap-8"
        >
          {[
            { value: "500+", label: "Projets réalisés" },
            { value: "500+", label: "Clients satisfaits" },
            { value: "7+", label: "Années d'expérience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-200 dark:text-primary">{stat.value}</p>
              <p className="text-[11px] sm:text-xs text-white dark:text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
