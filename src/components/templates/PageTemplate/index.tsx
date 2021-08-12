/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import Drawer from '../../organisms/drawer';
import Sidebar from '../../organisms/sidebar';
// import Navigation from '../components/molecules/navigation';

import { PageContainer, Wrapper } from './style';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PageTemplate() {
  // use state management library
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const PageTemplate = ({
  //   header, hero, sponsor, children, footer, ...props
  // }) => {
  //   return (
  //     <Wrapper {...props}>
  //       <Header>{header}</Header>
  //       {hero && <Hero>{hero}</Hero>}
  //       {sponsor && <Sponsor>{sponsor}</Sponsor>}
  //       <Content>{children}</Content>
  //       <Footer>{footer}</Footer>
  //     </Wrapper>
  //   )
  // }

  return (
    <Wrapper>
      <Drawer />
      <Sidebar />
      <PageContainer>
        {/* Hamburger */}
        {/* <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div> */}
        {/* Main Content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </PageContainer>
    </Wrapper>
  );
}
