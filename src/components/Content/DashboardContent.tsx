import { BarChartCard, PieChartCard } from '../Card';

export const DashboardContent = ({data}: any) => {
  return (
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center flex-shrink-0 mb-5 font-normal">
        <h2 className="uppercase text-md text-anti-flash-white">
            Launch statistics
        </h2>
      </div>
      <div className="grid gap-5 mt-5 grid-cols-auto-fit">
        <BarChartCard
          title="Booster Landings"
          description="SpaceX first achieved a successful landing and recovery of a first stage in December 2015 with Falcon 9 Flight 20. In April 2016, the company achieved the first successful landing on the ASDS Of Course I Still Love You in the Atlantic Ocean."
          data={data.boosterLandings}
        />

        <PieChartCard
          title="Customers"
          description="SpaceX is privately funded. SpaceX launched the first commercial mission for a private customer in 2013. SpaceX's low launch prices, especially for communication satellites flying to GTO, have resulted in market pressure on its competitors to lower their own prices."
          data={data.customers}
        />

        <PieChartCard
          title="Launch Sites"
          description="As of 2020, SpaceX operates four launch facilities: SLC-40, SLC-4E, LC-39A, and Starbase. Space Launch Complex 40 was damaged in the Amos-6 accident on September 2016 and repair work was completed by December 2017."
          data={data.launchSites}
        />
      </div>
      <div className="grid gap-5 mt-5 grid-cols-auto-fit">
        <BarChartCard
          title="Rocket Configurations"
          description="Several new technologies needed to be developed and tested to facilitate successful launch and recovery of the first stages of Falcon 9 and Falcon Heavy, and both stages of Starship. Since 2017, recovery and reuse of Falcon rocket boosters has become routine."
          data={data.rocketConfigurations}
        />

        <BarChartCard
          title="Launch Outcomes"
          description="Rockets from the Falcon 9 family have been launched 129 times over 11 years (2010-2021), resulting in 127 full mission successes (98.45%)."
          data={data.launchOutcomes}
        />
      </div>
    </div>
  );
};
