
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import FAQItem from '@/components/FAQItem.jsx';
import { Accordion } from '@/components/ui/accordion';

function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>Contacto - Solicita tu Presupuesto | Cocinas Farely</title>
        <meta name="description" content="Contacta con Cocinas Farely para solicitar presupuesto sin compromiso. Teléfono, email, horario y ubicación en Benijófar, Vega Baja del Segura." />
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
              <h2 className="section-title">Contacta con Nosotros</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos aquí para ayudarte a hacer realidad tu proyecto. Contáctanos sin compromiso
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">Información de contacto</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Teléfono</p>
                      <a 
                        href="tel:+34678636106" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        678 63 61 06
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a 
                        href="mailto:cocinasfarely@yahoo.es" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        cocinasfarely@yahoo.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Horario</p>
                      <p className="text-muted-foreground">Lunes a viernes: 9:00-19:00</p>
                      <p className="text-muted-foreground">Sábado: 10:00-13:00</p>
                      <p className="text-muted-foreground">Domingo: Cerrado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Ubicación</p>
                      <p className="text-muted-foreground">Calle Ramón y Cajal 17</p>
                      <p className="text-muted-foreground">Benijófar - 03178, España</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Trabajamos en toda la Vega Baja del Segura y alrededores
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="bg-[#25D366]/10 rounded-2xl p-6 border border-[#25D366]/20">
                  <h3 className="font-semibold mb-3">¿Prefieres WhatsApp?</h3>
                  <p className="text-muted-foreground mb-4">
                    Chatea con nosotros directamente y obtén respuesta inmediata
                  </p>
                  <a
                    href="https://wa.me/34678636106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#25D366]/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h2 className="section-title">Solicita presupuesto</h2>
                  <p className="text-muted-foreground mb-8">
                    Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas
                  </p>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-muted">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Preguntas frecuentes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Respuestas a las dudas más habituales antes de ponerse en contacto
              </p>
            </motion.div>

            {[
              {
                category: 'Plazos y proceso',
                questions: [
                  { question: '¿Cuánto tiempo tarda un proyecto completo?', answer: 'El plazo depende del tipo de proyecto: cocinas entre 6-8 semanas, baños 4-6 semanas y armarios 3-4 semanas. Esto incluye diseño, fabricación e instalación. Te daremos un plazo específico tras la consulta inicial.' },
                  { question: '¿Puedo seguir usando mi cocina/baño durante la reforma?', answer: 'Durante la instalación, el espacio no estará disponible. Para cocinas, recomendamos preparar una cocina temporal. En baños, si tienes otro baño en casa, podrás usarlo. Intentamos minimizar las molestias y trabajar de forma eficiente.' },
                  { question: '¿Qué incluye el servicio de instalación?', answer: 'Incluye todo: fontanería, electricidad, alicatado, montaje de muebles y limpieza final. Nuestro equipo propio se encarga de todas las fases. No necesitas contratar a nadie más.' }
                ]
              },
              {
                category: 'Materiales y calidad',
                questions: [
                  { question: '¿Qué materiales utilizan?', answer: 'Trabajamos únicamente con materiales de primera calidad: tableros de melamina y MDF de alta densidad, herrajes de marcas como Blum y Hettich, encimeras de Silestone, granito o cuarzo, y electrodomésticos de marcas premium como Bosch, Siemens o Miele.' },
                  { question: '¿Ofrecen garantía?', answer: 'Sí, ofrecemos garantía en todos los muebles fabricados por nosotros y en las instalaciones. Los electrodomésticos tienen la garantía del fabricante.' },
                  { question: '¿Puedo elegir los acabados y colores?', answer: 'Por supuesto. Tenemos un amplio catálogo de acabados, colores y texturas. Durante la fase de diseño, te mostraremos todas las opciones disponibles y te ayudaremos a elegir la combinación perfecta para tu proyecto.' }
                ]
              },
              {
                category: 'Presupuestos y pagos',
                questions: [
                  { question: '¿Cuánto cuesta una cocina/baño/armario?', answer: 'El precio varía según el tamaño, materiales y acabados elegidos. Una cocina completa puede costar desde 8.000€, un baño desde 5.000€ y armarios desde 1.500€. Ofrecemos presupuestos personalizados sin compromiso.' },
                  { question: '¿Cómo funciona el pago?', answer: 'Normalmente: 40% al firmar el contrato, 40% al comenzar la instalación y 20% final tras la entrega. Aceptamos transferencia bancaria y tarjeta. También ofrecemos opciones de financiación.' },
                  { question: '¿La consulta inicial tiene coste?', answer: 'No, la primera visita a nuestro showroom y la toma de medidas son completamente gratuitas y sin compromiso. Solo pagas si decides seguir adelante con el proyecto.' },
                  { question: '¿Ofrecen financiación?', answer: 'Sí, trabajamos con entidades financieras que ofrecen planes de financiación flexibles. Puedes fraccionar el pago en cómodas cuotas mensuales. Consulta las condiciones en tu presupuesto.' }
                ]
              },
              {
                category: 'Diseño y personalización',
                questions: [
                  { question: '¿Puedo ver el diseño antes de empezar?', answer: 'Sí, creamos un diseño 3D fotorrealista de tu proyecto antes de comenzar la fabricación. Podrás ver exactamente cómo quedará y hacer todos los cambios que necesites hasta que estés 100% satisfecho.' },
                  { question: '¿Trabajan con espacios pequeños o irregulares?', answer: 'Sí, nos especializamos en aprovechar al máximo cualquier espacio, por pequeño o irregular que sea. Diseñamos soluciones a medida que se adaptan perfectamente a las dimensiones y características de tu hogar.' },
                  { question: '¿Puedo aportar mis propias ideas de diseño?', answer: 'Por supuesto. Nos encanta trabajar con las ideas de nuestros clientes. Puedes traer fotos de referencia, Pinterest boards o cualquier inspiración que tengas. Nuestro equipo las incorporará al diseño final.' }
                ]
              }
            ].map((cat, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="mb-10"
              >
                <h3 className="text-lg font-medium text-primary mb-4 uppercase tracking-wider">{cat.category}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.questions.map((faq, idx) => (
                    <FAQItem
                      key={idx}
                      question={faq.question}
                      answer={faq.answer}
                      value={`${catIdx}-${idx}`}
                    />
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Nuestra ubicación</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visítanos en Benijófar, en el corazón de la Vega Baja del Segura
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.745%2C38.075%2C-0.735%2C38.085&layer=mapnik&marker=38.080%2C-0.740"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de Cocinas Farely en Benijófar"
              />
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactoPage;
