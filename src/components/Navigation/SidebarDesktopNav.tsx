import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useStores } from '../../stores';

export const DesktopNav = () => {
  const { navigationStore } = useStores();

  return (
    <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
      <div className="space-y-1">
        {navigationStore.primaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={clsx(
              item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
            )}
          >
            <item.icon
              className={clsx(
                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>
      <div className="space-y-1">
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
          Vehicles
        </h3>
        <div className="space-y-1" role="group" aria-labelledby="projects-headline">
          {navigationStore.secondaryNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>

    //     <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
    //   <div className="space-y-1">
    //     {navigationStore.navigation.map((item) => (
    //       <div className="mb-5">
    //         <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
    //           {item.heading}
    //         </h3>
    //         {item.links.map((item) => (
    //           <div className="space-y-1" role="group" aria-labelledby="projects-headline">
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
    //               >
    //                 <span className="truncate">{item.name}</span>
    //               </a>
    //           </div>
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    // </nav>

    // <nav className="flex-1 mt-5" aria-label="Sidebar">
    //   <div className="px-2 space-y-1">
    //     {navigationStore.navigation.map((item: any) => (
    //       <Link key={item.name} href={item.href}>
    //         <a
    //           className={clsx(
    //             item.current
    //               ? 'bg-gray-200 text-gray-900'
    //               : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
    //             'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
    //           )}
    //         >
    //           <item.icon
    //             className={clsx(
    //               item.current
    //                 ? 'text-gray-500'
    //                 : 'text-gray-400 group-hover:text-gray-500',
    //               'mr-3 h-6 w-6'
    //             )}
    //             aria-hidden="true"
    //           />
    //           {item.name}
    //         </a>
    //       </Link>
    //     ))}
    //   </div>
    // </nav>
  );
};
