import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { useStores } from '../../stores';
import { observer } from 'mobx-react';
import { SidebarWithSecondaryNavigation } from '../Sidebar';
import { ISidebarLayout } from '../../interfaces/ui';
import { Logo } from '../Logo';

export const SidebarLayout = observer((props: ISidebarLayout) => {
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
            <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
              {props.children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
});
