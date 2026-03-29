
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Bath, Folders as Cabinet, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const portfolioImages = [
    { url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55', alt: 'Cocina moderna con isla central' },
    { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136', alt: 'Cocina minimalista blanca' },
    { url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba', alt: 'Baño contemporáneo con ducha' },
    { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101', alt: 'Armario empotrado a medida' },
    { url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d', alt: 'Cocina rústica moderna' },
    { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136', alt: 'Baño de lujo con bañera' },
  ];

  const testimonials = [
    {
      name: 'Carmen Rodríguez',
      rating: 4.8,
      review: 'Transformaron nuestra cocina completamente. El equipo fue profesional, puntual y el resultado superó nuestras expectativas. Muy recomendable.',
      initials: 'CR'
    },
    {
      name: 'Miguel Ángel Santos',
      rating: 4.9,
      review: 'Excelente trabajo en la reforma del baño. Atención al detalle impecable y acabados de primera calidad. Volveríamos a trabajar con ellos sin dudarlo.',
      initials: 'MS'
    },
    {
      name: 'Isabel Fernández',
      rating: 4.7,
      review: 'Los armarios a medida que nos diseñaron aprovechan cada centímetro del espacio. Diseño funcional y elegante. Muy satisfechos con el servicio.',
      initials: 'IF'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cocinas Farely - Diseño y reforma de cocinas, baños y armarios a medida</title>
        <meta name="description" content="Especialistas en diseño y reforma de cocinas, baños y armarios a medida en la Vega Baja del Segura. Transforma tu hogar con soluciones personalizadas y acabados de calidad." />
      </Helmet>

      <Header />
      <FloatingButtons />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1669211620495-00ad7993169a" 
            alt="Cocina moderna de diseño"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container-custom text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Diseño y reforma de cocinas, baños y armarios a medida
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Transforma tu hogar en la Vega Baja del Segura con soluciones personalizadas
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
                >
                  Solicita presupuesto gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+34678636106">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg px-8 py-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
                >
                  Llamar al 678 63 61 06
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - 2+1 Layout */}
      <section className="section-spacing bg-muted text-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones completas para transformar cada espacio de tu hogar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ServiceCard
              icon={ChefHat}
              title="Cocinas"
              description="Diseñamos y fabricamos cocinas a medida que combinan funcionalidad y estética. Desde cocinas modernas hasta rústicas, adaptadas a tu estilo de vida."
              link="/servicios#cocinas"
              delay={0.1}
            />
            <ServiceCard
              icon={Bath}
              title="Baños"
              description="Reformas integrales de baños con materiales de primera calidad. Creamos espacios de relax y confort adaptados a tus necesidades."
              link="/servicios#banos"
              delay={0.2}
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <ServiceCard
              icon={Cabinet}
              title="Armarios"
              description="Armarios empotrados y vestidores a medida que optimizan el espacio. Diseños personalizados con acabados de alta calidad."
              link="/servicios#armarios"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros proyectos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre algunos de nuestros trabajos más recientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="transition-all duration-200 active:scale-[0.98]"
              >
                Ver todo el portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonios">
              <Button 
                variant="outline" 
                size="lg"
                className="transition-all duration-200 active:scale-[0.98]"
              >
                Ver más testimonios
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar tu hogar?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Solicita un presupuesto sin compromiso y descubre cómo podemos hacer realidad tu proyecto
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
                >
                  Contacta con nosotros
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+34678636106">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-xl transition-all duration-200 active:scale-[0.98]"
                >
                  Llamar al 678 63 61 06
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
