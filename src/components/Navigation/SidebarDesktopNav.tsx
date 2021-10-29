import React, { Fragment } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useStores } from '../../stores';
import { ICategorizedNavigationList, INavigationList } from '@/interfaces/ui';

export const DesktopNav = () => {
  const { navigationStore } = useStores();

  return (
    <nav className="flex-1 space-y-8 bg-chinese-black-800" aria-label="Sidebar">
      <div className="space-y-1">
        {navigationStore.primaryNavigation.map((item: INavigationList) => (
          <Link href={item.href} key={item.name}>
            <a
              className={clsx(
                item.current
                  ? 'bg-smoky-black border-anti-flash-white text-anti-flash-white'
                  : 'border-transparent text-ash-gray hover:bg-smoky-black hover:text-anti-flash-white',
                'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
              )}
              onClick={() => navigationStore.activateLink(item.href)}
            >
              <item.icon
                className={clsx(
                  item.current
                    ? 'text-anti-flash-white'
                    : 'text-ash-gray group-hover:text-anti-flash-white',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          </Link>
        ))}
      </div>
      <div className="space-y-1">
        {navigationStore.secondaryNavigation.map(
          (item: ICategorizedNavigationList) => (
            <Fragment key={item.heading}>
              <h3
                className="px-4 text-xs font-semibold tracking-wider uppercase text-dim-gray"
                id="projects-headline"
              >
                {item.heading}
              </h3>
              {item.list.map((item: INavigationList) => (
                <div
                  key={item.name}
                  className="space-y-1"
                  role="group"
                  aria-labelledby="projects-headline"
                >
                  <Link href={item.href} key={item.name}>
                    <a
                      href={item.href}
                      className={clsx(
                        item.current
                          ? 'bg-smoky-black border-anti-flash-white text-anti-flash-white'
                          : 'border-transparent text-ash-gray hover:bg-smoky-black hover:text-anti-flash-white',
                        'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
                      )}
                      onClick={() => navigationStore.activateLink(item.href)}
                    >
                      <span className="truncate">{item.name}</span>
                    </a>
                  </Link>
                </div>
              ))}
            </Fragment>
          )
        )}
      </div>
    </nav>
  );
};
