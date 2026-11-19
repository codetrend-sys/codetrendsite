import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIBotAdvanced from "@/components/AIBotAdvanced";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutUs />
      <About />
      <Projects />
      <Partners />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <AIBotAdvanced />
    </div>
  );
};

export default Index;
