import './globals.css';
import type { Metadata } from 'next';
import { poppins, montserrat } from './fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/sections/Header';
import { LoadingProvider } from '@/components/providers/LoadingProvider';
import { PageLoadingHandler } from '@/components/navigation/PageLoadingHandler';

export const metadata: Metadata = {
  title: 'NexoraX - Soluções de Software Sob Medida',
  description: 'Desenvolvemos sistemas personalizados para empresas de todos os tamanhos. Do e-commerce ao sistema de gestão, criamos soluções que aceleram seu crescimento.',
  metadataBase: new URL('https://nexorax.com'),
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        poppins.variable,
        montserrat.variable,
        'font-poppins bg-background text-foreground transition-colors duration-300'
      )}>
        <ThemeProvider>
          <LoadingProvider>
            <Header />
            <PageLoadingHandler />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}