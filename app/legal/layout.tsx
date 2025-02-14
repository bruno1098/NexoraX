"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const legalPages = [
  { title: 'Termos de Uso', path: '/legal/terms' },
  { title: 'Privacidade', path: '/legal/privacy' },
  { title: 'FAQ', path: '/legal/faq' }
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden pt-24",
      theme === 'light' ? "animated-gradient-light" : "bg-background"
    )}>
      {theme === 'dark' && (
        <div className="absolute inset-0 animated-gradient-dark opacity-20" />
      )}
      
      <div className="absolute inset-0 bg-grid-white/10" />

      <div className="container py-8 relative z-10">
        {/* Navegação entre páginas legais */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex gap-2 p-1 rounded-lg backdrop-blur-md bg-card/30">
            {legalPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-200",
                  pathname === page.path
                    ? theme === 'light'
                      ? "bg-white text-primary"
                      : "bg-primary text-primary-foreground"
                    : theme === 'light'
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                )}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </motion.nav>

        {children}
      </div>
    </div>
  );
} 