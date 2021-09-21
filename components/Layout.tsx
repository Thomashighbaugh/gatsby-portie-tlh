import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { Email, GitHub, Twitter } from './Icons';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://thomasleonhighbaugh.me';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 min-h-screen mx-auto">
          {children}
        </div>
      </main>
      <footer className="py-8 flex items-center justify-between py-6">
        <div className="px-8 mx-auto">
          <a
            className="text-gray-500 dark:text-gray-50"
            href="https://github.com/Thomashighbaugh"
          >
            Thomas Leon Highbaugh
          </a>
          <a
            href="https://github.com/Thomashighbaugh/Personal-Site/LICENSE"
            className="mx-2"
          >
            {' '}
            &copy;2021{' '}
          </a>
        </div>
        <div className="">
          <a className="mx-3" href="https://github.com/Thomashighbaugh">
            <GitHub />
          </a>
          <a className="mx-3" href="https://twitter.com/thomashighbaugh">
            <Twitter />
          </a>
          <a className="mx-3" href="mailto:thighbaugh@zoho.com">
            <Email />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
