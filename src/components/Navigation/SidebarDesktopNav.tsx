import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useStores } from '../../stores';

export const DesktopNav = () => {
  const { navigationStore } = useStores();

  return (
    <nav className="flex-1 mt-5" aria-label="Sidebar">
      <div className="px-2 space-y-1">
        {navigationStore.navigation.map((item: any) => (
          <Link key={item.name} href={item.href}>
            <a
              className={clsx(
                item.current
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className={clsx(
                  item.current
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};
