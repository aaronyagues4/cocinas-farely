
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, Pencil, MonitorPlay, Hammer, HeartHandshake, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import { Button } from '@/components/ui/button';

function ProcesoPage() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Primera reunión en nuestro showroom',
      description: 'Todo empieza con una conversación. Ven a vernos, cuéntanos lo que tienes en mente y nosotros te mostramos materiales, acabados y posibilidades. Sin prisas, sin compromiso y sin coste. Es el momento de empezar a darle forma a tu idea.'
    },
    {
      number: 2,
      icon: MapPin,
      title: 'Visita a tu espacio',
      description: 'Si lo necesitas, nos acercamos a tu casa para ver el espacio, tomar medidas y hacer los primeros bocetos sobre el terreno. Lo coordinamos cuando mejor te venga. Así trabajamos sobre la realidad, no sobre suposiciones.'
    },
    {
      number: 3,
      icon: Pencil,
      title: 'Diseño y elección de materiales',
      description: 'Con las medidas y tus preferencias claras, trabajamos contigo en cada detalle — materiales, acabados, distribución y diseño. Las reuniones que hagan falta, hasta que tengas delante exactamente lo que imaginabas.'
    },
    {
      number: 4,
      icon: MonitorPlay,
      title: 'Presupuesto y render 3D fotorrealista',
      description: 'Una vez cerrado el diseño, lo enviamos a taller para elaborar el presupuesto. Te lo presentamos en una reunión donde también podrás ver tu proyecto en un render 3D fotorrealista — para que sepas exactamente cómo va a quedar antes de aprobar nada.'
    },
    {
      number: 5,
      icon: Hammer,
      title: 'Fabricación e instalación',
      description: 'Con tu conformidad, el proyecto pasa a nuestro taller. Fabricamos cada pieza a medida y la instalamos en las fechas acordadas. Sin sorpresas.'
    },
    {
      number: 6,
      icon: HeartHandshake,
      title: 'Postventa y seguimiento',
      description: 'Cuando terminamos, no desaparecemos. Seguimos a tu disposición para cualquier duda, ajuste o incidencia que pueda surgir. Porque para nosotros, el proyecto acaba cuando tú estás satisfecho.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nuestros Procesos - Cómo Trabajamos | Cocinas Farely</title>
        <meta name="description" content="Descubre cómo trabajamos paso a paso: desde la primera reunión en nuestro showroom hasta el seguimiento postventa. Transparencia y profesionalidad en cada fase." />
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
              <h2 className="section-title">Nuestro Proceso</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Así trabajamos, sin más misterio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  {...step}
                  delay={index * 0.1}
                />
              ))}

              {/* CTA call to visit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mt-4"
              >
                <p className="text-xl text-muted-foreground italic mb-6">
                  Tu cocina empieza visitándonos. Te esperamos.
                </p>
                <Link to="/contacto">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-ambar-claro transition-all duration-200 active:scale-[0.98]"
                  >
                    Concertar visita al showroom
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="section-spacing bg-muted">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Plazos estimados</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tiempos aproximados para cada tipo de proyecto
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Cocinas</h3>
                <p className="text-4xl font-bold text-primary mb-2">6-8</p>
                <p className="text-muted-foreground">semanas totales</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Baños</h3>
                <p className="text-4xl font-bold text-primary mb-2">4-6</p>
                <p className="text-muted-foreground">semanas totales</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Armarios</h3>
                <p className="text-4xl font-bold text-primary mb-2">3-4</p>
                <p className="text-muted-foreground">semanas totales</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 w-full text-center"
            >
              <p className="text-sm text-muted-foreground italic max-w-5xl mx-auto text-center">
                * Los plazos pueden variar según la complejidad del proyecto y la disponibilidad de materiales
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quality Commitment */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="section-title">Nuestro compromiso</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
              >
                <p className="text-lg leading-relaxed">
                  Cumplir lo que prometemos es tan importante para nosotros como el resultado final. Durante todo el proceso te mantenemos informado. Sabemos que en una obra pueden surgir imprevistos — cuando ocurre, somos los primeros en decírtelo y en buscar una solución. Nadie es perfecto, pero sí podemos comprometernos a ser siempre transparentes y a no dejarte solo ante ningún problema.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ProcesoPage;
