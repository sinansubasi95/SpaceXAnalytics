import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import logoImg from '../../assets/logo-textless.svg';

import { useStores } from '../../stores';
import { observer } from 'mobx-react';
import { SidebarWithSecondaryNavigation } from '../Sidebar';
import { LayoutProps } from '../../types';
import { Logo } from '../Logo';

// define function like defining varible
// keep related components in same folder?
// Formidable - RENATUR - physics based animation https://formidable.com/open-source/renature/
// Formidable - VICTORY - modular charting and data visualization https://formidable.com/open-source/victory/
// https://github.com/leighhalliday/urql-demo
// apollo-graphql
// Pass Multiple Children to a React Component with params
export const ThreeColumnLayout = observer((props: LayoutProps) => {
  const { sidebarStore } = useStores();

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Specific compatible layouts which you can change */}
      <SidebarWithSecondaryNavigation />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <Logo src={logoImg} />
            </div>
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md hover:text-gray-900"
                onClick={() =>
                  sidebarStore.toggleSidebar(!sidebarStore.isActive)
                }
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-0 flex flex-1 overflow-hidden">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            {/* Start main area*/}
            <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
              <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
            </div>
            {/* End main area */}
          </main>
          <aside className="relative flex-shrink-0 hidden border-r border-gray-200 xl:order-first xl:flex xl:flex-col w-96">
            {/* Start secondary column (hidden on smaller screens) */}
            <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
              <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
            </div>
            {/* End secondary column */}
          </aside>
        </div>
      </div>
    </div>
  );
});
