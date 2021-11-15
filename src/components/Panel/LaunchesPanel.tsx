import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import { ILaunchesPanel } from '@interfaces/ui/ILaunchesPanel';
import Link from 'next/link';

export const LaunchesPanel = ({ ui, data }: ILaunchesPanel) => {
  return (
    <div className="relative flex flex-col h-full border-r-2 bg-chinese-black-800 border-jet w-128">
      <div className="flex-shrink-0">
        <div className="flex flex-col justify-center flex-shrink-0 h-16 px-6 font-medium border-b-2 border-jet bg-eerie-black">
          <h2 className="text-lg text-anti-flash-white">{ui.heading}</h2>
        </div>
        {/* <div className="px-6 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50">
          Sorted by date
        </div> */}
      </div>
      <nav
        aria-label="Message list"
        className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar scrollbar-thumb-dim-gray scrollbar-track-arsenic"
      >
        <ul className="border-b-2 divide-y border-jet divide-jet">
          {data?.map((launch) => (
            <li
              key={launch?.id}
              className={clsx(
                launch?.id === ui?.id
                  ? 'relative px-6 py-5 bg-black'
                  : 'relative px-6 py-5 bg-eerie-black hover:bg-black'
              )}
            >
              <div
                className={clsx(
                  launch?.details !== null
                    ? 'flex justify-between h-18 mb-4'
                    : 'flex justify-between h-18'
                )}
              >
                {launch?.links?.mission_patch !== null && (
                  <div className="flex-shrink-0 mr-4">
                    <img
                      className="rounded-full w-18 h-18"
                      src={launch?.links?.mission_patch}
                      alt="mission patch"
                    />
                  </div>
                )}
                <div className="min-w-0 min-h-full mr-auto">
                  <Link href={`${ui.path}/${launch?.id}`}>
                    <a className="flex flex-col justify-between min-h-full focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-normal truncate text-quick-silver">
                        Flight {launch?.id}
                      </p>
                      <p className="text-lg font-medium leading-none truncate text-anti-flash-white">
                        {launch?.mission_name}
                      </p>
                      <time
                        dateTime={launch?.launch_date_utc}
                        className="flex-shrink-0 text-sm text-quick-silver"
                      >
                        {moment
                          .utc(launch?.launch_date_utc)
                          .format('DD.MM.YYYY, hh:mm')}
                      </time>
                    </a>
                  </Link>
                </div>
                <p className="flex-shrink-0 text-sm text-quick-silver whitespace-nowrap">
                  {launch?.rocket?.rocket_name}
                </p>
              </div>
              {launch?.details !== null && (
                <div className="mt-1">
                  <p className="text-sm leading-6 text-anti-flash-white line-clamp-2">
                    {launch?.details === null
                      ? ''
                      : `${launch?.details
                          ?.split(/\s+/)
                          ?.slice(0, 28)
                          ?.join(' ')}...`}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
