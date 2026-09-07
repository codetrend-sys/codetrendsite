import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Globe, 
  Laptop, 
  Smartphone, 
  X, 
  Lock, 
  Sparkles, 
  ArrowUpRight, 
  Eye,
  CheckCircle2,
  Maximize2
} from "lucide-react";
import { useState } from "react";
import tashildashboard from '../images/tashil-dashboard.png';
// import logoscobe from '../images/logoscobe.png';
// import logocar from '../images/logocar.jpg';
// import logoconfortano from '../images/logoconfortano.png';

// Filtres globaux pour d'autres domaines (À décommenter plus tard si vous réactivez d'autres catégories) :
// const GLOBAL_FILTERS = [
//   { id: "all", label: "Tous" },
//   { id: "web", label: "Développement Web" },
//   { id: "marketing", label: "Marketing Digital" },
//   { id: "branding", label: "Branding" },
//   { id: "video", label: "Production Audiovisuelle" },
// ];

const WEB_FILTERS = [
  { id: "all", label: "Tous les projets Web" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "vitrine", label: "Sites Vitrines" },
  { id: "landing", label: "Landing Pages" },
];

const projects = [
  // --- PROJETS DÉVELOPPEMENT WEB ---
  {
    id: "scobe",
    title: "Librairie Scobe Tanger",
    type: "E-Commerce & Papeterie",
    category: "ecommerce",
    description: "Plateforme e-commerce moderne pour une librairie et papeterie de référence à Tanger, offrant un catalogue complet de fournitures et livres.",
    siteUrl: "https://www.librairiescobetanger.com/",
    displayUrl: "librairiescobetanger.com",
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    tags: ["E-Commerce", "Catalogue Produit", "Design Responsive", "Tanger"],
    highlights: ["Catalogue en ligne complet", "Design intuitif & épuré", "Expérience d'achat fluide"],
  },
  {
    id: "indiana-decor",
    title: "Indiana Décor",
    type: "E-Commerce & Décoration",
    category: "ecommerce",
    description: "Plateforme e-commerce élégante dédiée à la décoration d'intérieur, au mobilier contemporain et aux accessoires d'aménagement au Maroc.",
    siteUrl: "https://indianadecor.com/",
    displayUrl: "indianadecor.com",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=500&fit=crop",
    tags: ["E-Commerce", "Décoration & Design", "Catalogue Interactif", "UI/UX Premium"],
    highlights: ["Design d'intérieur élégant", "Expérience d'achat fluide", "Catalogue interactif"],
  },
  {
    id: "abderahmane-car",
    title: "Location Abderahmane Car",
    type: "Plateforme de Réservation",
    category: "vitrine",
    description: "Site web dynamique et système de réservation de véhicules de location pour particuliers et professionnels à Tanger.",
    siteUrl: "https://www.locationabderahmanecar.com/",
    displayUrl: "locationabderahmanecar.com",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop",
    tags: ["Site Vitrine", "Location d'Autos", "Réservation en ligne", "SEO Local"],
    highlights: ["Réservation en direct", "Présentation de la flotte", "Haute performance"],
  },
  {
    id: "cooperative-sahara",
    title: "Coopérative Sahara",
    type: "E-Commerce & Terroir",
    category: "ecommerce",
    description: "Boutique en ligne valorisant les produits du terroir marocain, cosmétiques naturels et huiles d'argan bio directement issus de la coopérative.",
    siteUrl: "https://cooperativesahara.com/",
    displayUrl: "cooperativesahara.com",
    thumbnail: "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&h=500&fit=crop",
    tags: ["E-Commerce", "Produits Bio & Naturels", "Terroir Marocain", "Paiement Sécurisé"],
    highlights: ["Produits artisanaux & bio", "Catalogue en ligne ergonomique", "Livraison partout au Maroc"],
  },
  {
    id: "tashil-landing",
    title: "Tashil - Calcul & Analyse de Profits E-Commerce",
    type: "App Mobile & Analytics",
    category: "landing",
    description: "Calculez automatiquement vos profits, suivez vos retours, analysez vos pertes et prenez des décisions éclairées — le tout depuis votre smartphone.",
    siteUrl: "https://tashil-one.vercel.app/",
    displayUrl: "tashil-one.vercel.app",
    thumbnail: tashildashboard,
    tags: ["App Mobile", "Calcul de Profits", "Suivi des Retours", "Analyse des Pertes"],
    highlights: ["Calcul automatique des profits", "Suivi précis des retours & pertes", "Accessible 100% sur Smartphone"],
  },

  // --- PROJETS AUTRES DOMAINES (Gardés en réserve, à décommenter si besoin) ---
  // {
  //   id: "bijouterie-elegance",
  //   title: "Bijouterie Élégance",
  //   type: "Production Audiovisuelle",
  //   category: "video",
  //   description: "Spot publicitaire et shooting photo pour mettre en valeur une collection de bijoux exclusifs.",
  //   thumbnail: "https://images.unsplash.com/photo-1515562141589-67f0d56c8888?w=600&h=400&fit=crop",
  //   tags: ["Branding", "Vidéo HD", "Shooting Photo"],
  // },
  // {
  //   id: "restaurant-tanger",
  //   title: "Restaurant Tanger",
  //   type: "Capsule Vidéo",
  //   category: "video",
  //   description: "Capsule vidéo culinaire pour une expérience gastronomique unique au cœur de Tanger.",
  //   thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  //   tags: ["Marketing", "Production Vidéo"],
  // },
  // {
  //   id: "startup-tech",
  //   title: "Startup Tech",
  //   type: "Motion Design",
  //   category: "video",
  //   description: "Vidéo corporate et motion design pour présenter une solution technologique innovante.",
  //   thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
  //   tags: ["Motion Design", "Corporate"],
  // },
  // {
  //   id: "marque-de-mode",
  //   title: "Marque de Mode",
  //   type: "Campagne Lifestyle",
  //   category: "branding",
  //   description: "Campagne vidéo lifestyle pour le lancement d'une nouvelle collection streetwear.",
  //   thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  //   tags: ["Branding", "Streetwear", "Lifestyle"],
  // },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [previewProject, setPreviewProject] = useState(null);
  const [deviceMode, setDeviceMode] = useState("desktop"); // 'desktop' ou 'mobile'

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Développement Web</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 tracking-tight">
            Nos <span className="gradient-text">réalisations digitales</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Découvrez nos créations sur-mesure : sites e-commerce, vitrines dynamiques et landing pages haute performance.
          </p>
        </motion.div>

        {/* Filtres sous-catégories Web */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
        >
          {WEB_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border-transparent scale-105"
                    : "bg-card/80 text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40 hover:bg-card"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grille de maquettes de projets */}
        <div className="grid lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Mockup de Fenêtre Navigateur Web */}
              <div className="bg-muted/80 border-b border-border px-4 py-3 flex items-center justify-between gap-4">
                {/* Boutons de fenêtre Mac */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>

                {/* Barre d'adresse URL */}
                <div className="flex-1 max-w-xs md:max-w-md bg-background/80 px-3 py-1 rounded-md border border-border/50 text-xs text-muted-foreground flex items-center gap-2 truncate shadow-inner">
                  <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span className="truncate select-none font-mono text-[11px] text-foreground/80">
                    https://{project.displayUrl}
                  </span>
                </div>

                {/* Badge Type de projet */}
                <span className="hidden sm:inline-flex text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                  {project.type}
                </span>
              </div>

              {/* Aperçu Visuel / Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop";
                  }}
                />
                
                {/* Overlay d'actions fluides au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                  <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={() => setPreviewProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02]"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Aperçu Interactif</span>
                    </button>
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-card border border-border text-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-secondary transition-all hover:scale-[1.02]"
                    >
                      <span>Visiter le site</span>
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contenu et Détails */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      title="Ouvrir le site web"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Points clés */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags de compétences / technologies */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal d'Aperçu Interactif en Direct */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col w-full h-[90vh] transition-all duration-500 ${
                deviceMode === "mobile" ? "max-w-sm" : "max-w-6xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du navigateur Modal */}
              <div className="bg-muted/90 px-4 py-3 border-b border-border flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  </div>
                  <span className="text-xs font-semibold text-foreground truncate max-w-[150px] sm:max-w-xs">
                    {previewProject.title}
                  </span>
                </div>

                {/* Switcher Desktop / Mobile */}
                <div className="flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      deviceMode === "desktop"
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      deviceMode === "mobile"
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                  </button>
                </div>

                {/* Actions Fermer / Ouvrir dans un onglet */}
                <div className="flex items-center gap-2">
                  <a
                    href={previewProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    title="Ouvrir dans un nouvel onglet"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setPreviewProject(null)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    title="Fermer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe de prévisualisation en direct */}
              <div className="flex-1 bg-background relative overflow-hidden">
                <iframe
                  src={previewProject.siteUrl}
                  title={previewProject.title}
                  className="w-full h-full border-none"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
