
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TeamCard({ photo, name, role, initials, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <div className="mb-4 inline-block">
        <Avatar className="w-32 h-32 rounded-2xl ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
          {photo && <AvatarImage src={photo} alt={name} className="rounded-2xl" />}
          <AvatarFallback className="rounded-2xl bg-primary/10 text-primary text-2xl font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <h4 className="text-xl font-semibold mb-1">{name}</h4>
      <p className="text-muted-foreground">{role}</p>
    </motion.div>
  );
}

export default TeamCard;
