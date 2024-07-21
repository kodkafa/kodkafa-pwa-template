import { ErrorBoundary } from '@/components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export { ErrorBoundary };

export function Component() {
  const { t } = useTranslation();
  return (
    <div className='p-4 w-full max-w-full xl:container mx-auto flex lg:flex-row flex-col items-stretch lg:items-center lg:justify-center'>
      <h1 className='grow flex items-center font-extrabold text-[10vw] leading-[.92em] dark:text-amber-50'>
        {t('KODKAFA PWA TEMPLATE')}
      </h1>
      <div className='w-full lg:w-auto lg:ml-8 min-w-[300px]'>
        <div className='lg:mt-0 mt-4'>
          <h2 className='font-semibold text-xl mb-4'>{t('WEB PWA TEMPLATE')}</h2>
          <div className='font-light text-lg'>
            <p>
              This is a Vite template that is built with REACT (PWA) + TAILWIND + TS from KODKAFA.
            </p>
            <p>You can start to create an HTML Canvas application easily with this template.</p>
          </div>
          <div className='my-8 lg:text-left text-center'>
            <Link to='/app' className='button button-red w-full'>
              {t('GO TO APP!')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Component.displayName = 'Landing.view';
