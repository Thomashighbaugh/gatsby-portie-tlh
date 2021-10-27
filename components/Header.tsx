import React from 'react';

import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

const Header = (): JSX.Element => {
  return (
    <>
      <header className="bg-opacity-95 rounded-b-lg bg-gray-50 dark:bg-opacity-75 border-b-4  border-gray-400 dark:border-gray-50 dark:bg-gray-900 ">
        <div className="px-8">
          <div className="flex items-center justify-between py-1">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
