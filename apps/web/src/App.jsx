
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ServiciosPage from './pages/ServiciosPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import SobreNosotrosPage from './pages/SobreNosotrosPage.jsx';
import ProcesoPage from './pages/ProcesoPage.jsx';
import TestimoniosPage from './pages/TestimoniosPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import AvisoLegalPage from './pages/AvisoLegalPage.jsx';
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage.jsx';
import TrabajosConNosotrosPage from './pages/TrabajosConNosotrosPage.jsx';
import { Toaster } from '@/components/ui/sonner';
import CookieBanner from './components/CookieBanner.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/proceso" element={<ProcesoPage />} />
        <Route path="/testimonios" element={<TestimoniosPage />} />
        <Route path="/faq" element={<Navigate to="/contacto" replace />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
        <Route path="/trabaja-con-nosotros" element={<TrabajosConNosotrosPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-muted">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
      <CookieBanner />
    </Router>
  );
}

export default App;
