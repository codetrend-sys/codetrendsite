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
  TrendingUp,
  BarChart3,
  Zap,
  Globe,
  ShoppingCart,
  Layout,
  Gauge,
  Film,
  Tv,
  Smartphone,
  Clapperboard,
  Sparkles,
  Layers,
  Sliders,
  Palette,
  Compass,
  LineChart,
  FileText,
  Users,
  Award,
} from "lucide-react";

import webImg from "@/assets/web.jpg";
import brandImg from "@/assets/brand.jpg";
import socialImg from "@/assets/social.png";
import seoImg from "@/images/seo.jpg";

export const servicesData = {
  // 1. Digital Marketing
  "agence-marketing-digital-tanger": {
    slug: "agence-marketing-digital-tanger",
    icon: Megaphone,
    title: "Agence Marketing Digital à Tanger",
    heroHighlight: "Marketing Digital & Acquisition",
    heroTitle: "L'Agence de Marketing Digital qui génère des clients qualifiés à Tanger.",
    heroSubtitle:
      "Fini les budgets publicitaires dépensés sans retombées. Nous concevons et optimisons des campagnes publicitaires rentables sur Meta Ads, Google Ads et TikTok pour les entreprises marocaines.",
    heroBadge: "Acquisition B2B & E-Commerce · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Agence Marketing Digital à Tanger | Ads, SEO & Social Media - Code Trend",
    metaDescription:
      "Propulsez vos ventes avec Code Trend, l'agence de marketing digital de référence à Tanger, Maroc. Campagnes Meta Ads, Google Ads, création de contenu et stratégie ROIste.",
    stats: [
      { val: "x3.85", label: "ROAS Moyen Campagnes" },
      { val: "-42%", label: "Coût d'Acquisition Lead" },
      { val: "+500", label: "Campagnes Pilotées" },
      { val: "96%", label: "Rétention Clients" },
    ],
    pillarsTitle: "Des leviers d'acquisition hyper-rentables",
    pillarsSubtitle: "Une approche data-driven qui combine créatifs publicitaires percutants et ciblage précis.",
    pillars: [
      {
        icon: Target,
        title: "Meta Ads (Facebook & Instagram)",
        badge: "Ciblage Marocain Ultra-Précis",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
        description:
          "Création de publicités visuelles percutantes, segmentation d'audiences marocaines qualifiées et optimisation du coût par acquisition (CPA).",
      },
      {
        icon: TrendingUp,
        title: "Google Ads & Référencement Commercial (SEA)",
        badge: "Forte Intention d'Achat",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description:
          "Positionnez votre entreprise au premier rang lorsque vos futurs clients recherchent vos services sur Google à Tanger et dans tout le Maroc.",
      },
      {
        icon: Zap,
        title: "Formats Courts UGC & Vidéos Virales",
        badge: "Preuve Sociale Maximale",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
        description:
          "Production de vidéos publicitaires au format vertical (Reels, TikTok) avec des créateurs marocains pour humaniser votre marque et booster les conversions.",
      },
      {
        icon: BarChart3,
        title: "Optimisation du Taux de Conversion (CRO)",
        badge: "Reporting Hebdomadaire",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description:
          "Analyse continue du trafic, mise en place de dashboards analytiques en temps réel et tests A/B réguliers pour maximiser le retour sur investissement publicitaire.",
      },
    ],
    steps: [
      { step: "01", title: "Audit & Analyse de Marché", desc: "Étude concurrentielle au Maroc et définition de vos personas d'acheteurs." },
      { step: "02", title: "Scénarisation & Créatifs", desc: "Écriture des accroches persuasives et production des visuels et vidéos publicitaires." },
      { step: "03", title: "Lancement & A/B Testing", desc: "Déploiement des campagnes avec segmentation d'audiences et tests de multiples variantes." },
      { step: "04", title: "Scaling des Résultats", desc: "Augmentation maîtrisée des budgets sur les canaux les plus rentables pour multiplier vos ventes." },
    ],
  },

  // 2. Web Development
  "creation-site-web": {
    slug: "creation-site-web",
    icon: Code2,
    title: "Création de Sites Web & E-Commerce",
    heroHighlight: "Sites Web & E-Commerce",
    heroTitle: "Votre site web n'est pas une simple vitrine, c'est votre meilleur commercial.",
    heroSubtitle:
      "Design épuré, parcours utilisateur sans friction et optimisation SEO d'élite : nous concevons des plateformes web qui séduisent vos visiteurs et multiplient vos prises de contact.",
    heroBadge: "Développement Web & E-Commerce · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Création de Sites Web à Tanger & au Maroc | E-Commerce & Vitrine - Code Trend",
    metaDescription:
      "Conception de sites internet professionnels, modernes et optimisés SEO à Tanger (Maroc). Sites vitrines, e-commerce et applications sur-mesure.",
    stats: [
      { val: "0.4s", label: "Temps de Chargement Moyen" },
      { val: "99/100", label: "Score Google PageSpeed" },
      { val: "+120", label: "Sites Déployés" },
      { val: "100%", label: "Responsive Mobile" },
    ],
    pillarsTitle: "Des architectures modernes conçues pour convertir",
    pillarsSubtitle: "Des technologies de pointe qui allient rapidité d'affichage, sécurité et expérience utilisateur fluide.",
    pillars: [
      {
        icon: Layout,
        title: "Sites Vitrines d'Entreprise",
        badge: "Image de Marque Premium",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        description:
          "Présentez votre entreprise avec distinction. Design responsive haute fidélité, animations fluides et optimisation SEO pour surclasser vos concurrents.",
      },
      {
        icon: ShoppingCart,
        title: "Boutiques E-Commerce Performantes",
        badge: "Paiement Maroc CMI & COD",
        image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
        description:
          "Boutiques en ligne sécurisées avec intégration des passerelles de paiement marocaines (CMI, virement, Cash on Delivery) et gestion de stock simplifiée.",
      },
      {
        icon: Code2,
        title: "Applications Web & Dashboards Métiers",
        badge: "Sur-Mesure & SaaS",
        image: webImg,
        description:
          "Conception de solutions web complexes, espaces clients sécurisés et dashboards administratifs automatisant vos processus opérationnels au quotidien.",
      },
      {
        icon: Gauge,
        title: "Refonte & Optimisation SEO Technique",
        badge: "Score 95+ Garanti",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description:
          "Modernisation de sites existants, élimination du code bloquant et passage aux normes Core Web Vitals pour booster immédiatement votre positionnement Google.",
      },
    ],
    steps: [
      { step: "01", title: "Cadrage & Wireframing", desc: "Définition de l'arborescence, des parcours utilisateurs et des maquettes ergonomiques." },
      { step: "02", title: "Design UI/UX Sur-Mesure", desc: "Création d'une identité visuelle moderne adaptée à votre charte graphique et vos objectifs." },
      { step: "03", title: "Développement Front & Back", desc: "Intégration propre avec React/Next.js, responsive design et intégration des passerelles de paiement." },
      { step: "04", title: "Optimisation SEO & Lancement", desc: "Tests de performance, configuration des balises sémantiques et mise en ligne sécurisée." },
    ],
  },

  // 3. Video Production
  "production-audiovisuelle": {
    slug: "production-audiovisuelle",
    icon: Video,
    title: "Production Audiovisuelle & Vidéo",
    heroHighlight: "Production Audiovisuelle",
    heroTitle: "Donnez à votre marque l'impact d'une production cinéma.",
    heroSubtitle:
      "De l'écriture du script jusqu'à l'étalonnage final, nous concevons des vidéos captivantes qui gravent votre marque dans les esprits et déclenchent l'action.",
    heroBadge: "Studio Cinéma & Vidéo · Tanger & Partout au Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Production Audiovisuelle & Vidéo Publicitaire au Maroc | Code Trend Tanger",
    metaDescription:
      "Studio de production vidéo de référence à Tanger, Maroc. Spots publicitaires, vidéos corporate d'entreprise, reels verticaux et captation 4K professionnelle.",
    stats: [
      { val: "4K/6K", label: "Résolution Cinéma HDR" },
      { val: "+300", label: "Vidéos Réalisées" },
      { val: "100%", label: "Équipement Pro Interne" },
      { val: "7+ Ans", label: "Expérience Régie & Plateau" },
    ],
    pillarsTitle: "Chaque histoire mérite une réalisation unique",
    pillarsSubtitle: "Des formats adaptés aux codes de chaque écran pour maximiser la mémorisation de votre marque.",
    pillars: [
      {
        icon: Tv,
        title: "Spots Publicitaires TV & Digital",
        badge: "Format 16:9 Broadcast",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
        description:
          "Création de publicités mémorables à fort pouvoir émotionnel : scénario captivant, casting comédiens, direction artistique cinéma et sound design immersif.",
      },
      {
        icon: Clapperboard,
        title: "Films Corporate & Vidéos d'Entreprise",
        badge: "Valorisation de marque",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        description:
          "Mettez en valeur votre savoir-faire industriel, vos infrastructures (usines, hôtels, showrooms) et vos équipes avec une esthétique documentaire moderne et prestigieuse.",
      },
      {
        icon: Smartphone,
        title: "Formats Courts Viraux (Reels & TikTok)",
        badge: "Vertical 9:16",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        description:
          "Formats courts ultra-rythmés conçus pour accrocher l'attention dès les 3 premières secondes, susciter l'engagement et démultiplier la viralité sur Instagram et TikTok.",
      },
      {
        icon: Camera,
        title: "Shooting Photo Packshot & Portraits",
        badge: "Haute Résolution",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
        description:
          "Séances photographiques professionnelles en studio ou in-situ à Tanger : packshot produits e-commerce, menus gastronomiques et portraits de dirigeants.",
      },
    ],
    steps: [
      { step: "01", title: "Script & Storyboard", desc: "Idée forte, écriture du script voix-off, découpage technique et planning de tournage." },
      { step: "02", title: "Tournage Haute Définition", desc: "Captation sur plateau ou en extérieur avec éclairage cinéma et son de qualité broadcast." },
      { step: "03", title: "Montage & Étalonnage", desc: "Rythme minutieux, sound design percutant et color grading DaVinci Resolve." },
      { step: "04", title: "Livraison Multi-Formats", desc: "Exports optimisés pour chaque plateforme : formats horizontaux, verticaux et carrés." },
    ],
  },

  // 4. Social Media Management
  "social-media-management": {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management & Community Management",
    heroHighlight: "Social Media Management",
    heroTitle: "Transformez vos abonnés en ambassadeurs passionnés de votre marque.",
    heroSubtitle:
      "Animation quotidienne de vos communautés, stratégie éditoriale affûtée, modération et création de contenu régulier pour faire rayonner votre marque sur Instagram, TikTok, LinkedIn et Facebook au Maroc.",
    heroBadge: "Gestion Réseaux Sociaux · Tanger & Tout le Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Social Media Management à Tanger & Maroc | Community Management - Code Trend",
    metaDescription:
      "Développez une communauté active et engagée avec Code Trend à Tanger. Stratégie éditoriale, community management pro, modération et création de contenu social media.",
    stats: [
      { val: "+2.4M", label: "Impressions Générées / Mois" },
      { val: "+8.5%", label: "Taux d'Engagement Moyen" },
      { val: "7j/7", label: "Modération & Réactivité" },
      { val: "+80", label: "Comptes Gérés avec Succès" },
    ],
    pillarsTitle: "Une présence sociale dynamique et engageante",
    pillarsSubtitle: "Des contenus réguliers qui respectent les codes algorithmiques de chaque plateforme.",
    pillars: [
      {
        icon: Share2,
        title: "Stratégie Éditoriale & Planning de Publication",
        badge: "Cohérence de Marque",
        image: socialImg,
        description:
          "Définition des piliers de contenu, ton de voix, thématiques engageantes et calendrier de publication mensuel prévisionnel pour animer vos réseaux sans interruption.",
      },
      {
        icon: Smartphone,
        title: "Création Visuelle & Rédaction Persuasive",
        badge: "Copywriting Percutant",
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
        description:
          "Design graphique de carrousels éducatifs, stories interactives, reels verticaux et légendes soignées qui incitent naturellement aux commentaires et aux partages.",
      },
      {
        icon: Users,
        title: "Community Management & Modération Active",
        badge: "Service Client Digital",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        description:
          "Réponses rapides et chaleureuses aux messages privés et commentaires, désamorçage des critiques et fidélisation active de votre audience.",
      },
      {
        icon: LineChart,
        title: "Veille Concurrentielle & Rapports Analytiques",
        badge: "Optimisation Mensuelle",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description:
          "Suivi minutieux de l'évolution du nombre d'abonnés, des taux d'engagement et des publications les plus performantes pour ajuster la stratégie en continu.",
      },
    ],
    steps: [
      { step: "01", title: "Audit de Vos Réseaux", desc: "Analyse de vos comptes actuels, de vos concurrents au Maroc et identification des axes de progrès." },
      { step: "02", title: "Charte Éditoriale", desc: "Définition de votre ligne directrice, formats récurrents et planning de production des posts." },
      { step: "03", title: "Production & Validation", desc: "Création des visuels, validation avec votre équipe et programmation intelligente aux heures de pointe." },
      { step: "04", title: "Animation & Reporting", desc: "Interactions quotidiennes avec les abonnés et bilan analytique mensuel transparent." },
    ],
  },

  // 5. Photography & Videography (Shooting)
  "shooting-photo-video": {
    slug: "shooting-photo-video",
    icon: Camera,
    title: "Shooting Photo & Vidéographie Professionnelle",
    heroHighlight: "Shooting Photo & Vidéo",
    heroTitle: "Sublimez vos produits et vos équipes avec un œil photographique d'exception.",
    heroSubtitle:
      "Séances photos et captations vidéos en studio ou in-situ à Tanger : packshot produits e-commerce, portraits de direction, reportages industriels et culinaires haute définition pour valoriser vos supports marketing.",
    heroBadge: "Shooting Studio & Extérieur · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Shooting Photo & Vidéo Professionnel à Tanger | Studio Code Trend",
    metaDescription:
      "Séances photos et vidéos professionnelles à Tanger et au Maroc. Packshot e-commerce, portraits corporate, événements d'entreprise et retouche haut de gamme.",
    stats: [
      { val: "+50 000", label: "Photos Livrées en HD" },
      { val: "100%", label: "Éclairage Studio Pro" },
      { val: "48h", label: "Délai de Livraison Échantillon" },
      { val: "+150", label: "Marques Shoppées" },
    ],
    pillarsTitle: "Des images captivantes qui déclenchent le coup de cœur",
    pillarsSubtitle: "La maîtrise parfaite de la lumière, du cadrage et de la retouche haut de gamme pour magnifier chaque détail.",
    pillars: [
      {
        icon: Camera,
        title: "Packshot Produits & E-Commerce",
        badge: "Fond Blanc & Stylisé",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        description:
          "Photos de produits sous tous les angles avec éclairage studio maîtrisé, netteté absolue et détourage professionnel pour vos boutiques en ligne et catalogues.",
      },
      {
        icon: Users,
        title: "Portraits Corporate & Équipes",
        badge: "Valorisation Humaine",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        description:
          "Portraits individuels et photos de groupe professionnelles pour vos dirigeants, collaborateurs et pages 'À Propos', renforçant la confiance de vos partenaires.",
      },
      {
        icon: Clapperboard,
        title: "Reportages In-Situ & Événementiels",
        badge: "Immersion sur le Terrain",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
        description:
          "Captation photo et vidéo de vos séminaires, inaugurations, salons professionnels et coulisses de fabrication pour alimenter votre communication institutionnelle.",
      },
      {
        icon: Sparkles,
        title: "Retouche Numérique Haute Fidélité",
        badge: "Colorimétrie & Détails",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
        description:
          "Post-traitement minutieux, correction des imperfections, harmonisation des couleurs et exports adaptés aux normes d'impression et du web.",
      },
    ],
    steps: [
      { step: "01", title: "Brief Visuel & Moodboard", desc: "Compréhension de votre univers de marque, sélection des références esthétiques et stylisme." },
      { step: "02", title: "Installation & Prise de Vue", desc: "Mise en place des éclairages studio ou tournage sur vos sites avec matériel optique haut de gamme." },
      { step: "03", title: "Sélection & Retouche Pro", desc: "Sélection collaborative des meilleurs clichés et retouche colorimétrique haute définition." },
      { step: "04", title: "Livraison HD & Web", desc: "Mise à disposition d'une galerie privée téléchargeable en haute résolution et formats web légers." },
    ],
  },

  // 6. Branding & Positioning
  "branding-positioning": {
    slug: "branding-positioning",
    icon: PenSquare,
    title: "Branding, Identité Visuelle & Positionnement",
    heroHighlight: "Branding & Positionnement",
    heroTitle: "Ne soyez pas une marque parmi d'autres, devenez une évidence.",
    heroSubtitle:
      "Création de logos emblématiques, chartes graphiques complètes, typographies, packagings et storytelling de marque pour vous démarquer durablement sur le marché marocain et international.",
    heroBadge: "Design de Marque & Stratégie · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Agence Branding & Identité Visuelle à Tanger | Code Trend Maroc",
    metaDescription:
      "Conception d'identités visuelles puissantes et mémorables à Tanger. Création de logo, charte graphique, packaging et positionnement de marque stratégique.",
    stats: [
      { val: "+200", label: "Identités de Marque Créées" },
      { val: "100%", label: "Designs Vectoriels Uniques" },
      { val: "360°", label: "Déclinaison Print & Web" },
      { val: "7+ Ans", label: "Direction Artistique" },
    ],
    pillarsTitle: "Un univers de marque fort, cohérent et intemporel",
    pillarsSubtitle: "L'harmonie parfaite entre réflexion stratégique et créativité visuelle pour marquer durablement les esprits.",
    pillars: [
      {
        icon: Palette,
        title: "Création de Logo & Système Visuel",
        badge: "Design Emblématique",
        image: brandImg,
        description:
          "Conception d'un logo mémorable, déclinaisons vectorielles pour tous supports et recherche chromatique porteuse des valeurs de votre entreprise.",
      },
      {
        icon: Compass,
        title: "Charte Graphique Complète & Guidelines",
        badge: "Guide d'Application",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        description:
          "Manuel complet régissant les règles d'usage de votre logo, typographies institutionnelles, iconographie, contrastes et grilles de mise en page.",
      },
      {
        icon: FileText,
        title: "Design de Supports Print & Packaging",
        badge: "Supports Physiques",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
        description:
          "Conception de cartes de visite, plaquettes commerciales, packagings produits, bannières pour salons et étiquettes prêtes pour l'impression haute qualité.",
      },
      {
        icon: Sparkles,
        title: "Storytelling & Positionnement de Marque",
        badge: "Discours Différenciant",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        description:
          "Définition de votre proposition de valeur unique, manifeste de marque, ton éditorial et arguments clés pour convaincre vos prospects dès le premier contact.",
      },
    ],
    steps: [
      { step: "01", title: "Immersion & Workshop", desc: "Compréhension de votre vision, de vos ambitions et de l'univers de vos concurrents au Maroc." },
      { step: "02", title: "Pistes Créatives & Moodboard", desc: "Présentation de directions artistiques contrastées et argumentation des concepts visuels." },
      { step: "03", title: "Affinage & Déclinaisons", desc: "Perfectionnement de la piste retenue, choix des polices de caractères et tests sur maquettes réelles." },
      { step: "04", title: "Livraison du Brand Book", desc: "Remise du kit complet de fichiers sources haute définition et du guide d'utilisation de la marque." },
    ],
  },

  // 7. Digital Content Creation
  "creation-contenu-digital": {
    slug: "creation-contenu-digital",
    icon: Target,
    title: "Création de Contenu Digital & Formats Viraux",
    heroHighlight: "Contenu Digital & Créativité",
    heroTitle: "Du contenu qui stoppe le scroll et fait parler de vous.",
    heroSubtitle:
      "Motion design, vidéos percutantes, infographies interactives et formats natifs conçus spécialement pour captiver les utilisateurs marocains sur TikTok, Instagram, YouTube et LinkedIn.",
    heroBadge: "Studio de Création de Contenu · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Création de Contenu Digital à Tanger | Vidéos Virales & Motion Design - Code Trend",
    metaDescription:
      "Production de contenus digitaux percutants à Tanger et au Maroc : formats courts TikTok/Reels, motion design, infographies et visuels engageants pour vos réseaux.",
    stats: [
      { val: "+1 500", label: "Contenus Produits / An" },
      { val: "< 3 sec", label: "Temps d'Accroche Visuelle" },
      { val: "+320%", label: "Portée Organique Moyenne" },
      { val: "100%", label: "Formats Natifs Optimisés" },
    ],
    pillarsTitle: "Des formats modernes conçus pour capter l'attention",
    pillarsSubtitle: "L'art de raconter votre histoire dans les formats les plus consommés aujourd'hui.",
    pillars: [
      {
        icon: Smartphone,
        title: "Vidéos Courtes TikTok & Instagram Reels",
        badge: "Formats Verticaux 9:16",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
        description:
          "Tournage et montage rythmé de reels captivants avec sous-titres dynamiques, transitions tendances et sound design immersif pour maximiser la rétention.",
      },
      {
        icon: Layers,
        title: "Motion Design & Animations Graphiques",
        badge: "Explications Claires & Ludiques",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description:
          "Animation 2D/3D pour vulgariser vos services complexes, présenter vos applications mobiles ou créer des intros vidéo mémorables aux couleurs de votre marque.",
      },
      {
        icon: Layout,
        title: "Carrousels Pédagogiques & Infographies",
        badge: "Forte Sauvegarde & Partage",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description:
          "Mise en scène visuelle d'études, de conseils d'experts et de chiffres clés sous forme de carrousels soignés qui incitent à l'enregistrement et aux partages.",
      },
      {
        icon: Sparkles,
        title: "Snack Content & Stories Interactives",
        badge: "Engagement Quotidien",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        description:
          "Création de sondages, quiz, stickers et formats éphémères pour entretenir une proximité complice et quotidienne avec vos abonnés sur les réseaux sociaux.",
      },
    ],
    steps: [
      { step: "01", title: "Veille des Tendances", desc: "Analyse des formats et musiques qui buzzent actuellement au Maroc et dans votre secteur." },
      { step: "02", title: "Scripting & Storyboard", desc: "Écriture d'accroches percutantes ('hooks') garantissant un arrêt immédiat du défilement." },
      { step: "03", title: "Tournage & Motion Design", desc: "Réalisation technique soignée, sous-titrage dynamique et habillage sonore sur-mesure." },
      { step: "04", title: "Diffusion & Analyse", desc: "Mise en ligne aux horaires d'engagement maximum et observation de la viralité générée." },
    ],
  },

  // 8. SEO & Visibility
  "seo-visibilite": {
    slug: "seo-visibilite",
    icon: Search,
    title: "SEO & Référencement Naturel au Maroc",
    heroHighlight: "SEO & Visibilité Google",
    heroTitle: "Faites de Google votre première source de prospects qualifiés.",
    heroSubtitle:
      "Audit technique, optimisation sémantique, SEO Local à Tanger et stratégie de netlinking au Maroc pour positionner durablement votre site en tête des résultats de recherche Google et des moteurs IA.",
    heroBadge: "Référencement Naturel & SEO Local · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Agence SEO à Tanger & Maroc | Référencement Naturel Google - Code Trend",
    metaDescription:
      "Positionnez votre site sur la 1ère page de Google avec l'agence SEO Code Trend à Tanger. Audit technique, SEO local Tanger, mots-clés commerciaux et netlinking Maroc.",
    stats: [
      { val: "#1", label: "Objectif Top Position Google" },
      { val: "+300%", label: "Trafic Organique Qualifié" },
      { val: "100%", label: "Techniques White Hat Pérennes" },
      { val: "GEO Ready", label: "Optimisé Moteurs IA" },
    ],
    pillarsTitle: "Une méthode éprouvée pour dominer les résultats de recherche",
    pillarsSubtitle: "Une stratégie complète alliant conformité technique, autorité sémantique et popularité locale.",
    pillars: [
      {
        icon: Gauge,
        title: "Audit Technique SEO & Core Web Vitals",
        badge: "Santé Technique 100%",
        image: seoImg,
        description:
          "Correction des erreurs d'indexation, optimisation de la vitesse de chargement sur mobile, architecture d'URL propre et sécurisation HTTPS.",
      },
      {
        icon: Search,
        title: "Recherche de Mots-Clés Commerciaux",
        badge: "Intention d'Achat Maroc",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description:
          "Identification des requêtes réellement tapées par vos prospects au Maroc et structuration de pages d'atterrissage optimisées pour chaque intention.",
      },
      {
        icon: Globe,
        title: "SEO Local à Tanger & Google Maps",
        badge: "Google Business Profile",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        description:
          "Optimisation de votre fiche d'établissement Google Business, alignement strict du NAP (Nom, Adresse, Téléphone) et citations locales pour capter Tanger.",
      },
      {
        icon: Zap,
        title: "GEO (Generative Engine Optimization)",
        badge: "ChatGPT, Gemini & Perplexity",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description:
          "Structuration de vos données Schema.org et intégration du fichier llms.txt pour que les moteurs IA citent votre entreprise comme la référence absolue.",
      },
    ],
    steps: [
      { step: "01", title: "Audit SEO Exhaustif", desc: "Diagnostic technique de votre site, analyse sémantique et cartographie des concurrents." },
      { step: "02", title: "Optimisation On-Page", desc: "Réécriture des balises Title, Meta descriptions, balises Hn et enrichissement des contenus textuels." },
      { step: "03", title: "Déploiement SEO Local", desc: "Configuration de la fiche Google Maps et inscription sur les annuaires professionnels au Maroc." },
      { step: "04", title: "Suivi & Maintien des Positions", desc: "Monitoring hebdomadaire sur Google Search Console et rapports de positionnement mensuels." },
    ],
  },

  // 9. Marketing Consulting & Growth Strategy
  "consulting-growth-strategy": {
    slug: "consulting-growth-strategy",
    icon: GraduationCap,
    title: "Conseil en Stratégie Marketing & Croissance",
    heroHighlight: "Conseil & Stratégie de Croissance",
    heroTitle: "Bâtissez un plan d'action infaillible pour débloquer votre plein potentiel.",
    heroSubtitle:
      "Accompagnement stratégique sur-mesure pour dirigeants, directeurs marketing et fondateurs de startups au Maroc : diagnostic de rentabilité, structuration de l'offre et feuille de route d'acquisition à 360°.",
    heroBadge: "Consulting Stratégique & Growth · Tanger & Maroc",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    metaTitle: "Conseil Marketing & Stratégie de Croissance à Tanger | Code Trend",
    metaDescription:
      "Accompagnement stratégique et consulting marketing à Tanger et au Maroc. Élaboration de feuilles de route business, scaling d'entreprise et optimisation de rentabilité.",
    stats: [
      { val: "+60", label: "Dirigeants Accompagnés" },
      { val: "x2.5", label: "Croissance Moyenne Annuelle" },
      { val: "360°", label: "Vision Stratégique Complète" },
      { val: "Sur-Mesure", label: "Accompagnement Dédié" },
    ],
    pillarsTitle: "Une vision stratégique claire pour accélérer votre développement",
    pillarsSubtitle: "Des recommandations actionnables pour aligner vos investissements marketing avec vos objectifs financiers.",
    pillars: [
      {
        icon: Compass,
        title: "Diagnostic Marketing & Analyse de Rentabilité",
        badge: "Bilan Complet",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        description:
          "Audit sans concession de vos canaux actuels, identification des fuites de budget et analyse de la valeur vie client (LTV) versus coût d'acquisition.",
      },
      {
        icon: Target,
        title: "Repositionnement & Packaging des Offres",
        badge: "Valeur Perçue Élevée",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
        description:
          "Restructuration de votre gamme de produits ou services pour créer des offres irrésistibles qui maximisent votre marge et facilitent la signature commerciale.",
      },
      {
        icon: LineChart,
        title: "Feuille de Route d'Acquisition Multicanale",
        badge: "Plan d'Action Chiffré",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description:
          "Planification précise des budgets, des canaux (Inbound, Outbound, Paid Ads) et des indicateurs de performance clés (KPIs) pour les 6 à 12 prochains mois.",
      },
      {
        icon: Award,
        title: "Mentoring & Montée en Compétences des Équipes",
        badge: "Accompagnement Continu",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        description:
          "Sessions de coaching stratégique avec vos équipes internes pour leur transmettre les meilleures pratiques et garantir l'exécution rigoureuse de la feuille de route.",
      },
    ],
    steps: [
      { step: "01", title: "Entretien d'Orientation", desc: "Échange approfondi avec la direction sur vos ambitions, vos freins actuels et vos objectifs chiffrés." },
      { step: "02", title: "Analyse des Données", desc: "Étude de vos métriques de vente, retours clients et benchmark concurrentiel au Maroc." },
      { step: "03", title: "Présentation du Plan Stratégique", desc: "Restitution d'une feuille de route claire avec calendrier, budgets prévisionnels et priorités d'action." },
      { step: "04", title: "Suivi de Mise en Œuvre", desc: "Points d'étape réguliers pour mesurer l'avancement, ajuster les leviers et sécuriser l'atteinte des résultats." },
    ],
  },
};
