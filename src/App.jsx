import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Les 9 Services Dédiés de Code Trend */}
          <Route path="/agence-marketing-digital-tanger" element={<ServicePage serviceSlug="agence-marketing-digital-tanger" />} />
          <Route path="/creation-site-web" element={<ServicePage serviceSlug="creation-site-web" />} />
          <Route path="/production-audiovisuelle" element={<ServicePage serviceSlug="production-audiovisuelle" />} />
          <Route path="/social-media-management" element={<ServicePage serviceSlug="social-media-management" />} />
          <Route path="/shooting-photo-video" element={<ServicePage serviceSlug="shooting-photo-video" />} />
          <Route path="/branding-positioning" element={<ServicePage serviceSlug="branding-positioning" />} />
          <Route path="/creation-contenu-digital" element={<ServicePage serviceSlug="creation-contenu-digital" />} />
          <Route path="/seo-visibilite" element={<ServicePage serviceSlug="seo-visibilite" />} />
          <Route path="/consulting-growth-strategy" element={<ServicePage serviceSlug="consulting-growth-strategy" />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
