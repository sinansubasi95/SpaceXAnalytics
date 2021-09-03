import React from 'react';
import { PageContainer, ContentContainer } from './style';

import Sidebar from '../../Sidebar';

import { MenuIcon } from '@heroicons/react/outline';

import store from '../../../store';
import { IconButton } from '../../Button';

//  aynı siteyi bir de classları kullanarak yapmayı dene(?), fakat react artık class kullanımını önermiyor ve bu yüzden yaygın olarak kullanılmıyor.
export default function MainLayout({children}: any) {
  return (
    <PageContainer>
      {/* <Sidebar showMobile={true} showDesktop={true} */}
      <Sidebar isMobile={true} />

      <Sidebar isMobile={false} />

    {/* Burayı past-launches sayafsına taşı */}
      <ContentContainer>
        {/* HamburgerButtonContainer */}
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <IconButton size="medium" icon={<MenuIcon className="h-4 w-4" aria-hidden="true"/>}/>
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
      </ContentContainer>
    </PageContainer>
  );
}
