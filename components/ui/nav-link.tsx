'use client';

import { NavLinkT } from '@/types/nav-link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLink = ({ children, href }: NavLinkT) => {
  const path = usePathname();

  return (
    <Link href={href} className={path.includes(href) ? 'active' : ''}>
      {children}
    </Link>
  );
};
