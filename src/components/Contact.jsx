import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle2, ArrowLeft, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      toast.error("Veuillez saisir un numéro de téléphone valide à 10 chiffres.");
      return;
    }

    if (!formData.service) {
      toast.error("Veuillez sélectionner le service qui vous intéresse.");
      return;
    }

    setIsLoading(true);

    try {
      const messageComplet = `
Nouveau message reçu depuis le site Code Trend :

Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${phoneDigits}
Service demandé : ${formData.service}

Message :
${formData.message}
      `.trim();

      const formBody = new FormData();
      formBody.append("message", messageComplet);
      formBody.append("_replyto", formData.email);
      formBody.append("_subject", `Nouvelle demande de devis — ${formData.service} | Code Trend`);
      formBody.append("_captcha", "false");
      formBody.append("_template", "box");

      const response = await fetch("https://formsubmit.co/ajax/codetrend@outlook.fr", {
        method: "POST",
        body: formBody,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Prêt à <span className="gradient-text">créer ensemble</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contactez-nous pour discuter de votre projet de création de contenu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Adresse</p>
                <p className="text-sm text-muted-foreground">N°6 3ème étage bureau N°5, Quartier Lalla Chafia, Tanger 90000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Téléphone</p>
                <p className="text-sm text-muted-foreground">+212 5393-73710</p>
                <p className="text-xs text-muted-foreground mt-1">Lun – Sam : 09:00 – 19:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-muted-foreground">codetrend@outlook.fr</p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire OU Message de remerciement */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!submitted ? (
                /* Formulaire */
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nom Complet *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Votre nom"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="votre@email.com"
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="0600000000"
                      maxLength={10}
                      inputMode="numeric"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service souhaité *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Paid Advertising Management">Paid Advertising Management</option>
                      <option value="Digital Content Creation">Digital Content Creation</option>
                      <option value="Branding & Positioning">Branding & Positioning</option>
                      <option value="SEO & Visibility">SEO &amp; Visibility</option>
                      <option value="Marketing Consulting & Growth Strategy">Marketing Consulting & Growth Strategy</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                      maxLength={1000}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Message de remerciement */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center h-full text-center py-12 px-8 rounded-2xl bg-card border border-primary/20 shadow-xl shadow-primary/5"
                >
                  {/* Icône animée */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 14, stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Titre */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                      <Sparkles className="w-3 h-3" />
                      Message Reçu !
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      Merci, <span className="gradient-text">{formData.name.split(" ")[0]}</span> ! 🎉
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-sm mx-auto mb-2">
                      Votre message concernant <span className="text-foreground font-medium">"{formData.service}"</span> a bien été reçu par notre équipe.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Nous vous répondrons dans les <span className="text-primary font-semibold">24 heures</span> sur <span className="text-primary font-semibold">{formData.email}</span>.
                    </p>
                  </motion.div>

                  {/* Bouton retour */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Envoyer un autre message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
