
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Contact Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Link
          to="/contacto"
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-ambar-claro hover:scale-110 active:scale-95 group"
          aria-label="Ir a contacto"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </Link>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <a
          href="https://wa.me/34678636106"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-ambar-claro hover:scale-110 active:scale-95 group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </a>
      </motion.div>
    </div>
  );
}

export default FloatingButtons;
