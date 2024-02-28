import { NavLink } from 'react-router-dom';
// import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Localization, ThemeSwitch } from '@/components';
import { Logo } from '@/layout/components/Logo.component';
import { useNavigation } from '@/hooks';
import { useState } from 'react';

interface Props {
  className: string;
}

export default function Header({ className = '' }: Props) {
  const { t } = useTranslation();
  const navigation = useNavigation('main');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`layout-header ${className}`}>
      <nav
        className='relative w-full xl:p-0 sm:flex sm:items-center sm:justify-between'
        aria-label={t('Global')}
      >
        <div className='flex items-center justify-between -mt-2 mb-2 sm:m-0'>
          <NavLink className='text-xl font-semibold flex' to='/' aria-label={t('Logo')}>
            <Logo className='h-8 md:h-10 ' />
          </NavLink>
          <div className='sm:hidden flex items-center justify-center gap-y-2'>
            <ThemeSwitch />
            <button
              type='button'
              className='p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle'
              aria-controls='navbar-collapse-with-animation'
              aria-label={t('Toggle navigation')}
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className='icon-menu text-2xl' />
            </button>
          </div>
        </div>
        <div className=' -mx-4 sm:m-0 grow overflow-hidden h-auto'>
          <div
            className={`flex flex-col sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-6 sm:mt-0 sm:pl-7
          bg-black/95 sm:bg-transparent 
           transition-transform transform duration-300 text-lg sm:text-sm
          ${isOpen ? '' : '-translate-y-full'} sm:translate-y-0`}
          >
            {navigation.map(({ text, to, ...i }, k) => (
              <NavLink
                key={k}
                to={to}
                className='py-3 px-4 border-t border-white/15 sm:border-0'
                onClick={() => setIsOpen(false)}
              >
                {i?.icon && <i className={i.icon} />}
                {text}
              </NavLink>
            ))}
            <div className='py-3 px-4 border-t border-white/15 flex items-end justify-end sm:hidden'>
              <Localization className='text-lg' />
            </div>
          </div>
        </div>

        <>
          <div className='whitespace-nowrap divide-x pl-2 hidden sm:block'>
            <ThemeSwitch />
          </div>
          <div className='whitespace-nowrap divide-x pl-2 hidden sm:block'>
            <Localization />
          </div>
        </>
      </nav>
    </header>
  );
}
