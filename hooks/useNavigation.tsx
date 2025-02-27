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
      
  
      router.push(path);
      
      
      setTimeout(() => {
        stopLoading();
      }, 500);
    } catch (error) {
      console.error('Erro na navegação:', error);
      stopLoading(); 
    }
  };

  return { navigate };
} 