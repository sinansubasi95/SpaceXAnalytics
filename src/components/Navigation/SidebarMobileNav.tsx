import React from 'react';
import clsx from 'clsx';
import { useStores } from '../../stores';
import { CategorizedNavigationListT, NavigationListT } from '../../types';

export const MobileNav = () => {
  const { navigationStore } = useStores();

  return (
    <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
      <div className="px-2 space-y-1">
        {navigationStore.primaryNavigation.map((item: NavigationListT) => (
          <a
            key={item.name}
            href={item.href}
            className={clsx(
              item.current
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
          >
            <item.icon
              className={clsx(
                item.current
                  ? 'text-gray-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'mr-4 h-6 w-6'
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>

      <div className="px-2 space-y-1">
        {navigationStore.secondaryNavigation.map((item: CategorizedNavigationListT) => (
          <React.Fragment key={item.heading}>
            <h3
              className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase"
              id="projects-headline"
            >
              {item.heading}
            </h3>
            {item.list.map((item: NavigationListT) => (
              <div
                key={item.name}
                className="space-y-1"
                role="group"
                aria-labelledby="projects-headline"
              >
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">{item.name}</span>
                </a>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
