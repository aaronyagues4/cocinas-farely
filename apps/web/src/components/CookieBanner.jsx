import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'cookies_accepted';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg"
        >
          <div className="container-custom flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                Usamos cookies técnicas necesarias para el funcionamiento de la web.
                Consulta nuestra{' '}
                <Link to="/politica-privacidad" className="underline text-foreground hover:text-primary">
                  política de cookies
                </Link>.
              </p>
            </div>
            <Button size="sm" onClick={accept} className="shrink-0 w-full sm:w-auto">
              Aceptar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
