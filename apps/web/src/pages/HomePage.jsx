
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Search, Pencil, Lightbulb, Handshake, Gem, Trophy } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { Button } from '@/components/ui/button';
import { client, urlFor } from '@/lib/sanityClient.js';

const HOME_GALLERY_QUERY = `
  *[_type == "portfolioProject"] | order(order asc, _createdAt asc)[0..5] {
    _id, title, image
  }
`;

function HomePage() {
  const [portfolioImages, setPortfolioImages] = useState([]);

  useEffect(() => {
    client
      .fetch(HOME_GALLERY_QUERY)
      .then(setPortfolioImages)
      .catch(() => {});
  }, []);

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
              Llevamos más de 30 años dando forma a los hogares de la Vega Baja. Cuéntanos tu idea y nosotros nos encargamos del resto.
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

      {/* Por qué elegir Farely */}
      <section className="section-spacing bg-muted text-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Por qué elegir Farely?</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, icon: Hammer,    title: 'Fabricación Propia',          desc: 'Controlamos todo el proceso, lo que nos permite garantizar acabados impecables y una calidad excepcional.' },
              { num: 2, icon: Search,    title: 'Atención al Detalle',         desc: 'La precisión y el cuidado en cada paso aseguran resultados perfectos hasta en el último rincón.' },
              { num: 3, icon: Pencil,    title: 'Diseño Personalizado',        desc: 'Creamos espacios únicos que reflejan tu estilo, personalidad y forma de vida.' },
              { num: 4, icon: Lightbulb, title: 'Innovación y Tendencias',     desc: 'Siempre a la vanguardia del diseño interior, combinamos creatividad con las últimas tendencias.' },
              { num: 5, icon: Handshake, title: 'Trato cercano y compromiso',  desc: 'Te acompañamos en todo el proceso con atención personalizada, cercanía y profesionalidad.' },
              { num: 6, icon: Gem,       title: 'Materiales de Alta Calidad',  desc: 'Seleccionamos cuidadosamente los mejores materiales para ofrecerte durabilidad, belleza y resistencia.' },
              { num: 7, icon: Trophy,    title: 'Experiencia y Tradición',     desc: 'Más de 30 años de trayectoria uniendo la tradición artesanal con la tecnología y técnicas más modernas.' },
            ].map(({ num, icon: Icon, title, desc }, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {num}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-tight">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
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
            {portfolioImages.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={
                    item.image
                      ? urlFor(item.image).width(800).height(600).fit('crop').auto('format').quality(75).url()
                      : ''
                  }
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
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
