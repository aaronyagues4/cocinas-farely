
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';

function SobreNosotrosPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Quiénes Somos | Cocinas Farely</title>
        <meta name="description" content="Conoce a Cocinas Farely: transformando hogares en la Vega Baja del Segura con diseño y calidad. Nuestra historia familiar y compromiso con la excelencia." />
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
              <h2 className="section-title">Sobre Nosotros</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conócenos un poco mejor
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
                  En Cocinas Farely creemos que el hogar es el reflejo de quienes lo habitan. Por eso, dedicamos nuestro esfuerzo a diseñar y crear espacios a medida que combinan funcionalidad, estética y durabilidad. Nuestro compromiso es acompañarte en cada paso del proceso para hacer realidad el proyecto que siempre has imaginado.
                </p>
                
                <h2 className="section-title text-center">NUESTRA HISTORIA</h2>
              </motion.div>

              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Nacidos en la Vega Baja</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nuestra trayectoria comenzó en el corazón de la Vega Baja del Segura, en Benijófar. Desde nuestros inicios, hemos estado profundamente arraigados a esta tierra, entendiendo las necesidades y el estilo de vida de nuestros vecinos. Esta conexión local nos ha permitido crecer de manera sostenida, convirtiéndonos en un referente de confianza para el diseño y reforma de interiores en toda la comarca.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Una historia familiar</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Cocinas Farely no es solo una empresa, es el resultado del esfuerzo y la dedicación de una familia apasionada por el trabajo bien hecho. Transmitiendo el oficio y los valores de generación en generación, hemos logrado mantener la esencia de la carpintería tradicional mientras incorporamos las últimas innovaciones tecnológicas y tendencias de diseño del mercado actual.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">El valor de cada detalle</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Sabemos que la diferencia entre un buen trabajo y un trabajo excepcional reside en los detalles. Por ello, seleccionamos meticulosamente cada material, herraje y acabado. Nuestro equipo de profesionales supervisa cada fase del proyecto, desde el primer boceto en 3D hasta el último ajuste durante la instalación, garantizando que el resultado final supere siempre las expectativas.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Cercanía que deja huella</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Para nosotros, cada cliente es único y cada proyecto es personal. Nos enorgullece ofrecer un trato cercano, honesto y transparente. Escuchamos tus ideas, resolvemos tus dudas y te asesoramos con la experiencia que nos avala. Esta filosofía de trabajo nos ha permitido construir relaciones duraderas y convertir a muchos de nuestros clientes en nuestros mejores embajadores.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SobreNosotrosPage;
