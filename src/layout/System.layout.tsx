import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CookieBanner from '@/layout/components/CookieBanner.component';
import Version from '@/layout/components/Version.component';
import ReloadPrompt from '@/layout/components/ReloadPrompt.component.tsx';
import { Analytics } from '@vercel/analytics/react';
import { LoadingFallback } from '@/layout/Loading.fallback.tsx';

export function SystemLayout() {
  return (
    <div className='h-full min-h-screen flex flex-col'>
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
        <CookieBanner />
        <Version />
        <ReloadPrompt />
        <Analytics />
      </Suspense>
    </div>
  );
}
