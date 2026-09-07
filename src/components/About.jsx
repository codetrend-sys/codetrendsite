import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Megaphone,
  Code2,
  Video,
  Share2,
  Camera,
  PenSquare,
  Target,
  Search,
  GraduationCap,
  MousePointerClick,
  ArrowUpRight,
} from "lucide-react";
import imgSeo from "../images/seo.jpg";
import brand from "../assets/brand.jpg"
import social from "../assets/social.png"
import web from "../assets/web.jpg"

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Campagnes multicanales, gestion de publicité (Ads) et stratégies de conversion pour booster votre croissance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Création de sites web haute performance, design UX/UI intuitif et solutions e-commerce modernes.",
    image: web,
    className: "md:col-span-1",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Réalisation de vidéos haute qualité, du storytelling au montage, pour captiver votre audience.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Animation de vos communautés, stratégie de contenu et veille pour une présence digitale impactante.",
    image: social,
    className: "md:col-span-2",
  },
  {
    icon: Camera,
    title: "Photography & Videography (Shooting) ",
    description: "Séances de shooting professionnelles pour vos produits et portraits, capturant l'essence de votre marque.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1",
  },
  {
    icon: PenSquare,
    title: "Branding & Positioning",
    description: "Définition de votre ADN de marque, design de logo et identité visuelle pour vous démarquer.",
    image: brand,
    className: "md:col-span-1",
  },
  {
    icon: Target,
    title: "Digital Content Creation",
    description: "Conception de contenus viraux et engageants adaptés à chaque plateforme pour booster votre visibilité.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    description: "Optimisation pour les moteurs de recherche et stratégies de présence locale pour dominer les résultats.",
    image: imgSeo,
    className: "md:col-span-1",
  },
  {
    icon: GraduationCap,
    title: "Marketing Consulting & Growth Strategy",
    description: "Conseils stratégiques personnalisés et plans d'action pour débloquer votre plein potentiel de croissance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2",
  },
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 transition-colors hover:border-primary/50 ${service.className} min-h-[280px]`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-transparent group-hover:from-background/100 dark:from-background/95 dark:via-background/90 dark:to-primary/10 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8" style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary backdrop-blur-md group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
            <service.icon size={28} />
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white dark:hover:bg-white/10"
          >
            <ArrowUpRight size={20} className="text-foreground" />
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2 mt-8  group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground text-base leading-relaxed max-w-[280px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-background/80 backdrop-blur-md p-4 -ml-4 rounded-2xl shadow-lg shadow-black/5 whitespace-pre-line">
            {service.description}
          </p>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-[80px] group-hover:bg-primary/40 transition-colors duration-500" />
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="services" className=" relative overflow-hidden bg-background py-6">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Nos Services
            </span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1]">
              Nous ne suivons pas les tendances, <br />
              <span className="gradient-text">Nous les créons.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-sm mb-4"
          >
            Une approche 360° alliant stratégie audacieuse et exécution technique irréprochable.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 rounded-3xl bg-card border border-border/80 px-6 py-8 md:px-10 md:py-10 shadow-lg"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs gradient-text font-bold uppercase tracking-[0.25em] text-primary mb-3">
                Création de contenu & marketing digital
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                De la stratégie à la production, nous concevons des expériences digitales qui renforcent votre image,
                engagent votre audience et génèrent des résultats mesurables.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <button
                onClick={() => window.open('https://creation-contenu.vercel.app/', '_blank')}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-sm hover:shadow-md group/btn"
              >
                Spark your brand : Trouvez votre modèle coup de cœur !
                <MousePointerClick className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

