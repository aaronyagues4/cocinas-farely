
import React from 'react';
import { motion } from 'framer-motion';

function ProcessStep({ number, icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-8 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 z-10">
          {number}
        </div>
        {number < 6 && (
          <div className="w-0.5 h-full bg-border mt-4 hidden md:block group-hover:bg-primary/30 transition-colors duration-300" />
        )}
      </div>

      <div className="flex-1 pb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProcessStep;
