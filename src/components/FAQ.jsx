import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqData = [
  {
    question: "Pourquoi choisir Code Trend comme agence digitale et vidéo à Tanger ?",
    answer:
      "Code Trend réunit une équipe complète de créatifs, vidéastes, directeurs artistiques et développeurs web basés à Tanger. Nous combinons narration cinématographique, stratégie d'acquisition de performance (Google & Meta Ads) et développement technique de pointe pour offrir un retour sur investissement mesurable aux entreprises marocaines.",
  },
  {
    question: "Quels sont les services proposés par Code Trend au Maroc ?",
    answer:
      "Nos expertises couvrent toute la chaîne de valeur numérique : Production Audiovisuelle (spots TV, vidéos d'entreprise, reels), Marketing Digital & Publicité payante, Développement de sites web & plateformes sur-mesure, Community Management, Shooting photo professionnel, et Branding / Identité visuelle.",
  },
  {
    question: "Accompagnez-vous des entreprises en dehors de Tanger ?",
    answer:
      "Absolument. Bien que nos bureaux physiques soient situés au Quartier Lalla Chafia à Tanger, nous accompagnons des clients et des marques dans tout le Royaume (Casablanca, Rabat, Marrakech, Fès, Agadir, etc.) ainsi qu'à l'échelle internationale grâce à nos processus collaboratifs à distance.",
  },
  {
    question: "Combien de temps prend la réalisation d'un projet web ou vidéo ?",
    answer:
      "Les délais s'adaptent à l'envergure du projet : comptez généralement 1 à 3 semaines pour un tournage et montage vidéo professionnel, et 2 à 5 semaines pour la conception, le design et le déploiement d'un site internet optimisé pour le référencement (SEO).",
  },
  {
    question: "Comment obtenir un devis gratuit pour mon projet ?",
    answer:
      "Il vous suffit de remplir le formulaire de contact en ligne, d'écrire à codetrend@outlook.fr ou de nous appeler directement au +212 5393-73710. Notre équipe analyse votre besoin et vous transmet une proposition stratégique détaillée sous 24 à 48 heures.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ & Conseils</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Découvrez comment Code Trend propulse la présence digitale et le contenu des entreprises à Tanger et partout au Maroc.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-card border-primary/40 shadow-sm"
                    : "bg-card/60 border-border/70 hover:border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg text-foreground">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
