import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import PortfolioWeddings from "./pages/PortfolioWeddings";
import PortfolioBridal from "./pages/PortfolioBridal";
import PortfolioFashion from "./pages/PortfolioFashion";
import PortfolioPortraits from "./pages/PortfolioPortraits";
import PortfolioCommercial from "./pages/PortfolioCommercial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/weddings" element={<PortfolioWeddings />} />
          <Route path="/portfolio/bridal" element={<PortfolioBridal />} />
          <Route path="/portfolio/fashion" element={<PortfolioFashion />} />
          <Route path="/portfolio/portraits" element={<PortfolioPortraits />} />
          <Route path="/portfolio/commercial" element={<PortfolioCommercial />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
