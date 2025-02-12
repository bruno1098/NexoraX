"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useLoading } from '@/components/providers/LoadingProvider';

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { startLoading, stopLoading } = useLoading();

  const navigate = async (path: string) => {
    if (path === pathname) return;
    
    try {
      startLoading();
      
      // Navega para a nova página
      router.push(path);
      
      // Adiciona um timeout para parar o loading após a navegação
      setTimeout(() => {
        stopLoading();
      }, 500);
    } catch (error) {
      console.error('Erro na navegação:', error);
      stopLoading(); // Garante que o loading pare mesmo em caso de erro
    }
  };

  return { navigate };
} 