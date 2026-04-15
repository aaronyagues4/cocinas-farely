
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Sparkles, Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import { Button } from '@/components/ui/button';

function TrabajosConNosotrosPage() {
  const positions = [
    {
      title: 'Oficial de Carpintería',
      description: 'Buscamos un oficial con experiencia en fabricación y montaje de mobiliario a medida. Alguien que sepa leer un plano, que cuide los acabados y que entienda que detrás de cada mueble hay un cliente que lo va a usar cada día.',
      requirementsTitle: 'Valoramos:',
      requirements: [
        'Experiencia demostrable en mobiliario a medida',
        'Dominio de maquinaria tradicional',
        'Capacidad de interpretación de planos técnicos',
        'Atención al detalle y a los acabados'
      ]
    },
    {
      title: 'Ayudante de Carpintería',
      description: 'Si tienes formación en madera y ganas de aprender un oficio con futuro, aquí tienes sitio. Trabajarás con oficiales con años de experiencia que te van a enseñar cómo se hacen las cosas bien.',
      requirementsTitle: 'Buscamos:',
      requirements: [
        'Formación en madera y mueble o similar',
        'Ganas de aprender y mejorar cada día',
        'Responsabilidad y trabajo en equipo'
      ]
    },
    {
      title: 'Asesor Comercial',
      description: 'Buscamos a alguien que sepa escuchar al cliente, entender lo que necesita y acompañarle en el proceso de diseño. Con conocimientos técnicos suficientes para hablar de materiales y espacios, y con la cercanía que nos define.',
      requirementsTitle: 'Buscamos:',
      requirements: [
        'Experiencia en venta de mobiliario o reformas',
        'Conocimientos de diseño 3D',
        'Buenas habilidades de comunicación',
        'Orientación al cliente'
      ]
    }
  ];

  const pillars = [
    {
      icon: Briefcase,
      title: 'Tradición y Solidez',
      description: 'Forma parte de una empresa con más de 30 años de trayectoria, estabilidad demostrada y un prestigio consolidado en el sector del diseño a medida.'
    },
    {
      icon: Users,
      title: 'Ambiente Familiar',
      description: 'Creemos en las relaciones a largo plazo. Fomentamos un entorno de trabajo cercano, colaborativo y basado en el respeto mutuo.'
    },
    {
      icon: TrendingUp,
      title: 'Desarrollo Profesional',
      description: 'Apostamos por la formación continua. Te proporcionamos las herramientas y el conocimiento para que crezcas junto a nosotros.'
    },
    {
      icon: Sparkles,
      title: 'Proyectos Únicos',
      description: 'Olvídate de la monotonía. Cada día es un nuevo reto creativo trabajando con materiales premium y diseños exclusivos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trabaja con Nosotros - Cocinas Farely</title>
        <meta name="description" content="Únete al equipo de Cocinas Farely. Buscamos talento apasionado por el diseño, la carpintería y la atención al cliente. Descubre nuestras ofertas de empleo." />
      </Helmet>

      <Header />
      <FloatingButtons />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1702565699599-e1afe79342d4" 
            alt="Taller de carpintería y diseño"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container-custom text-white text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">
              Únete al equipo Farely
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              En Farely cada persona que forma parte del equipo importa de verdad. Llevamos en el sector desde 1995 y lo que nos ha mantenido aquí es el oficio bien hecho y las personas que lo hacen posible. Si buscas un lugar donde aprender, crecer y trabajar en un entorno cercano y sin complicaciones, puede que seamos lo que buscas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-spacing bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Puestos abiertos</h2>
          </motion.div>

          {/* Valores */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-primary pl-6 mb-14 max-w-3xl mx-auto"
          >
            <p className="text-lg text-foreground leading-relaxed italic">
              "Independientemente del puesto, hay tres cosas que valoramos por encima de cualquier currículum: ganas de aprender, ganas de trabajar y ser buena persona. El resto se puede enseñar."
            </p>
          </motion.blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-border/50"
              >
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{position.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {position.description}
                </p>
                
                <div className="bg-muted/50 rounded-xl p-6 mt-auto">
                  <h4 className="font-semibold text-foreground mb-3">{position.requirementsTitle}</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">¿Por qué elegir Cocinas Farely?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No solo ofrecemos un puesto de trabajo, ofrecemos una carrera profesional en un entorno que valora tu esfuerzo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted rounded-2xl p-8 text-center group hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-title">
              ¡Queremos que Crezcas con Nosotros!
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed">
              Si te identificas con nuestros valores y crees que tu perfil encaja en nuestro equipo, no dudes en enviarnos tu currículum. Estaremos encantados de valorar tu candidatura para presentes o futuras oportunidades.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Button 
                asChild
                size="lg" 
                variant="secondary"
                className="text-lg px-10 py-7 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-xl hover:shadow-2xl"
              >
                <a href="mailto:cocinasfarely@yahoo.es?subject=Candidatura%20-%20Trabaja%20con%20Nosotros">
                  <Mail className="mr-2 w-5 h-5" />
                  Enviar CV
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="text-primary-foreground/80 font-medium mt-2">
                cocinasfarely@yahoo.es
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TrabajosConNosotrosPage;
