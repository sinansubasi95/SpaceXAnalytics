import React, { useState } from 'react';

import Sidebar from '../../organisms/Sidebar';

import { MenuIcon } from '@heroicons/react/outline';

export default function MainTemplate() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isMobile={true}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Start main area*/}
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
              <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
            </div>
            {/* End main area */}
          </main>
          <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
            {/* Start secondary column (hidden on smaller screens) */}
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
              <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
            </div>
            {/* End secondary column */}
          </aside>
        </div>
      </div>
    </div>
  );
}
