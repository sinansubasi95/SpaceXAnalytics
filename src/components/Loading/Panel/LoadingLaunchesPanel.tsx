import _ from 'lodash';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import Link from 'next/link';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ILoadingLaunchesPanel } from '@/interfaces/ui/ILoadingLaunchesPanel';

export const LoadingLaunchesPanel = ({ ui }: ILoadingLaunchesPanel) => {
  return (
    <div className="relative flex flex-col h-full border-r-2 bg-chinese-black-800 border-jet w-128">
      <div className="flex-shrink-0">
        <div className="flex flex-col justify-center flex-shrink-0 h-16 px-6 font-medium border-b-2 border-jet bg-eerie-black">
          <h2 className="text-lg text-anti-flash-white">{ui.heading}</h2>
        </div>
      </div>
      <nav
        aria-label="Message list"
        className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar scrollbar-thumb-dim-gray scrollbar-track-arsenic"
      >
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <ul className="border-b-2 divide-y border-jet divide-jet">
            {_.times(8, (i) => (
              <li key={i} className="relative px-6 py-5 bg-eerie-black">
                <div className="flex justify-between h-18">
                  <div className="flex-shrink-0 mr-4 h-18 w-18">
                    <Skeleton
                      circle={true}
                      containerClassName="min-w-0 min-h-full w-full"
                      className="w-full h-full"
                      style={{ display: 'block !important' }}
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full min-w-0 min-h-full mr-auto focus:outline-none">
                    <Skeleton
                      count={3}
                      containerClassName="min-w-0 min-h-full w-full"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm leading-6 text-anti-flash-white line-clamp-2">
                    <Skeleton count={3} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SkeletonTheme>
      </nav>
    </div>
  );
};
