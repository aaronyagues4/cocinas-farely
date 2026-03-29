
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import { Button } from '@/components/ui/button';

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55',
      title: 'Cocina moderna con isla central',
      category: 'Cocinas',
      description: 'Cocina contemporánea con isla central multifuncional, acabados en blanco mate y encimera de cuarzo. Electrodomésticos integrados de última generación.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      title: 'Cocina minimalista escandinava',
      category: 'Cocinas',
      description: 'Diseño minimalista con líneas limpias, madera clara y blanco. Aprovechamiento máximo del espacio con soluciones de almacenamiento inteligentes.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      title: 'Baño principal de lujo',
      category: 'Baños',
      description: 'Baño principal con ducha de obra, mampara de cristal, mueble suspendido de doble lavabo y acabados en porcelánico de gran formato.'
    },
    {
      image: 'https://images.unsplash.com/photo-1641870538440-f88f802f84d5',
      title: 'Baño contemporáneo con bañera',
      category: 'Baños',
      description: 'Reforma integral con bañera exenta, grifería cromada de diseño, suelo radiante y revestimientos en tonos neutros.'
    },
    {
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
      title: 'Vestidor a medida',
      category: 'Armarios',
      description: 'Vestidor completo con distribución personalizada, iluminación LED integrada, cajones con guías de extracción total y zapatero extraíble.'
    },
    {
      image: 'https://images.unsplash.com/photo-1613193196083-f25f4acabf5a',
      title: 'Armario empotrado puertas correderas',
      category: 'Armarios',
      description: 'Armario empotrado de pared a pared con puertas correderas en acabado lacado blanco, interior en melamina roble y accesorios cromados.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d',
      title: 'Cocina rústica moderna',
      category: 'Cocinas',
      description: 'Fusión de estilo rústico y moderno con muebles en madera natural, encimera de granito y electrodomésticos de acero inoxidable.'
    },
    {
      image: 'https://images.unsplash.com/photo-1578854888566-a4fde9f0b0e9',
      title: 'Cocina abierta al salón',
      category: 'Cocinas',
      description: 'Cocina integrada en espacio abierto con península que funciona como barra americana. Diseño funcional y estético.'
    },
    {
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      title: 'Baño pequeño optimizado',
      category: 'Baños',
      description: 'Reforma de baño pequeño con ducha de obra, mampara fija, mueble suspendido y espejo con iluminación LED integrada.'
    },
    {
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
      title: 'Armario juvenil funcional',
      category: 'Armarios',
      description: 'Armario diseñado para habitación juvenil con zona de estudio integrada, estanterías ajustables y cajones organizadores.'
    },
    {
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87',
      title: 'Cocina clásica renovada',
      category: 'Cocinas',
      description: 'Renovación de cocina clásica con muebles en madera de cerezo, tiradores de bronce y encimera de mármol.'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
      title: 'Baño suite con vestidor',
      category: 'Baños',
      description: 'Baño en suite conectado con vestidor, ducha de lluvia, bañera de hidromasaje y acabados de alta gama.'
    },
  ];

  const categories = ['Todos', 'Cocinas', 'Baños', 'Armarios'];

  const filteredItems = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio - Nuestros Proyectos | Cocinas Farely</title>
        <meta name="description" content="Explora nuestro portfolio de proyectos realizados en la Vega Baja del Segura: cocinas, baños y armarios a medida. Inspiración y calidad en cada detalle." />
      </Helmet>

      <Header />
      <FloatingButtons />

      <div className="pt-20">
        {/* Page Header */}
        <section className="section-spacing-sm bg-muted">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Nuestro Portfolio</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre algunos de nuestros proyectos más destacados y déjate inspirar para tu próxima reforma
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-white sticky top-20 z-30 border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  className="transition-all duration-200 active:scale-[0.98]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={index}
                  {...item}
                  delay={index * 0.05}
                />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No se encontraron proyectos en esta categoría
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default PortfolioPage;
