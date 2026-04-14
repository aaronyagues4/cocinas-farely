
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { urlFor } from '@/lib/sanityClient.js';

function PortfolioCard({ image, title, category, description, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const isSanityImage = typeof image === 'object' && image?._type === 'image';

  const thumbUrl = isSanityImage
    ? urlFor(image).width(600).height(450).fit('crop').auto('format').quality(75).url()
    : `${image}?w=600&q=75&fit=crop&auto=format`;

  const fullUrl = isSanityImage
    ? urlFor(image).width(1400).fit('clip').auto('format').quality(85).url()
    : `${image}?w=1400&q=85&fit=crop&auto=format`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={thumbUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90 border-none font-semibold">
              {category}
            </Badge>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/80 line-clamp-2">{description}</p>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-white border-none shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src={fullUrl}
                alt={title}
                decoding="async"
                className="w-full max-h-[60vh] object-contain"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90 border-none font-semibold text-sm px-3 py-1">
                {category}
              </Badge>
              <h3 className="text-3xl font-bold mb-3 text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default React.memo(PortfolioCard);
