import clsx from 'clsx';
import moment from 'moment';
import { ILaunchesPanel } from '../../interfaces/ui/ILaunchesPanel';

/*
https://www.usingenglish.com/forum/threads/54795-It-this-is-the-first-time
https://www.youtube.com/watch?v=Miock1yWkCQ
https://github.com/leighhalliday/urql-demo/blob/main/src/urqlClient.js
https://github.com/benawad/dogehouse/blob/584055ad407bc37fa35cdf36ebb271622e29d436/kibbeh/src/modules/user/UserPage.tsx#L15
https://www.google.com/search?q=urql+example+reddit&rlz=1C1GCEU_trTR968TR968&ei=V6BVYcTgL9HzkwWR64SYBA&oq=urql+example+reddit&gs_lcp=Cgdnd3Mtd2l6EAMyBwghEAoQoAE6BwgAEEcQsAM6BQghEKABSgQIQRgAUL1nWKxsYOJsaAJwAngAgAGjAYgBsQWSAQMwLjWYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwiE6I3vzKbzAhXR-aQKHZE1AUMQ4dUDCA4&uact=5
https://formidable.com/open-source/urql/docs/basics/react-preact/#pausing-usequery


https://www.reddit.com/r/graphql/comments/o0m5bz/urql_query_component_example/
https://www.reddit.com/r/reactjs/comments/m6mftl/urql_or_reactquery/
https://www.reddit.com/r/graphql/comments/mcwpma/what_to_return_in_graphql_operations_to_optimize/
https://atlassian.design/components/button/examples
https://blog.openreplay.com/redux-is-dead-long-live-redux-toolkit
https://old.reddit.com/r/reactjs/
*/

// https://www.graphql-code-generator.com/docs/plugins/typescript-urql
// https://github.com/not-stirred
// https://stackoverflow.com/questions/38527759/how-to-check-for-broken-images-in-react-js
// https://www.youtube.com/watch?v=1PVrZNi3sb8
// https://github.com/leighhalliday/apollo-generating-types
// https://the-guild.dev/blog/graphql-codegen-best-practices
// generate typescript types for urql

// --- NEW ---
// https://www.youtube.com/watch?v=1PVrZNi3sb8
// https://github.com/dotansimha/graphql-code-generator
// https://www.graphql-code-generator.com/docs/getting-started/index
// https://formidable.com/open-source/urql/docs/graphcache/schema-awareness/
// https://github.com/benawad/lireddit/tree/master/web/src

/*
  THIS: https://www.youtube.com/watch?v=I6ypD7qv3Z8&t=8301s&ab_channel=BenAwad
*/

// Make this component reusable
// use urql
const LaunchesPanel = (props: ILaunchesPanel) => {
  return (
    <div className="relative flex flex-col h-full border-r-2 bg-chinese-black-800 border-jet w-128">
      <div className="flex-shrink-0">
        <div className="flex flex-col justify-center flex-shrink-0 h-16 px-6 font-medium border-b-2 border-jet bg-eerie-black">
          <h2 className="text-lg text-anti-flash-white">{props.heading}</h2>
        </div>
        {/* <div className="px-6 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50">
          Sorted by date
        </div> */}
      </div>
      <nav
        aria-label="Message list"
        className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar scrollbar-thumb-dim-gray scrollbar-track-arsenic"
      >
        <ul className="border-b border-gray-200 divide-y divide-jet">
          {props?.launches?.launchesPast?.map((launch) => (
            <li
              key={launch?.id}
              className="relative px-6 py-5 bg-eerie-black hover:bg-black"
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
                  <a
                    href={`/launches/past-launches/${launch?.id}`}
                    className="flex flex-col justify-between min-h-full focus:outline-none"
                  >
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

export default LaunchesPanel;
