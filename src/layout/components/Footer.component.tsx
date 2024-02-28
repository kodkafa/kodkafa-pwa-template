import { NavLink } from 'react-router-dom';
import { useNavigation } from '@/hooks';
import Version from '@/layout/components/Version.component';

interface Props {
  className: string;
}

export default function Footer({ className = '' }: Props) {
  const navigation = useNavigation('footer');

  return (
    <footer className={`layout-footer ${className}`}>
      <div className='flex flex-col gap-y-4 gap-x-0 justify-center sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-6 text-xs'>
        {navigation.map((i) => (
          <NavLink to={i.to} key={i.to}>
            {i.text}
          </NavLink>
        ))}
      </div>
      <Version />
    </footer>
  );
}
