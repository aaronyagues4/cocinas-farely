
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, link, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-border service-accent-border"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <Link 
          to={link}
          className="inline-flex items-center gap-2 text-card-foreground font-semibold hover:text-primary hover:gap-3 transition-all duration-300"
        >
          Ver más
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
