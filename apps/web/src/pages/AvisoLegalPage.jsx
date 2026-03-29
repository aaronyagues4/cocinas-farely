
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';

function AvisoLegalPage() {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | Cocinas Farely</title>
        <meta name="description" content="Aviso legal de Cocinas Farely. Información sobre la empresa, condiciones de uso del sitio web y datos de contacto." />
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
              <h2 className="section-title">AVISO LEGAL</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Información legal sobre Cocinas Farely y condiciones de uso del sitio web
              </p>
            </motion.div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="section-spacing">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">1. Datos identificativos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa a los usuarios de los datos identificativos del titular del sitio web:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Denominación social: Cocinas Farely S.L.</li>
                    <li>Domicilio social: Calle Ramón y Cajal 17, Benijófar - 03178, España</li>
                    <li>Teléfono: 678 63 61 06</li>
                    <li>Email: cocinasfarely@yahoo.es</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">2. Objeto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El presente aviso legal regula el uso del sitio web (en adelante, el "Sitio Web"), del que es titular Cocinas Farely S.L.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">3. Condiciones de uso</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Cocinas Farely ofrece a través de su Sitio Web y con carácter enunciativo pero no limitativo, a no emplearlos para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                    <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                    <li>Provocar daños en los sistemas físicos y lógicos de Cocinas Farely, de sus proveedores o de terceras personas.</li>
                    <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">4. Propiedad intelectual e industrial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Cocinas Farely, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">5. Exclusión de garantías y responsabilidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cocinas Farely no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">6. Modificaciones</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cocinas Farely se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">7. Legislación aplicable y jurisdicción</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La relación entre Cocinas Farely y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales competentes.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-6 mt-8">
                  <p className="text-sm text-muted-foreground">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AvisoLegalPage;
