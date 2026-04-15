
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import { Button } from '@/components/ui/button';
import { client } from '@/lib/sanityClient.js';
import { Instagram, Facebook } from 'lucide-react';

const categories = ['Todos', 'Cocinas', 'Baños', 'Armarios'];

const PORTFOLIO_QUERY = `
  *[_type == "portfolioProject"] | order(order asc, _createdAt asc) {
    _id,
    title,
    category,
    description,
    image,
    order
  }
`;

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading]              = useState(true);
  const [error, setError]                  = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    client
      .fetch(PORTFOLIO_QUERY)
      .then((data) => { if (!cancelled) { setPortfolioItems(data); setLoading(false); } })
      .catch((err) => { if (!cancelled) { setError(err.message);  setLoading(false); } });
    return () => { cancelled = true; };
  }, []);

  const filteredItems = useMemo(
    () => activeFilter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter, portfolioItems]
  );

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
        <section className="py-8 bg-background sticky top-20 z-30 border-b border-border">
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

            {/* Skeleton de carga */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-2xl bg-muted animate-pulse"
                  />
                ))}
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="text-center py-20">
                <p className="text-xl text-destructive">
                  Error al cargar los proyectos. Inténtalo de nuevo más tarde.
                </p>
              </div>
            )}

            {/* Grid */}
            {!loading && !error && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item, index) => (
                    <PortfolioCard
                      key={item._id}
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
              </>
            )}
          </div>
        </section>
        {/* Social Media Banner */}
        <section className="py-10 bg-muted border-t border-border">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
            >
              <p className="text-muted-foreground text-base">
                ¿Quieres ver más proyectos? Síguenos en redes sociales para estar al día de nuestros últimos trabajos.
              </p>
              <div className="flex gap-3 shrink-0">
                <a
                  href="https://www.instagram.com/cocinasfarely/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/CocinasFarely/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default PortfolioPage;
