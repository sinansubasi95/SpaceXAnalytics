import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import logoImg from '../../assets/logo.svg';
import { Logo } from '../Logo';
import { useStores } from '../../stores';
import { observer } from 'mobx-react';
import { XIcon } from '@heroicons/react/outline';
import { DesktopNav, MobileNav } from '../Navigation';

export const SidebarWithSecondaryNavigation = observer(() => {
  const { sidebarStore } = useStores();

  return (
    <>
      <Transition.Root show={sidebarStore.isActive} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex lg:hidden"
          open={sidebarStore.isActive}
          onClose={() => sidebarStore.toggleSidebar(!sidebarStore.isActive)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() =>
                      sidebarStore.toggleSidebar(!sidebarStore.isActive)
                    }
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <Logo src={logoImg} />
                </div>
                <div className="flex flex-col flex-grow mt-5">
                  <MobileNav />
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 h-0 bg-gray-100 border-r border-gray-200">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
              <div className="flex items-center flex-shrink-0 px-4">
                <Logo src={logoImg} />
              </div>
              <div className="flex flex-col flex-grow mt-5">
                <DesktopNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

// export default observer(SidebarWithSecondaryNavigation);
