
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TestimonialCard({ name, rating, review, photo, initials, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
    >
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 transition-colors duration-300 ${
              i < Math.floor(rating)
                ? 'fill-primary text-primary'
                : i < rating
                ? 'fill-primary/50 text-primary'
                : 'fill-muted text-muted'
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-bold text-foreground">
          {rating.toFixed(1)}
        </span>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8 italic text-lg">
        "{review}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <Avatar className="w-12 h-12 rounded-full border-2 border-border">
          {photo && <AvatarImage src={photo} alt={name} />}
          <AvatarFallback className="bg-primary/10 text-primary font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">Cliente Verificado</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
