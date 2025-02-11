"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/components/providers/LoadingProvider';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      startLoading();
    };

    const handleRouteChangeComplete = () => {
      stopLoading();
    };

    window.addEventListener('beforeunload', handleRouteChangeStart);
    window.addEventListener('load', handleRouteChangeComplete);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      window.removeEventListener('load', handleRouteChangeComplete);
    };
  }, [startLoading, stopLoading]);

  useEffect(() => {
    stopLoading();
  }, [pathname, searchParams, stopLoading]);

  return null;
} 