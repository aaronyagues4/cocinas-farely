
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Search, Pencil, Lightbulb, Handshake, Gem, Trophy, HeartHandshake } from 'lucide-react';
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
              { num: 1, icon: Hammer,        title: 'Fabricación Propia',          desc: 'Fabricamos nosotros mismos cada mueble, de principio a fin. Eso nos permite cuidar cada detalle y responder por tu resultado.' },
              { num: 2, icon: Search,        title: 'Atención al Detalle',         desc: 'La precisión y el cuidado en cada paso aseguran resultados perfectos hasta en el último rincón.' },
              { num: 3, icon: Pencil,        title: 'Diseño Personalizado',        desc: 'Creamos espacios únicos que reflejan tu estilo, personalidad y forma de vida.' },
              { num: 4, icon: Handshake,     title: 'Trato cercano y compromiso',  desc: 'Te acompañamos en todo el proceso con atención personalizada, cercanía y profesionalidad.' },
              { num: 5, icon: Gem,           title: 'Materiales de Alta Calidad',  desc: 'Seleccionamos cuidadosamente los mejores materiales para ofrecerte durabilidad, belleza y resistencia.' },
              { num: 6, icon: Trophy,        title: 'Experiencia y Tradición',     desc: 'Más de 30 años de trayectoria uniendo la tradición artesanal con la tecnología y técnicas más modernas.' },
              { num: 7, icon: HeartHandshake, title: 'Estamos después',            desc: 'Una vez instalada tu cocina, seguimos aquí. Si algo no está perfecto, volvemos y lo resolvemos. Sin excusas.' },
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cada <em className="text-primary not-italic" style={{ fontStyle: 'italic' }}>proyecto</em>, distinto. Estos son algunos de los nuestros.
            </h2>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que dicen quienes ya confían en nosotros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Su opinión es nuestra mejor carta de presentación
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

          <div className="text-center mt-12 flex flex-wrap gap-4 justify-center">
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
            <a
              href="https://www.google.com/search?q=Cocinas+Farely+rese%C3%B1as"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-200 active:scale-[0.98] gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Opiniones en Google
              </Button>
            </a>
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
              Un proyecto bien hecho empieza por una buena conversación. Cuéntanoslo.
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Te escuchamos, medimos y te damos un presupuesto claro. Sin rodeos.
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
