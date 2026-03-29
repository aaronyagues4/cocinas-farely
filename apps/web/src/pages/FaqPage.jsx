
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingButtons from '@/components/FloatingButtons.jsx';
import FAQItem from '@/components/FAQItem.jsx';
import { Accordion } from '@/components/ui/accordion';

function FaqPage() {
  const faqCategories = [
    {
      category: 'Plazos y proceso',
      questions: [
        {
          question: '¿Cuánto tiempo tarda un proyecto completo?',
          answer: 'El plazo depende del tipo de proyecto: cocinas entre 6-8 semanas, baños 4-6 semanas y armarios 3-4 semanas. Esto incluye diseño, fabricación e instalación. Te daremos un plazo específico tras la consulta inicial.'
        },
        {
          question: '¿Puedo seguir usando mi cocina/baño durante la reforma?',
          answer: 'Durante la instalación, el espacio no estará disponible. Para cocinas, recomendamos preparar una cocina temporal. En baños, si tienes otro baño en casa, podrás usarlo. Intentamos minimizar las molestias y trabajar de forma eficiente.'
        },
        {
          question: '¿Qué incluye el servicio de instalación?',
          answer: 'Incluye todo: fontanería, electricidad, alicatado, montaje de muebles y limpieza final. Nuestro equipo propio se encarga de todas las fases. No necesitas contratar a nadie más.'
        }
      ]
    },
    {
      category: 'Materiales y calidad',
      questions: [
        {
          question: '¿Qué materiales utilizan?',
          answer: 'Trabajamos únicamente con materiales de primera calidad: tableros de melamina y MDF de alta densidad, herrajes de marcas como Blum y Hettich, encimeras de Silestone, granito o cuarzo, y electrodomésticos de marcas premium como Bosch, Siemens o Miele.'
        },
        {
          question: '¿Ofrecen garantía?',
          answer: 'Sí, ofrecemos 5 años de garantía en todos los muebles fabricados por nosotros y 2 años en instalaciones (fontanería, electricidad). Los electrodomésticos tienen la garantía del fabricante.'
        },
        {
          question: '¿Puedo elegir los acabados y colores?',
          answer: 'Por supuesto. Tenemos un amplio catálogo de acabados, colores y texturas. Durante la fase de diseño, te mostraremos todas las opciones disponibles y te ayudaremos a elegir la combinación perfecta para tu proyecto.'
        }
      ]
    },
    {
      category: 'Presupuestos y pagos',
      questions: [
        {
          question: '¿Cuánto cuesta una cocina/baño/armario?',
          answer: 'El precio varía según el tamaño, materiales y acabados elegidos. Una cocina completa puede costar desde 8.000€, un baño desde 5.000€ y armarios desde 1.500€. Ofrecemos presupuestos personalizados sin compromiso.'
        },
        {
          question: '¿Cómo funciona el pago?',
          answer: 'Normalmente: 40% al firmar el contrato, 40% al comenzar la instalación y 20% final tras la entrega. Aceptamos transferencia bancaria y tarjeta. También ofrecemos opciones de financiación.'
        },
        {
          question: '¿La consulta inicial tiene coste?',
          answer: 'No, la primera consulta y visita para tomar medidas es completamente gratuita y sin compromiso. Solo pagas si decides seguir adelante con el proyecto.'
        },
        {
          question: '¿Ofrecen financiación?',
          answer: 'Sí, trabajamos con entidades financieras que ofrecen planes de financiación flexibles. Puedes fraccionar el pago en cómodas cuotas mensuales. Consulta las condiciones en tu presupuesto.'
        }
      ]
    },
    {
      category: 'Diseño y personalización',
      questions: [
        {
          question: '¿Puedo ver el diseño antes de empezar?',
          answer: 'Sí, creamos un diseño 3D fotorrealista de tu proyecto antes de comenzar la fabricación. Podrás ver exactamente cómo quedará y hacer todos los cambios que necesites hasta que estés 100% satisfecho.'
        },
        {
          question: '¿Trabajan con espacios pequeños o irregulares?',
          answer: 'Sí, nos especializamos en aprovechar al máximo cualquier espacio, por pequeño o irregular que sea. Diseñamos soluciones a medida que se adaptan perfectamente a las dimensiones y características de tu hogar.'
        },
        {
          question: '¿Puedo aportar mis propias ideas de diseño?',
          answer: 'Por supuesto. Nos encanta trabajar con las ideas de nuestros clientes. Puedes traer fotos de referencia, Pinterest boards o cualquier inspiración que tengas. Nuestro equipo las incorporará al diseño final.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes (FAQ) | Cocinas Farely</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios, plazos, materiales, presupuestos y proceso de trabajo." />
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
              <h2 className="section-title">Preguntas Frecuentes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section-spacing">
          <div className="container-custom max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="section-title">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      value={`${categoryIndex}-${index}`}
                    />
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-spacing bg-muted">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                ¿No encuentras la respuesta que buscas?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nuestro equipo está disponible para resolver cualquier duda que tengas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+34678636106"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Llámanos: 678 63 61 06
                </a>
                <a 
                  href="mailto:cocinasfarely@yahoo.es"
                  className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-all duration-200 active:scale-[0.98]"
                >
                  Email: cocinasfarely@yahoo.es
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

export default FaqPage;
