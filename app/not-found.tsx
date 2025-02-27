"use client";

import { motion } from 'framer-motion';
import dynamicImport from 'next/dynamic';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { Home, Rocket } from 'lucide-react';
import Link from 'next/link';

const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { 
    ssr: false,
    loading: () => <div className="w-full h-64 bg-muted/10 rounded-lg animate-pulse" />
  }
);

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className={cn(
      "min-h-screen w-full relative overflow-hidden",
      theme === 'light' ? "animated-gradient-light" : "bg-background"
    )}>
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 animated-gradient-dark opacity-20" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background animate-pulse" />
            <div className="absolute inset-0 bg-grid-small-white/10" />
          </div>
        </>
      )}
      
      {theme === 'light' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background animate-gradient" />
          <div className="absolute inset-0 bg-grid-small-white/10" />
        </>
      )}

      <div className="container relative z-10 min-h-screen flex flex-col items-center justify-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="w-full max-w-lg mx-auto">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_kcsr6fcp.json"
              style={{ height: '300px' }}
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-montserrat"
          >
            Ops! Se Perdeu no <span className="text-gradient-animated">Espaço Digital</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A página que você procura parece ter sido abduzida por alienígenas. 
            Que tal voltar para um território conhecido?
          </motion.p>

          <div className="relative">
            <motion.div
              className="absolute -left-32 top-0"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_xyadoh9h.json"
                style={{ height: '100px' }}
              />
            </motion.div>

            <motion.div
              className="absolute -right-32 top-0"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_obhph3sh.json"
                style={{ height: '100px' }}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Link
                href="/"
                className={cn(
                  "btn-primary glow hover-3d inline-flex items-center gap-2 px-8 py-4",
                  theme === 'light' 
                    ? "bg-white text-primary" 
                    : "bg-primary text-primary-foreground"
                )}
              >
                <Home className="w-5 h-5" />
                Voltar para Casa
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';
