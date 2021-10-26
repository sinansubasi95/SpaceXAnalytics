import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { useStores } from '../../stores';
import { observer } from 'mobx-react';
import { SidebarWithSecondaryNavigation } from '../Sidebar';
import { IThreeColumnLayout } from '../../interfaces/ui';
import { Logo } from '../Logo';

// define function like defining variable?
// Formidable - RENATUR - physics based animation https://formidable.com/open-source/renature/
// Formidable - VICTORY - modular charting and data visualization https://formidable.com/open-source/victory/
// https://github.com/leighhalliday/urql-demo
// apollo-graphql
export const ThreeColumnLayout = observer((props: IThreeColumnLayout) => {
  const { sidebarStore } = useStores();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Specific compatible layouts which you can change */}
      <SidebarWithSecondaryNavigation />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-1.5">
            <div>
              <Logo src="/assets/logo-textless.svg" />
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
          {/*main content*/}
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            <div className="flex-shrink-0">
              <div className="flex flex-col justify-center flex-shrink-0 h-16 px-6 font-medium border-b-2 border-jet bg-eerie-black">
                <h2 className="text-lg text-anti-flash-white">{props?.ui?.content?.heading}</h2>
              </div>
            </div>
            <div className="inset-0 px-6 py-5">
              {props.children}
            </div>
          </main>
          {/* Start secondary column (hidden on smaller screens) */}
          <aside className="relative flex-shrink-0 hidden border-r border-gray-200 xl:order-first xl:flex xl:flex-col w-128">
            {props.leftPanel}
          </aside>
        </div>
      </div>
    </div>
  );
});
