import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arramoum Sanaa",
    content: "Excellente expérience du début à la fin. Équipe dynamique, sérieuse et résultats au-delà des attentes. Je recommande vivement à Tanger.",
    rating: 5,
  },
  {
    name: "Abdelkebir Elkiraa",
    content: "Agence très sérieuse basée à Tanger, avec une bonne maîtrise du marché digital. Merci pour votre accompagnement dans notre stratégie de communication. Le rapport qualité/prix est top.",
    rating: 5,
  },
  {
    name: "Imane Belghazi",
    content: "Meilleure agence et Meilleur service vraiment je regrette pas ❤️ Merciii code trend 👌",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ce que disent <span className="gradient-text">nos clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
