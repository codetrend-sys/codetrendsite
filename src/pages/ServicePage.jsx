import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Clock,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import { servicesData } from "@/data/servicesData";
import { serviceFaqs, servicePerks } from "@/data/serviceFaqs";

const ServicePage = ({ serviceSlug }) => {
  const params = useParams();
  const navigate = useNavigate();
  const slug = serviceSlug || params.slug;
  const service = servicesData[slug];

  const [openFaq, setOpenFaq] = useState(0);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const faqs = serviceFaqs[slug] || [];
  const perks = servicePerks.default;

  // 3 services complémentaires suggérés (hors service actif)
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const scrollToContact = (e) => {
    e?.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const schema = useMemo(() => {
    if (!service) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `https://www.thecodetrend.com/${service.slug}#service`,
          "name": service.title,
          "serviceType": service.heroHighlight,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Code Trend",
            "telephone": "+212539373710",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "N°6 3ème étage bureau N°5, Quartier Lalla Chafia",
              "addressLocality": "Tanger",
              "postalCode": "90000",
              "addressCountry": "MA",
            },
          },
          "areaServed": [
            { "@type": "City", "name": "Tanger" },
            { "@type": "City", "name": "Casablanca" },
            { "@type": "City", "name": "Rabat" },
            { "@type": "Country", "name": "Maroc" },
          ],
          "description": service.metaDescription,
        },
        ...(faqs.length > 0
          ? [
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a,
                  },
                })),
              },
            ]
          : []),
      ],
    };
  }, [service, faqs]);

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://www.thecodetrend.com/${service.slug}`}
        schema={schema}
        ogImage={service.heroImage}
      />

      <Navbar />

      <main className="overflow-hidden">
        {/* ======================================================== */}
        {/* 1. HERO SECTION CINÉMATIQUE (ESPACE EN HAUT PARFAITEMENT CALIBRÉ) */}
        {/* ======================================================== */}
        <section className="relative min-h-[620px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
          {/* PHOTO DE FOND HERO EN PLEIN ÉCRAN */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.15 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Dégradés cinématiques sombres et profonds pour lisibilité absolue */}
            <div className="absolute inset-0 bg-black/65 dark:bg-black/75 backdrop-blur-[0.5px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-background dark:from-black/90 dark:via-black/60 dark:to-background" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            {/* Fil d'ariane & Badge thématique */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-5"
            >
              <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/20 text-xs text-white/90 backdrop-blur-md">
                <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                <span className="text-white/40">/</span>
                <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
                <span className="text-white/40">/</span>
                <span className="text-white font-medium">{service.title}</span>
              </nav>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/25 border border-primary/45 text-xs font-semibold text-blue-200 dark:text-primary tracking-wide backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                {service.heroBadge}
              </span>
            </motion.div>

            {/* Titre Principal H1 avec animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
                {service.heroTitle.split(service.heroHighlight)[0]}
                <span className="gradient-text drop-shadow-[0_4px_24px_rgba(59,130,246,0.45)]">
                  {service.heroHighlight}
                </span>
                {service.heroTitle.split(service.heroHighlight)[1] || ""}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 dark:text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                {service.heroSubtitle}
              </p>

              {/* Bouton d'Action Principal Unique */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/40 text-base cursor-pointer group"
                >
                  <IconComponent className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Demander un Devis Gratuit
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Chiffres Clés avec verre dépoli (Glassmorphism) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto p-4 sm:p-5 rounded-3xl bg-black/45 dark:bg-card/70 backdrop-blur-xl border border-white/20 dark:border-border/60 shadow-2xl text-white dark:text-foreground"
              >
                {service.stats.map((st, i) => (
                  <div
                    key={st.label}
                    className="p-3 text-center border-r last:border-r-0 border-white/10 dark:border-border/40"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-200 dark:text-primary">
                      {st.val}
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/80 dark:text-muted-foreground mt-1 uppercase tracking-wide">
                      {st.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. POURQUOI CHOISIR CODE TREND (AVANTAGES CONCRETS) */}
        {/* ======================================================== */}
        <section className="py-16 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                L'Avantage Code Trend
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                Pourquoi confier votre projet à notre équipe à Tanger ?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Excellence & Matériel Pro",
                  desc: "Parc matériel cinéma 4K/6K en régie interne et technologies de développement d'élite.",
                },
                {
                  icon: Zap,
                  title: "Orientation ROI & Rentabilité",
                  desc: "Chaque action est calibrée pour générer des leads qualifiés, des ventes et des résultats concrets.",
                },
                {
                  icon: Users,
                  title: "Équipe Dédiée à Tanger",
                  desc: "Proximité physique, réunions en face-à-face à Tanger et réactivité garantie sous 24h.",
                },
                {
                  icon: ShieldCheck,
                  title: "Suivi Clé en Main",
                  desc: "Un interlocuteur unique qui gère l'ensemble du projet avec rigueur, de A à Z.",
                },
              ].map((adv, idx) => {
                const AdvIcon = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all shadow-sm hover:shadow-lg group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <AdvIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{adv.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. PÔLES D'EXPERTISE & SERVICES DÉTAILLÉS AVEC PHOTOS */}
        {/* ======================================================== */}
        <section className="py-20 bg-secondary/20 border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Expertise Métier
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                {service.pillarsTitle}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                {service.pillarsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.pillars.map((pillar, i) => {
                const PillarIcon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="rounded-3xl bg-card border border-border/70 overflow-hidden hover:border-primary/50 transition-all shadow-md hover:shadow-2xl group flex flex-col justify-between"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-background/90 backdrop-blur-md text-[11px] font-semibold text-primary border border-border/60 shadow-sm">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                            <PillarIcon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {pillar.description}
                        </p>

                        {/* Livrables Clés avec icônes de validation */}
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <div className="flex items-center gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>Approche personnalisée et calibrée sur votre marché</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>Livrables haute définition aux normes professionnelles</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform pt-2 text-left cursor-pointer"
                      >
                        Demander un devis pour cette prestation <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. MÉTHODOLOGIE & PROCESSUS EN 4 ÉTAPES */}
        {/* ======================================================== */}
        <section className="py-20 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Méthode Éprouvée
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                Comment nous garantissons <span className="gradient-text">vos résultats</span>
              </h2>
              <p className="text-muted-foreground text-base">
                Un processus transparent, rigoureux et structuré pour éliminer les imprévus.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {service.steps.map((st, idx) => (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all shadow-sm relative group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-4xl font-extrabold text-primary/25 block mb-3 font-mono group-hover:text-primary/50 transition-colors">
                      {st.step}
                    </span>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{st.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-medium text-primary uppercase tracking-wide">
                    Étape {idx + 1}/4
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. FAQ INTERACTIVE DÉDIÉE AU SERVICE */}
        {/* ======================================================== */}
        {faqs.length > 0 && (
          <section className="py-20 bg-secondary/15 border-b border-border/50">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Vos Questions
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Questions fréquentes sur {service.title}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <motion.div
                      key={faq.q}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="text-base sm:text-lg">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                              {faq.a}
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
        )}

        {/* ======================================================== */}
        {/* 6. EXPLOREZ NOS AUTRES EXPERTISES (MAILLAGE INTERNE) */}
        {/* ======================================================== */}
        <section className="py-20 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Synergie Digitale
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3">
                Découvrez aussi nos autres expertises
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Combinez vos canaux pour une stratégie de croissance globale et percutante au Maroc.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedServices.map((rel, idx) => {
                const RelIcon = rel.icon;
                return (
                  <motion.div
                    key={rel.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl bg-card border border-border/60 overflow-hidden hover:border-primary/50 transition-all shadow-sm hover:shadow-xl group flex flex-col justify-between"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={rel.heroImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md text-[10px] font-semibold text-primary border border-border/60">
                        {rel.heroBadge.split("·")[0]}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <RelIcon className="w-4 h-4 text-primary" />
                          <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                            {rel.title}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                          {rel.heroSubtitle}
                        </p>
                      </div>

                      <Link
                        to={`/${rel.slug}`}
                        className="inline-flex items-center justify-between w-full text-xs font-semibold text-primary group-hover:text-primary/90 pt-3 border-t border-border/50"
                      >
                        <span>En savoir plus</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 7. BANNIÈRE D'APPEL À L'ACTION (CTA BANNER) */}
        {/* ======================================================== */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Passez à la Vitesse Supérieure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Prêt à accélérer vos résultats avec <span className="gradient-text">{service.heroHighlight}</span> ?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Échangeons sur vos objectifs. Notre équipe à Tanger vous transmet une recommandation stratégique et un devis personnalisé sous 24 à 48 heures.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="px-9 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/30 text-base cursor-pointer"
            >
              <IconComponent className="w-5 h-5" />
              Lancer mon Projet avec Code Trend
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 8. FORMULAIRE DE CONTACT INTÉGRÉ */}
        {/* ======================================================== */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
