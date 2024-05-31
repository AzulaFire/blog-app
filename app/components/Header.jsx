'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/app/assets/images/logo.png';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/posts',
    label: 'Posts',
  },
  {
    href: '/create-post',
    label: 'Create Post',
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className='sticky top-0 bg-[#ff0022] flex justify-between items-center py-4 px-7 z-50'>
      <Link href='/'>
        <Image
          src={logo}
          alt='Logo'
          className='w-[45px] h-[45px]'
          width='45'
          height='45'
        />
      </Link>
      <nav>
        <ul className='flex gap-x-5 text-[14px]'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className={`${
                  pathName === link.href
                    ? 'text-zinc-900 font-semibold'
                    : 'text-white'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
