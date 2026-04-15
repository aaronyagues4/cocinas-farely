
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { Button } from '@/components/ui/button';

function TestimoniosPage() {
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
    {
      name: 'Javier Moreno',
      rating: 4.9,
      review: 'Desde el primer contacto hasta la entrega final, todo fue perfecto. El diseño 3D nos ayudó mucho a visualizar el resultado. Profesionales de verdad.',
      initials: 'JM'
    },
    {
      name: 'Lucía Martín',
      rating: 4.6,
      review: 'Reformaron nuestra cocina y dos baños. Cumplieron los plazos prometidos y el resultado es espectacular. La calidad de los materiales es excelente.',
      initials: 'LM'
    },
    {
      name: 'Roberto García',
      rating: 4.8,
      review: 'El vestidor que nos hicieron es una maravilla. Aprovecharon un espacio complicado de forma brillante. Muy contentos con el trabajo realizado.',
      initials: 'RG'
    },
    {
      name: 'Ana Belén Torres',
      rating: 4.9,
      review: 'Cocina moderna y funcional, justo lo que queríamos. El equipo de instalación fue muy cuidadoso y limpio. Recomendamos Cocinas Farely al 100%.',
      initials: 'AT'
    },
    {
      name: 'Francisco Jiménez',
      rating: 4.7,
      review: 'Nos asesoraron muy bien en la elección de materiales y acabados. El resultado final es mejor de lo que imaginábamos. Servicio impecable.',
      initials: 'FJ'
    },
    {
      name: 'María José Ruiz',
      rating: 4.8,
      review: 'Reforma integral del baño principal. Trabajo limpio, rápido y de calidad. Los acabados son perfectos y el diseño muy acertado.',
      initials: 'MR'
    },
    {
      name: 'David López',
      rating: 4.9,
      review: 'Armarios empotrados en tres habitaciones. Diseño personalizado que se adapta perfectamente a nuestras necesidades. Muy profesionales.',
      initials: 'DL'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Testimonios - Opiniones de Clientes | Cocinas Farely</title>
        <meta name="description" content="Lee las opiniones y testimonios de nuestros clientes satisfechos en la Vega Baja del Segura. Descubre por qué confían en Cocinas Farely para sus proyectos de reforma." />
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
              <h2 className="section-title">Lo que dicen quienes ya confían en nosotros</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Su opinión es nuestra mejor carta de presentación
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-spacing-sm bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-5xl md:text-6xl font-bold mb-2">847</p>
                <p className="text-xl text-primary-foreground/90">Proyectos completados</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-5xl md:text-6xl font-bold mb-2">4.8</p>
                <p className="text-xl text-primary-foreground/90">Valoración media</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-5xl md:text-6xl font-bold mb-2">97%</p>
                <p className="text-xl text-primary-foreground/90">Clientes satisfechos</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                  delay={index * 0.05}
                />
              ))}
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
                <a
                  href="https://www.google.com/search?q=Cocinas+Farely+rese%C3%B1as"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-xl transition-all duration-200 active:scale-[0.98] gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Ver opiniones en Google
                  </Button>
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

export default TestimoniosPage;
