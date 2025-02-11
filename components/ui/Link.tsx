"use client";

import NextLink from 'next/link';
import { useNavigation } from '@/hooks/useNavigation';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className }: LinkProps) {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <NextLink href={href} onClick={handleClick} className={className}>
      {children}
    </NextLink>
  );
} 
