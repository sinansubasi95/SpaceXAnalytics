import React from 'react';
import clsx from 'clsx';
import { useStores } from '../../stores';

export const MobileNav = () => {
  const { navigationStore } = useStores();

  return (
    <nav aria-label="Sidebar" className="mt-5">
      <div className="px-2 space-y-1">
        {navigationStore.navigation.map((item: any) => (
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
    </nav>
  );
};
