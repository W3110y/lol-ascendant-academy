import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fundamentos from "./pages/Fundamentos";
import PrimeraPartida from "./pages/fundamentos/PrimeraPartida";
import ConceptosBasicos from "./pages/fundamentos/ConceptosBasicos";
import Campeones from "./pages/Campeones";
import ChampionDetail from "./pages/ChampionDetail";
import Roles from "./pages/Roles";
import Glosario from "./pages/Glosario";
import Recursos from "./pages/Recursos";
import ConceptosIntermedios from "./pages/ConceptosIntermedios";
import ErroresComunes from "./pages/ErroresComunes";
import Simulador from "./pages/Simulador";
import MapaWards from "./pages/MapaWards";
import Vision from "./pages/conceptos-intermedios/Vision";
import ObjetivosNeutrales from "./pages/conceptos-intermedios/ObjetivosNeutrales";
import FasesPartida from "./pages/conceptos-intermedios/FasesPartida";
import Teamfights from "./pages/conceptos-intermedios/Teamfights";
import QuizCampeones from "./pages/QuizCampeones";
import NotFound from "./pages/NotFound";
import BuildCalculator from "./pages/BuildCalculator";
import ChampionComparison from "./pages/ChampionComparison";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Parches from "./pages/Parches";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fundamentos" element={<Fundamentos />} />
          <Route path="/fundamentos/primera-partida" element={<PrimeraPartida />} />
          <Route path="/fundamentos/conceptos-basicos" element={<ConceptosBasicos />} />
          <Route path="/campeones" element={<Campeones />} />
          <Route path="/campeones/:id" element={<ChampionDetail />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/quiz-campeones" element={<QuizCampeones />} />
          <Route path="/conceptos-intermedios" element={<ConceptosIntermedios />} />
          <Route path="/conceptos-intermedios/vision" element={<Vision />} />
          <Route path="/conceptos-intermedios/objetivos-neutrales" element={<ObjetivosNeutrales />} />
          <Route path="/conceptos-intermedios/fases-partida" element={<FasesPartida />} />
          <Route path="/conceptos-intermedios/teamfights" element={<Teamfights />} />
          <Route path="/errores-comunes" element={<ErroresComunes />} />
          <Route path="/herramientas/simulador" element={<Simulador />} />
          <Route path="/herramientas/ward-map" element={<MapaWards />} />
          <Route path="/herramientas/build-calculator" element={<BuildCalculator />} />
          <Route path="/herramientas/comparar-campeones" element={<ChampionComparison />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/parches" element={<Parches />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
