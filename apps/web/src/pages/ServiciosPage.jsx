
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import { Button } from '@/components/ui/button';

function ServiciosPage() {
  const services = [
    {
      id: 'cocinas',
      title: 'Cocinas a medida',
      image: 'https://images.unsplash.com/photo-1578854888566-a4fde9f0b0e9',
      description: 'Diseñamos y fabricamos cocinas completamente personalizadas que se adaptan a tu espacio y estilo de vida. Cada proyecto es único y refleja la personalidad de nuestros clientes.',
      features: [
        'Diseño 3D personalizado antes de la fabricación',
        'Materiales de primera calidad: madera maciza, lacados, laminados',
        'Electrodomésticos de marcas premium integrados',
        'Iluminación LED bajo muebles y en vitrinas',
        'Encimeras de granito, cuarzo o Silestone',
        'Herrajes de cierre suave y sistemas de extracción',
        'Garantía de 5 años en todos los muebles',
        'Instalación profesional incluida'
      ]
    },
    {
      id: 'banos',
      title: 'Baños completos',
      image: 'https://images.unsplash.com/photo-1641870538440-f88f802f84d5',
      description: 'Reformas integrales de baños que combinan funcionalidad y diseño. Creamos espacios de relax adaptados a tus necesidades, desde baños principales hasta aseos de cortesía.',
      features: [
        'Reforma completa: fontanería, electricidad, alicatado',
        'Mamparas de ducha y bañeras de hidromasaje',
        'Muebles de baño a medida con lavabos integrados',
        'Grifería termostática de alta gama',
        'Suelo radiante eléctrico o por agua',
        'Iluminación LED regulable y espejos retroiluminados',
        'Sanitarios suspendidos de diseño',
        'Acabados impermeables de larga duración'
      ]
    },
    {
      id: 'armarios',
      title: 'Armarios empotrados',
      image: 'https://images.unsplash.com/photo-1613193196083-f25f4acabf5a',
      description: 'Armarios empotrados y vestidores diseñados para optimizar cada centímetro de espacio. Soluciones de almacenamiento inteligentes con acabados de alta calidad.',
      features: [
        'Diseño interior personalizado según tus necesidades',
        'Puertas correderas o abatibles con perfiles de aluminio',
        'Sistemas de iluminación interior LED con sensor',
        'Cajones con guías de extracción total',
        'Zapateros extraíbles y pantaloneros',
        'Barras cromadas y accesorios de organización',
        'Acabados en melamina, lacado o espejo',
        'Aprovechamiento máximo del espacio disponible'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Cocinas, Baños y Armarios | Cocinas Farely</title>
        <meta name="description" content="Descubre nuestros servicios de diseño y reforma de cocinas, baños y armarios a medida en la Vega Baja del Segura. Soluciones personalizadas con materiales de primera calidad." />
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
              <h2 className="section-title">Nuestros Servicios</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluciones completas de diseño y reforma para transformar tu hogar con calidad y profesionalidad
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Sections */}
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`section-spacing ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <h2 className="section-title">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Link to="/contacto">
                    <Button 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      Solicitar presupuesto
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Cuéntanos tu idea y te ayudaremos a hacerla realidad con un presupuesto personalizado
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
      </div>

      <Footer />
    </>
  );
}

export default ServiciosPage;
