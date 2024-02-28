import { useTranslation } from 'react-i18next';
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function Reload() {
  const { t } = useTranslation();
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className='absolute top-0 right-0 w-full md:w-1/2 xl:w-1/3 z-50 xl:text-sm'>
      {(offlineReady || needRefresh) && (
        <div
          className='m-4 xl:m-2 p-4 xl:p-2 xl:pl-4 rounded-xl bg-amber-500 border-4 border-amber-600 shadow
        flex items-center justify-between'
        >
          <div className='font-semibold text-black'>
            {offlineReady ? (
              <span>{t('App ready to work offline')}</span>
            ) : (
              <span>{t('New content available, click on reload button to update.')}</span>
            )}
          </div>
          <div>
            {needRefresh ? (
              <button
                className='ml-4 button button-sm button-red'
                onClick={() => updateServiceWorker(true)}
              >
                {t('Reload')}
              </button>
            ) : (
              <button className='ml-4 button button-sm button-red' onClick={() => close()}>
                {t('Close')}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
