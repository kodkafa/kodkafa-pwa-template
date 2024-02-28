import { useTranslation } from 'react-i18next';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

type Props = {
  status?: number;
  name?: string;
  message?: string;
  stack?: object;
};
export function ErrorView(props: Props) {
  const error: Props | Error = useRouteError() || props;
  const { t } = useTranslation();
  console.log({ error });

  if (isRouteErrorResponse(error) || [401, 404, 418, 503].includes(Number(error?.status))) {
    if (error?.status === 404) {
      return (
        <div className='h-full w-full flex items-center justify-center'>
          <div className='text-center'>
            <div id='error-code' className='mb-4 text-5xl'>
              {error?.status}
            </div>
            <div className='mb-4 text-3xl'>{t('Page not found!')}</div>
            <div className=''>
              <Link to='/' className='button'>
                <i className='icon-left-open' />
                {t('Go back to home')}
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (error?.status === 401) {
      return (
        <div className='h-full flex items-center justify-center'>
          <div className='text-center'>
            <div id='error-code' className='mb-4 text-5xl'>
              {error?.status}
            </div>
            <div className='mb-4 text-3xl'>{t('You aren`t authorized to see this')}</div>
            <div className=''>
              <Link to='/' className='button'>
                <i className='icon-left-open' />
                {t('Go back to home')}
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (error?.status === 503) {
      return (
        <div className='h-full flex items-center justify-center'>
          <div className='text-center'>
            <div id='error-code' className='mb-4 text-5xl'>
              {error?.status}
            </div>
            <div className='mb-4 text-3xl'>{t('Looks like our API is down')}</div>
            <div className=''>
              <Link to='/' className='button'>
                <i className='icon-left-open' />
                {t('Go back to home')}
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (error?.status === 418) {
      return (
        <div className='h-full flex items-center justify-center'>
          <div className='text-center'>
            <div id='error-code' className='mb-4 text-5xl'>
              {error?.status}
            </div>
            <div className='mb-4 text-3xl'>{t('Tea time!')} 🫖</div>
            <div className=''>
              <Link to='/' className='button'>
                <i className='icon-left-open' />
                {t('Go back to home')}
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
  if (error instanceof Error)
    return (
      <div className='p-2 '>
        <div
          className='px-5 py-3 border-2 rounded-md border-red-500/80 bg-red-200/90 max-w-full mx-auto
        flex flex-col'
        >
          <div className='flex space-x-2 justify-between text-sm'>
            <div className='flex space-x-2'>
              <div className='font-semibold text-red-800'>{error?.name}</div>
              <div className='font-light '>{error?.message}</div>
            </div>
          </div>
          <div className='pt-2 text-xs font-mono'>
            <label className='font-semibold'>{t('Stack:')}</label>
            <pre className=' overflow-auto'>{error?.stack}</pre>
          </div>
        </div>
      </div>
    );
  else return <div>{JSON.stringify(error, null, 2)}</div>;
}
