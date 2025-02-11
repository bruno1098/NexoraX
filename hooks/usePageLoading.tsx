import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/components/providers/LoadingProvider';

export function usePageLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { stopLoading } = useLoading();

  useEffect(() => {
    const handleStop = () => {
      stopLoading();
    };

    // Verifica se o documento já está carregado
    if (document.readyState === 'complete') {
      handleStop();
    } else {
      // Se não estiver, adiciona o evento load
      window.addEventListener('load', handleStop);
      return () => window.removeEventListener('load', handleStop);
    }
  }, [pathname, searchParams, stopLoading]);
} 