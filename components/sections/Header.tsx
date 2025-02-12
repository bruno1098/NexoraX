"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useNavigation } from '@/hooks/useNavigation';

const menuItems = [
  { label: 'Início', href: '/#home' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Como Funciona', href: '/#funciona' },
  { label: 'Por que nós?', href: '/#why-choose-us' },
  { label: 'Cases', href: '/#testimonials' },
  { label: 'Contato', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const { navigate } = useNavigation();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Se estiver em outra página que não seja a home
    if (pathname !== '/') {
      // Se o link contiver #, primeiro navega para home e depois faz o scroll
      if (href.includes('#')) {
        await navigate('/');
        const elementId = href.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          });
        }
      } else {
        await navigate(href);
      }
      return;
    }

    // Se estiver na home, apenas faz o scroll suave
    const elementId = href.split('#')[1];
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 w-full z-50",
        isScrolled ? "py-4" : "py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Fundo com blur */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-300",
          isScrolled ? "bg-background/60 backdrop-blur-md" : "bg-transparent"
        )} 
      />

      {/* Conteúdo do header */}
      <div className="container relative z-19">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Link 
              href="/"
              className="flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                router.push('/');
              }}
            >
              <Code className="w-8 h-8 text-primary" />
              <span className="text-5xl font-bold">
                Nexora<span className="x-animated">X</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-foreground'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleClick(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-foreground/80 hover:text-foreground py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    handleClick(e, '#contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block btn-primary text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fale Conosco
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}