
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Proceso', path: '/proceso' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Cocinas <span className="text-primary">Farely</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-4">
              <a href="tel:+34678636106" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                678 63 61 06
              </a>
              <Link to="/contacto">
                <Button className="bg-primary text-primary-foreground hover:bg-[#E8B84D] transition-all duration-300 font-semibold rounded-xl px-6">
                  Presupuesto
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4">
                  <a 
                    href="tel:+34678636106" 
                    className="text-center py-3 text-lg font-semibold text-foreground bg-muted rounded-xl"
                  >
                    678 63 61 06
                  </a>
                  <Link
                    to="/contacto"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-[#E8B84D] transition-all duration-300 font-semibold rounded-xl py-6 text-lg">
                      Solicitar Presupuesto
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
