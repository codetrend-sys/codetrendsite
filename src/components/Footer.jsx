import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary/10 dark:bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Code Trend" className="h-10" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agence de création de contenu et marketing digital basée à Tanger. Nous accompagnons les marques
              marocaines et internationales dans leurs projets vidéos, web et social media.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Réseaux sociaux
            </h3>
            <p className="text-sm text-muted-foreground">
              Suivez Code Trend pour découvrir nos dernières réalisations et coulisses de tournage.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  N°6 3ème étage bureau N°5,
                  <br />
                  Quartier Lalla Chafia, Tanger 90000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+212539373710" className="hover:text-primary transition-colors">
                  +212 5393-73710
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:codetrend@outlook.fr" className="hover:text-primary transition-colors">
                  codetrend@outlook.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Carte Google Maps */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Nous trouver
            </h3>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12948.096781909646!2d-5.838485444580129!3d35.774782000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c79431a2f9729%3A0xf1ec0f615c940f02!2sCode%20Trend!5e0!3m2!1sen!2sma!4v1770818424200!5m2!1sen!2sma"
               className="h-40 w-full"
               title="Localisation Code Trend"
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {year} Code Trend. Tous droits réservés.</p>
          <p className="text-[11px]">
            Création de contenu · Production vidéo · Marketing digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
