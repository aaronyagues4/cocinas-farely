
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
      description: 'Cada cocina que fabricamos empieza por escucharte. Tu espacio, tu forma de vivir, lo que imaginas y quizás lo que todavía no sabes que necesitas. Antes de fabricar nada, te mostramos tu cocina en un render 3D fotorrealista para que puedas verla, ajustarla y aprobarla con total seguridad. Desde ahí te acompañamos en cada decisión, con criterio y sin prisas, hasta que el resultado es exactamente el tuyo. Solo trabajamos con materiales que cumplan nuestros estándares — porque nos importa lo que instalamos en tu casa.',
      features: [
        'Diseño 3D fotorrealista antes de la fabricación',
        'Materiales de primera calidad: madera maciza, lacados, laminados',
        'Electrodomésticos de marcas premium integrados',
        'Iluminación LED bajo muebles y en vitrinas',
        'Encimeras de granito, cuarzo o Silestone',
        'Herrajes de cierre suave y sistemas de extracción',
        'Garantía en todos los muebles fabricados',
        'Instalación profesional incluida'
      ]
    },
    {
      id: 'banos',
      title: 'Muebles de baño a medida',
      image: 'https://images.unsplash.com/photo-1641870538440-f88f802f84d5',
      description: 'El baño es uno de los espacios más personales de la casa, y merece el mismo cuidado que el resto. Fabricamos muebles de baño a medida y nos encargamos de todo lo que lo rodea — lavabos, grifería, espejos y accesorios — para que cada elemento encaje con el siguiente. Tú eliges el estilo, nosotros lo hacemos realidad.',
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
      title: 'Armarios a medida',
      image: 'https://images.unsplash.com/photo-1613193196083-f25f4acabf5a',
      description: 'Es el primer sitio que abres por la mañana y el último que cierras por la noche. Por eso merece estar bien pensado. No fabricamos armarios estándar — fabricamos el tuyo. Ya sea un armario empotrado, un vestidor, un closet o cualquier solución de almacenamiento, analizamos cada rincón y cómo lo usas para diseñar algo que tenga sentido de verdad. Tú eliges los materiales, los acabados y la distribución. Nosotros nos encargamos de que funcione.',
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
    },
    {
      id: 'profesionales',
      title: 'Red de profesionales de confianza',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      description: 'Una reforma implica más que muebles. Cuando nos lo pides, te recomendamos los profesionales que nosotros mismos elegiríamos — albañiles, electricistas y fontaneros que conocemos, que hemos visto trabajar y que sabemos que no van a fallarte. Porque queremos que todo tu proyecto salga bien, no solo la parte que hacemos nosotros.',
      features: [
        'Red de albañiles, electricistas y fontaneros de confianza',
        'Profesionales que hemos visto trabajar y avalamos',
        'Coordinación entre todos los gremios del proyecto',
        'Un interlocutor único para toda la reforma',
        'Seguimiento del trabajo de cada profesional',
        'Tranquilidad de no tener que buscar por tu cuenta'
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
                Diseño, fabricación e instalación. Un proyecto hecho a tu medida, de principio a fin.
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
      </div>

      <Footer />
    </>
  );
}

export default ServiciosPage;
