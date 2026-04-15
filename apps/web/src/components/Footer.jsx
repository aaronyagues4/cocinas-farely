
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, Clock, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-grafito text-crema">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Cocinas Farely"
                className="h-10 w-auto invert mix-blend-screen"
              />
            </div>
            <p className="text-crema/75 text-sm leading-relaxed">
              Diseño y reforma de cocinas, baños y armarios a medida en la Vega Baja del Segura. Transformamos espacios con pasión y calidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-semibold text-sm tracking-wider uppercase mb-6 block text-white">
              Enlaces rápidos
            </span>
            <div className="flex flex-col gap-3">
              <Link to="/sobre-nosotros" className="text-sm text-crema/75 hover:text-primary transition-colors duration-300">
                Sobre Nosotros
              </Link>
              <Link to="/testimonios" className="text-sm text-crema/75 hover:text-primary transition-colors duration-300">
                Testimonios
              </Link>
              <Link to="/trabaja-con-nosotros" className="text-sm text-crema/75 hover:text-primary transition-colors duration-300">
                Trabaja con Nosotros
              </Link>
              <Link to="/aviso-legal" className="text-sm text-crema/75 hover:text-primary transition-colors duration-300">
                Aviso Legal
              </Link>
              <Link to="/politica-privacidad" className="text-sm text-crema/75 hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-semibold text-sm tracking-wider uppercase mb-6 block text-white">
              Contacto
            </span>
            <div className="flex flex-col gap-4">
              <a href="tel:+34678636106" className="flex items-center gap-3 text-sm text-crema/75 hover:text-primary transition-colors duration-300 group">
                <Phone className="w-4 h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                678 63 61 06
              </a>
              <a href="mailto:cocinasfarely@yahoo.es" className="flex items-center gap-3 text-sm text-crema/75 hover:text-primary transition-colors duration-300 group">
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                cocinasfarely@yahoo.es
              </a>
              <div className="flex items-start gap-3 text-sm text-crema/75">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Calle Ramón y Cajal 17<br/>Benijófar - 03178, España</span>
              </div>
            </div>
          </div>

          {/* Business Hours & Social */}
          <div>
            <span className="font-semibold text-sm tracking-wider uppercase mb-6 block text-white">
              Horario y Redes
            </span>
            <div className="flex items-start gap-3 mb-6">
              <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <div className="text-sm text-crema/75 space-y-1">
                <p>Lunes a viernes: 9:00-19:00</p>
                <p>Sábado: 10:00-13:00</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-crema/50">
            © {new Date().getFullYear()} Cocinas Farely. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
