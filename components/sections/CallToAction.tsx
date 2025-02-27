"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

export default function CallToAction() {
  const { theme } = useTheme();

  return (
    <section 
    id="contact"
    className={cn(
      "section-padding relative overflow-hidden",
      theme === 'light' 
        ? "animated-gradient-light" 
        : "bg-background"
    )}>
      
      {theme === 'dark' && (
        <div className="absolute inset-0 animated-gradient-dark" />
      )}
      
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm",
                theme === 'light' ? "bg-white/10" : "bg-foreground/10"
              )}
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Transforme seu negócio hoje</span>
            </motion.div>

            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat",
              theme === 'light' ? "text-white" : "text-foreground"
            )}>
              Vamos Criar Algo <br /> Incrível Juntos?
            </h2>

            <p className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto",
              theme === 'light' ? "text-white/80" : "text-muted-foreground"
            )}>
              Entre em contato agora e descubra como podemos impulsionar seu negócio com soluções tecnológicas sob medida.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <motion.a
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg",
                  theme === 'light' 
                    ? "bg-white text-primary hover:bg-opacity-90" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                whileHover={{ gap: '1rem' }}
              >
                Fale com um Especialista
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}