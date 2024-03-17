"use client";

import { nprogress } from 'next-transition-bar';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const LoadingBar = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        nprogress.done();
        return () => {
            nprogress.start();
        };
    }, [pathname, searchParams]);

    return (
        <>{children}</>
    )
}
