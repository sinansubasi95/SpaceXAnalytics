import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Navigation from '../../molecules/navigation';

interface ISidebarProps {
  isMobile?: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ isMobile }) => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
