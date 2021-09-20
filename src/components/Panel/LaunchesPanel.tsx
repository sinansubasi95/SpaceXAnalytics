const messages = [
  {
    id: '108',
    mission_name: 'Sentinel-6 Michael Freilich',
    rocket: {
      rocket_name: 'Falcon 9',
    },
    launch_date_utc: '2020-11-21T17:17:00.000Z',
    launch_success: true,
    details:
      'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.',
    links: {
      mission_patch:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/SpaceX_CRS-6_Patch.png',
    },
  },
  {
    id: '107',
    mission_name: 'Crew-1',
    rocket: {
      rocket_name: 'Falcon 9',
    },
    launch_date_utc: '2020-11-16T00:27:00.000Z',
    launch_success: true,
    details:
      "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011.",
    links: {
      mission_patch:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/SpaceX_CRS-6_Patch.png',
    },
  },
  {
    id: '106',
    mission_name: 'GPS III SV04 (Sacagawea)',
    rocket: {
      rocket_name: 'Falcon 9',
    },
    launch_date_utc: '2020-11-05T23:24:00.000Z',
    launch_success: true,
    details:
      'SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.',
    links: {
      mission_patch:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/SpaceX_CRS-6_Patch.png',
    },
  },
  {
    id: '105',
    mission_name: 'Starlink-14 (v1.0)',
    rocket: {
      rocket_name: 'Falcon 9',
    },
    launch_date_utc: '2020-10-24T15:31:00.000Z',
    launch_success: true,
    details:
      'This mission will launch the fourteenth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Kennedy Space Center. It is the fifteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI.',
    links: {
      mission_patch:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/SpaceX_CRS-6_Patch.png',
    },
  },
  {
    id: '105',
    mission_name: 'Starlink-14 (v1.0)',
    rocket: {
      rocket_name: 'Falcon 9',
    },
    launch_date_utc: '2020-10-24T15:31:00.000Z',
    launch_success: true,
    details:
      'This mission will launch the fourteenth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Kennedy Space Center. It is the fifteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI.',
    links: {
      mission_patch:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/SpaceX_CRS-6_Patch.png',
    },
  },
  {
    id: '105',
    mission_name: 'Starlink-14 (v1.0)',
    rocket: {
      rocket_name: 'Falcon 9',
    },
    launch_date_utc: '2020-10-24T15:31:00.000Z',
    launch_success: true,
    details:
      'This mission will launch the fourteenth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Kennedy Space Center. It is the fifteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI.',
    links: {
      mission_patch:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/SpaceX_CRS-6_Patch.png',
    },
  },
];

const LaunchesPanel = () => {
  return (
    <div className="relative flex flex-col h-full bg-gray-100 border-r border-gray-200 w-128">
      <div className="flex-shrink-0">
        <div
          className="flex flex-col items-center justify-center flex-shrink-0 h-16 px-4 bg-center bg-no-repeat bg-cover"
          style={{
            background:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/launches.jpg) 50% 46% / 100% no-repeat',
          }}
        >
          <h2 className="text-lg uppercase text-anti-flash-white font-roboto-condensed">
            Past Launches
          </h2>
        </div>
        {/* <div className="px-6 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50">
          Sorted by date
        </div> */}
      </div>
      <nav aria-label="Message list" className="flex-1 min-h-0 overflow-y-auto">
        <ul className="border-b border-gray-200 divide-y divide-jet">
          {messages.map((message) => (
            <li
              key={message.id}
              className="relative px-6 py-5 bg-eerie-black hover:bg-black"
            >
              <div className="flex justify-between mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="rounded-full w-18 h-18"
                    src={message.links.mission_patch}
                    alt="mission patch"
                  />
                </div>
                <div className="min-w-0 min-h-full mr-auto">
                  <a
                    href={`/launches/past-launches/${message.id}`}
                    className="flex flex-col justify-between min-h-full focus:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-normal truncate text-quick-silver">
                      Flight {message.id}
                    </p>
                    <p className="text-lg font-medium leading-none truncate text-anti-flash-white">
                      {message.mission_name}
                    </p>
                    <time
                      dateTime={message.launch_date_utc}
                      className="flex-shrink-0 text-sm text-quick-silver"
                    >
                      {message.launch_date_utc}
                    </time>
                  </a>
                </div>
                <p className="flex-shrink-0 text-sm text-quick-silver whitespace-nowrap">
                  {message.rocket.rocket_name}
                </p>
              </div>
              <div className="mt-1">
                <p className="text-sm leading-6 text-anti-flash-white line-clamp-2">
                  {message.details.split(/\s+/).slice(0, 28).join(' ')}...
                </p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LaunchesPanel;
