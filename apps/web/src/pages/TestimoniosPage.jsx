
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';

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
              <h2 className="section-title">Testimonios de Nuestros Clientes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación
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
        <section className="section-spacing bg-muted">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                ¿Quieres ser nuestro próximo cliente satisfecho?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a los cientos de clientes que ya han transformado sus hogares con nosotros
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default TestimoniosPage;
