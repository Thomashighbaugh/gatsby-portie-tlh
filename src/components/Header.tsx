import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import colors from 'tailwindcss/colors';

import ContentWrapper from './ContentWrapper';

const NavLink: FunctionComponent<{
  href: string;
  text: string;
  hasActiveState?: boolean;
}> = ({ href, text, hasActiveState = false }) => {
  const router = useRouter();

  // TODO: Probably a better check to do here
  const isActive = router.pathname.includes(href);

  return (
    <Link href={href}>
      <a
        className={`no-underline text-lg hover:text-gray-600 font-semibold ${
          hasActiveState && isActive ? 'border-b-2 border-gray-600' : ''
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ContentWrapper>
      <nav className="flex flex-wrap items-center w-full text-lg mb-16 p-2 px-6 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75 border-b-2 border-gray-500 text-gray-500 dark:text-gray-50">
        <span className="flex-1 mr-4 ">
          <a href="/">
            {' '}
            <Image
              height="64"
              width="64"
              src="/images/logo.png"
              alt="logo"
              className=" mr-4 text-gray-500 dark:text-gray-50  transform rotate-0 hover:-rotate-22 transition-transform ease-linear "
            />
          </a>
        </span>

        <div className="mr-3 text-gray-500 dark:text-gray-50">
          <NavLink href="/blog" text="Blog" hasActiveState />
        </div>
        <div className="mr-3 text-gray-500 dark:text-gray-50">
          <NavLink href="/projects" text="Projects" hasActiveState />
        </div>
        <div className="mr-3 text-gray-500 dark:text-gray-50">
          <NavLink
            href="https://resume-thomas-leon-highbaugh.vercel.app/"
            text="Resume"
            hasActiveState
          />
        </div>
        <div
          className=" dark:text-gray-50 dark:border-gray-50 dark:bg-gray-800 p-2 bg-gray-50 text-gray-700 border-gray-700 border-2 rounded-lg   transform rotate-0 hover:-rotate-22 transition-transform ease-linear text-current "
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          title={
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {isMounted &&
            (theme === 'dark' ? (
              <Sun
                size="32"
                color={theme === 'dark' ? colors.white : colors.black}
              />
            ) : (
              <Moon size="32" />
            ))}
        </div>
      </nav>
    </ContentWrapper>
  );
};
