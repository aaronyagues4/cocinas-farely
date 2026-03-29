
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';

function PoliticaPrivacidadPage() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Cocinas Farely</title>
        <meta name="description" content="Política de privacidad de Cocinas Farely. Información sobre el tratamiento de datos personales conforme al RGPD." />
      </Helmet>

      <Header />
      <FloatingButtons />

      <div className="pt-20">
        {/* Page Header */}
        <section className="section-spacing-sm bg-secondary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Política de privacidad</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Información sobre el tratamiento de tus datos personales conforme al RGPD
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
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
                  <h2 className="text-3xl font-bold mb-4">1. Responsable del tratamiento</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    El responsable del tratamiento de los datos personales recogidos en www.cocinasfarely.es es:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Denominación social: Cocinas Farely S.L.</li>
                    <li>NIF: B-12345678</li>
                    <li>Domicilio: Calle Ejemplo, 123, 28001 Madrid, España</li>
                    <li>Email: info@cocinasfarely.es</li>
                    <li>Teléfono: +34 912 345 678</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">2. Finalidad del tratamiento</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Los datos personales que nos proporciones a través de los formularios de contacto serán tratados con las siguientes finalidades:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Gestionar y responder a las consultas, solicitudes de información o presupuestos que nos envíes.</li>
                    <li>Mantener el contacto contigo durante el proceso de diseño, fabricación e instalación de tu proyecto.</li>
                    <li>Enviarte información comercial sobre nuestros servicios, si has dado tu consentimiento expreso para ello.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">3. Legitimación</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    La base legal para el tratamiento de tus datos es:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>El consentimiento del interesado al rellenar y enviar el formulario de contacto.</li>
                    <li>La ejecución de un contrato en el que el interesado es parte (cuando solicitas un presupuesto o contratas nuestros servicios).</li>
                    <li>El interés legítimo del responsable para el envío de comunicaciones comerciales, siempre que hayas dado tu consentimiento previo.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">4. Conservación de datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Los datos personales proporcionados se conservarán:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Mientras dure la relación comercial o contractual.</li>
                    <li>Durante los años necesarios para cumplir con las obligaciones legales.</li>
                    <li>Hasta que solicites su supresión, si has dado tu consentimiento para el envío de comunicaciones comerciales.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">5. Destinatarios de los datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tus datos no serán cedidos a terceros, salvo obligación legal. Podrán ser comunicados a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Proveedores de servicios de hosting y mantenimiento web.</li>
                    <li>Proveedores de servicios de email marketing (solo si has consentido recibir comunicaciones comerciales).</li>
                    <li>Administraciones públicas cuando exista una obligación legal.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">6. Derechos del usuario</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Puedes ejercer los siguientes derechos en cualquier momento:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Derecho de acceso: conocer qué datos personales tenemos sobre ti.</li>
                    <li>Derecho de rectificación: corregir datos inexactos o incompletos.</li>
                    <li>Derecho de supresión: solicitar la eliminación de tus datos.</li>
                    <li>Derecho de limitación: solicitar la limitación del tratamiento de tus datos.</li>
                    <li>Derecho de portabilidad: recibir tus datos en formato estructurado.</li>
                    <li>Derecho de oposición: oponerte al tratamiento de tus datos.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Para ejercer estos derechos, puedes enviar un email a info@cocinasfarely.es adjuntando copia de tu DNI o documento identificativo equivalente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">7. Seguridad de los datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cocinas Farely ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">8. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. No utilizamos cookies de seguimiento o publicitarias sin tu consentimiento previo.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">9. Modificaciones</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cocinas Farely se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. Cualquier modificación será publicada en esta página.
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

export default PoliticaPrivacidadPage;
