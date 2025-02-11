"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden",
      theme === 'light' ? "animated-gradient-light" : "bg-background"
    )}>
      {theme === 'dark' && (
        <div className="absolute inset-0 animated-gradient-dark opacity-20" />
      )}
      
      <div className="absolute inset-0 bg-grid-white/10" />

      <div className="container py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className={cn(
              "inline-flex items-center gap-2 transition-colors",
              theme === 'light' 
                ? "text-white/80 hover:text-white" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>
        </motion.div>
        {children}
      </div>
    </div>
  );
} 