import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Texte principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              À Propos
            </span>
            <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold">
              Code Trend est une{" "}
              <span className="gradient-text">agence digitale créative</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Code Trend est une agence marocaine spécialisée dans le marketing digital et la
              communication de marque. Nous combinons créativité, performance et technologie
              pour propulser les marques vers l&apos;avenir.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Basés au cœur de Tanger, nous accompagnons les entreprises dans leur
              transformation digitale avec une approche innovante et sur‑mesure, adaptée à
              chaque projet.
            </p>
          </motion.div>

          {/* Carte de style, adaptée au site */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl opacity-70" />
            <div className="relative rounded-3xl bg-card border border-border/80 px-8 py-7 shadow-lg space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-2">
                  Pourquoi Code Trend
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Une équipe hybride composée de créatifs, de stratèges et de techniciens,
                  pour couvrir toute la chaîne de valeur&nbsp;: du concept à la diffusion
                  de vos contenus.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                    Projets livrés
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                    Clients actifs
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">7+</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                    Années d&apos;expérience
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Production vidéo
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Social Media
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Brand Content
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  développement web
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

