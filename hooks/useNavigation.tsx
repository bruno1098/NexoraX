"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useLoading } from '@/components/providers/LoadingProvider';

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  const navigate = async (path: string) => {
    if (path === pathname) return;
    
    try {
      startLoading(); // Inicia o loading imediatamente
      
      // Pequeno timeout para garantir que o loading seja exibido
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Navega para a nova página
      await router.push(path);
    } catch (error) {
      console.error('Erro na navegação:', error);
    }
  };

  return { navigate };
} 