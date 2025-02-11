import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/components/providers/LoadingProvider';

export function usePageLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { stopLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, stopLoading]);
} 