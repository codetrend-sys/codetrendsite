"use client";

import { useState } from "react";

const initialBotMessage = {
  id: 1,
  text:
    "Bonjour ! Je suis l'assistant IA de Code Trend 🚀\n\n" +
    "Je peux vous informer sur nos services et tarifs, répondre à vos questions et vous aider à choisir la solution adaptée à vos besoins.\n\n" +
    "Comment puis-je vous aider aujourd'hui ?",
  isBot: true,
};

// Base de connaissances (version simplifiée par type de question)
const knowledgeBase = {
  services: {
    keywords: [
      "service",
      "services",
      "développement",
      "web",
      "marketing",
      "digital",
      "seo",
      "design",
      "photographie",
      "audiovisuel",
      "réseaux sociaux",
      "site",
      "application",
      "logo",
      "vidéo",
    ],
    response:
      "🚀 **Nos Services Principaux :**\n\n" +
      "**💻 Développement Web**\n• Sites web vitrines (999/2999 MAD)\n• E-commerce (3000/8000 MAD)\n• Applications web personnalisées\n• Maintenance et optimisation\n\n" +
      "**📱 Marketing Digital**\n• Community Management (1500/6000 MAD)\n• Gestion de publicités (500/5000 MAD)\n• SEO (1700/3800 MAD)\n• Stratégie digitale\n\n" +
      "**🎨 Design & Création**\n• Branding complet (700/3900 MAD)\n• Motion Design (1000/3500 MAD)\n• Supports marketing\n• Photographie professionnelle\n\n" +
      "**🎬 Création Vidéo**\n• Vidéo courte (2000/12000 MAD)\n• Spot publicitaire (3000/18000 MAD)\n• Contenu audiovisuel\n\n" +
      "Quel service vous intéresse le plus ?",
  },
  pricing: {
    keywords: ["prix", "tarif", "coût", "budget", "devis", "estimation", "combien", "cher", "gratuit"],
    response:
      "💰 **Nos Tarifs EXACTS selon votre devis :**\n\n" +
      "**💻 Sites Web :**\n• Site Vitrine : 999 / 2999 MAD\n• E-commerce : 3000 / 8000 MAD\n\n" +
      "**📱 Marketing Digital :**\n• Community Management : 1500 / 6000 MAD\n• Gestion Publicités : 500 / 5000 MAD\n• SEO : 1700 / 3800 MAD\n\n" +
      "**🎨 Design & Création :**\n• Branding : 700 / 3900 MAD\n• Motion Design : 1000 / 3500 MAD\n\n" +
      "**🎬 Vidéo :**\n• Vidéo courte : 2000 / 12000 MAD\n• Spot publicitaire : 3000 / 18000 MAD\n\n" +
      "**💡 Devis Gratuit !**\nNous proposons une consultation gratuite pour évaluer votre projet et vous donner un devis personnalisé.\n\n" +
      "Voulez-vous un devis gratuit ?",
  },
  contact: {
    keywords: ["contact", "téléphone", "email", "adresse", "localisation", "tanger", "maroc", "où", "comment", "joindre"],
    response:
      "📍 **Nos Coordonnées :**\n\n" +
      "**🏢 Adresse :**\nN°6 3ème étage bureau N° 5\nQuartier lalla chafia rue A\nTanger 90000, Maroc\n\n" +
      "**📞 Téléphone :**\n+212 6 60 36 31 48\n\n" +
      "**📧 Email :**\ncontact@thecodetrend.com\n\n" +
      "**⏰ Horaires :**\nLundi - Samedi : 09:00 - 19:00\n\n" +
      "**🌍 Zone de service :**\nTout le Maroc et international\n\n" +
      "Nous sommes basés à Tanger mais servons partout !",
  },
  portfolio: {
    keywords: ["portfolio", "projets", "réalisations", "exemples", "travaux", "créations", "voir", "montrer", "démonstration"],
    response:
      "🎯 **Nos Réalisations :**\n\n" +
      "**💻 Sites Web :**\n• Boutiques en ligne\n• Sites d'entreprises\n• Portails d'information\n• Applications web\n\n" +
      "**🎨 Design :**\n• Identités visuelles\n• Supports marketing\n• Logos et chartes graphiques\n\n" +
      "**📱 Marketing :**\n• Campagnes publicitaires\n• Gestion des réseaux sociaux\n• Stratégies digitales\n\n" +
      "**📸 Créations :**\n• Photographie produit\n• Vidéos promotionnelles\n• Contenu audiovisuel\n\n" +
      "Voulez-vous voir des exemples spécifiques ?",
  },
  technology: {
    keywords: ["technologie", "stack", "framework", "langage", "outil", "moderne", "technique", "programmation", "code"],
    response:
      "🛠️ **Nos Technologies :**\n\n" +
      "**💻 Frontend :**\n• React.js / Next.js\n• Vue.js\n• HTML5 / CSS3 / JavaScript\n• Responsive Design\n\n" +
      "**🔧 Backend :**\n• Node.js / Express\n• Python / Django\n• PHP / Laravel\n• Bases de données SQL/NoSQL\n\n" +
      "**📱 Mobile :**\n• React Native\n• Applications hybrides\n• PWA (Progressive Web Apps)\n\n" +
      "**🎨 Design :**\n• Figma / Adobe XD\n• Photoshop / Illustrator\n• Canva Pro\n\n" +
      "**📊 Analytics :**\n• Google Analytics\n• Facebook Pixel\n• Outils de suivi\n\n" +
      "Quelle technologie vous intéresse ?",
  },
  timeline: {
    keywords: [
      "délai",
      "délais",
      "temps",
      "durée",
      "planning",
      "échéance",
      "rapidement",
      "quand",
      "combien de temps",
      "calendrier",
    ],
    response:
      "⏰ **Délais de Réalisation :**\n\n" +
      "**⚡ Projets Rapides :**\n• Branding : 1-2 semaines\n• Motion Design : 1-2 semaines\n• Vidéo courte : 1-3 semaines\n\n" +
      "**🚀 Projets Standards :**\n• Site vitrine : 2-4 semaines\n• E-commerce : 4-8 semaines\n• Community Management : Dès la signature\n\n" +
      "**🎯 Projets Complexes :**\n• SEO : Premiers résultats en 3-6 mois\n• Spot publicitaire : 2-4 semaines\n• Application web : 6-12 semaines\n\n" +
      "**💡 Facteurs influençant les délais :**\n• Complexité du projet\n• Révisions demandées\n• Disponibilité des ressources\n\n" +
      "Nous respectons toujours les échéances convenues !",
  },
  experience: {
    keywords: ["expérience", "années", "expertise", "compétence", "qualification", "références", "clients", "satisfaits"],
    response:
      "🏆 **Notre Expertise :**\n\n" +
      "**📅 Expérience :**\n• Plus de 5 ans dans le digital\n• Équipe de 8 experts\n• Plus de 100 projets réalisés\n\n" +
      "**🌟 Références :**\n• 95% de clients satisfaits\n• Plus de 50 entreprises accompagnées\n• Secteurs variés : commerce, services, industrie\n\n" +
      "**💪 Nos Forces :**\n• Expertise technique avancée\n• Créativité et innovation\n• Suivi client personnalisé\n• Support post-livraison\n\n" +
      "**🎯 Secteurs d'activité :**\n• E-commerce et retail\n• Services professionnels\n• Industrie et B2B\n• Associations et ONG\n\n" +
      "Voulez-vous en savoir plus sur nos références ?",
  },
  process: {
    keywords: ["processus", "méthode", "démarche", "comment", "procédure", "étapes", "travail", "collaboration"],
    response:
      "🔄 **Notre Méthode de Travail :**\n\n" +
      "**1️⃣ Découverte & Analyse**\n• Consultation gratuite\n• Analyse de vos besoins\n• Étude de la concurrence\n• Recommandations stratégiques\n\n" +
      "**2️⃣ Conception & Planning**\n• Brief créatif détaillé\n• Maquettes et prototypes\n• Planning de réalisation\n• Validation de chaque étape\n\n" +
      "**3️⃣ Développement**\n• Création selon vos spécifications\n• Tests et optimisations\n• Intégration de vos retours\n• Formation à l'utilisation\n\n" +
      "**4️⃣ Livraison & Suivi**\n• Mise en ligne\n• Formation complète\n• Support post-livraison\n• Maintenance continue\n\n" +
      "**💡 Transparence totale** à chaque étape !",
  },
};

const getIntelligentResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  for (const { keywords, response } of Object.values(knowledgeBase)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return response;
    }
  }

  if (lowerMessage.includes("merci") || lowerMessage.includes("thanks")) {
    return (
      "De rien ! 😊 N'hésitez pas si vous avez d'autres questions sur nos services ou si vous souhaitez un devis personnalisé.\n\n" +
      "Nous sommes là pour vous accompagner dans tous vos projets digitaux ! 🚀"
    );
  }

  if (lowerMessage.includes("au revoir") || lowerMessage.includes("bye")) {
    return (
      "Au revoir ! 👋\n\nMerci de votre intérêt pour Code Trend. N'hésitez pas à revenir si vous avez d'autres questions !\n\n" +
      "À bientôt ! 🚀"
    );
  }

  return (
    "Merci pour votre question ! 🤔\n\n" +
    "Je peux vous aider avec :\n\n" +
    "• 📋 **Nos services et tarifs** (Community Management, SEO, sites web, vidéo...)\n" +
    "• 💰 **Demande de devis** personnalisé\n" +
    "• 📍 **Nos coordonnées** et localisation\n" +
    "• 🚀 **Conseils** pour vos projets digitaux\n\n" +
    "Pouvez-vous reformuler votre question ou me dire quel service vous intéresse ?"
  );
};

const AIBotAdvanced = () => {
  const [messages, setMessages] = useState([initialBotMessage]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getIntelligentResponse(text);
      const newBotMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 900);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText("");
    sendMessage(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          type="button"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary via-accent to-primary/80 text-primary-foreground shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/40"
          aria-label="Ouvrir le chat IA"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl" />
          <svg
            className="relative z-10 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.3}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="mb-4 flex h-96 w-80 flex-col overflow-hidden rounded-3xl border border-border bg-card/95 shadow-[0_22px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="relative flex items-center justify-between overflow-hidden border-b border-border bg-gradient-to-r from-primary via-accent to-primary/80 px-4 py-3 text-primary-foreground">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 blur-xl opacity-70" />
            <div className="relative z-10">
              <h3 className="text-base font-semibold">Code Trend Bot</h3>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>En ligne</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              type="button"
              className="relative z-10 rounded-lg p-1.5 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10"
              aria-label="Fermer le chat"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-background/40 via-background/60 to-background/80 p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs rounded-2xl px-4 py-3 text-sm shadow-lg ${
                    message.isBot
                      ? "bg-card text-foreground border border-border/80"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div className="whitespace-pre-line">{message.text}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl border border-border/80 bg-card px-3 py-2 shadow">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/80 [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:240ms]" />
                </div>
              </div>
            )}

            {/* Suggestions intégrées dans la zone de conversation */}
            {!isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs rounded-2xl px-3 py-2 text-sm shadow-lg bg-card text-foreground border border-border/80">
                  <div className="text-xs text-muted-foreground">Suggestions</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Quels sont vos services ?",
                      "Quels sont vos tarifs ?",
                      "Comment vous contacter ?",
                      "Comment se passe un projet avec vous ?",
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => {
                          sendMessage(suggestion);
                        }}
                        className="rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border bg-background/80 px-4 py-3 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1 rounded-2xl border border-border bg-card/90 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
              />
              <button
                onClick={handleSendMessage}
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                aria-label="Envoyer le message"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBotAdvanced;

