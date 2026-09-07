import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.png";
import logo7 from "../images/logo7.png";
import logo8 from "../images/logo8.png";
import logo9 from "../images/logo9.png";
import logo10 from "../images/logo10.png";
import logo11 from "../images/logo11.png";
import logo12 from "../images/logo12.png";
import logo13 from "../images/logo13.png";
import logo14 from "../images/logo14.png";
import logo15 from "../images/logo15.png";
import logo16 from "../images/logo16.png";
import logo17 from "../images/logo17.png";
import logo18 from "../images/logo18.png";
import logo19 from "../images/logo19.png";
import logo20 from "../images/logo20.png";
const partners = [
  { name: "boijoud", logo: logo1 },
  { name: "confortano", logo: logo2 },
  { name: "education", logo: logo3},
  { name: "IKI", logo: logo4 },
  { name: "Indiana", logo: logo5 },
  { name: "Bio", logo: logo6 },
  { name: "agriproject", logo: logo7},
  { name: "megit", logo: logo8 },
  { name: "scobe", logo: logo9 },
  { name: "techcore", logo: logo10 },
  { name: "arrousarome", logo: logo11 },
  { name: "ibnkiran", logo: logo12 },
  { name: "immo", logo: logo13 },
  { name: "isstifae", logo: logo14 },
  { name: "shop", logo: logo15 },
  { name: "nabae", logo: logo16 },
  { name: "jamale", logo: logo17 },
  { name: "michu", logo: logo18 },
  { name: "reheuma", logo: logo19 },
  { name: "rl", logo: logo20 },
];

const Partners = () => {
  const [api, setApi] = useState(null);

  // Autoplay: fait défiler automatiquement toutes les 2.5 secondes
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!api) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="partners" className=" bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Partenaires</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Nos <span className="gradient-text">partenaires</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des marques et institutions qui nous font confiance pour valoriser leur image et leurs projets.
          </p>
        </motion.div>

        <Carousel
          className="relative"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4">
            {partners.map((partner) => (
              <CarouselItem
                key={partner.name}
                className="sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div
                  className="relative rounded-2xl bg-transparent border border-border/60 hover:border-primary/40 transition-all duration-300 flex items-center justify-center p-4 md:p-6"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 md:max-h-20 w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden ml-8 md:flex bg-background/80 border-border" />
          <CarouselNext className="hidden mr-8 md:flex bg-background/80 border-border" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;

