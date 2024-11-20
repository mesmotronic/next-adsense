"use client";

import { FC, PropsWithChildren, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GoogleAdUnit: FC<PropsWithChildren> = ({ children }) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e: any) {
      console.log('[GoogleAdUnit]', e.toString());
    }
  }, [pathname, searchParams]);

  return <>{children}</>;

};

export default GoogleAdUnit;