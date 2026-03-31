
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Hammer, Wrench, CheckCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';

function ProcesoPage() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Consulta inicial',
      description: 'Nos reunimos contigo para entender tus necesidades, gustos y presupuesto. Visitamos el espacio para tomar medidas precisas y evaluar las posibilidades. Esta primera consulta es completamente gratuita y sin compromiso.'
    },
    {
      number: 2,
      icon: Ruler,
      title: 'Diseño personalizado',
      description: 'Nuestro equipo de diseño crea un proyecto 3D fotorrealista adaptado a tus especificaciones. Te presentamos diferentes opciones de materiales, acabados y distribución. Realizamos todos los ajustes necesarios hasta que el diseño sea perfecto.'
    },
    {
      number: 3,
      icon: Hammer,
      title: 'Fabricación',
      description: 'Una vez aprobado el diseño, comenzamos la fabricación en nuestro taller con maquinaria de última generación. Utilizamos únicamente materiales de primera calidad de proveedores certificados. El proceso de fabricación dura entre 3 y 4 semanas.'
    },
    {
      number: 4,
      icon: Wrench,
      title: 'Instalación profesional',
      description: 'Nuestro equipo de instaladores profesionales se encarga de todo: fontanería, electricidad, alicatado y montaje de muebles. Trabajamos con limpieza y respeto por tu hogar. La instalación completa suele durar entre 1 y 2 semanas según el proyecto.'
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Entrega y garantía',
      description: 'Realizamos una inspección final contigo para asegurarnos de que todo está perfecto. Te entregamos toda la documentación, manuales y certificados de garantía. Ofrecemos 5 años de garantía en muebles y 2 años en instalaciones.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nuestro Proceso - Cómo Trabajamos | Cocinas Farely</title>
        <meta name="description" content="Descubre nuestro proceso de trabajo paso a paso: desde la consulta inicial hasta la entrega final. Transparencia y profesionalidad en cada fase." />
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
                Un método probado que garantiza resultados excepcionales en cada proyecto
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
              className="mt-8 text-center"
            >
              <p className="text-sm text-muted-foreground italic">
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
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    En Cocinas Farely nos comprometemos a cumplir los plazos acordados y a mantener una comunicación constante durante todo el proceso. Recibirás actualizaciones regulares sobre el estado de tu proyecto.
                  </p>
                  <p>
                    Trabajamos con un sistema de gestión de proyectos que nos permite coordinar eficientemente todas las fases: diseño, fabricación e instalación. Esto minimiza los tiempos de espera y garantiza que tu proyecto se complete en el plazo estimado.
                  </p>
                  <p>
                    Si surge algún imprevisto que pueda afectar al plazo, te informaremos inmediatamente y buscaremos la mejor solución. Tu satisfacción es nuestra prioridad.
                  </p>
                </div>
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
