import React from 'react';
import { SidebarLayout } from '../components/Layout/SidebarLayout';
import { ResponsivePie } from '@nivo/pie';

const cards = [
  { name: 'Account balance', href: '#', amount: '$30,659.45' },
  { name: 'Account balance', href: '#', amount: '$30,659.45' },
  { name: 'Account balance', href: '#', amount: '$30,659.45' },
  // More items...
];

const data = [
  {
    id: 'hack',
    label: 'hack',
    value: 352,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'scala',
    label: 'scala',
    value: 99,
    color: 'hsl(179, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 24,
    color: 'hsl(66, 70%, 50%)',
  },
  {
    id: 'rust',
    label: 'rust',
    value: 38,
    color: 'hsl(203, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 24,
    color: 'hsl(315, 70%, 50%)',
  },
];

export default function Index() {
  return (
    <SidebarLayout>
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center flex-shrink-0 mb-5 font-normal">
          <h2 className="uppercase text-md text-anti-flash-white">Shipment Metrics</h2>
        </div>
        <div className="grid gap-5 mt-2 grid-cols-auto-fit">
          {cards.map((card) => (
            <div
              key={card.name}
              className="overflow-hidden border-2 rounded-md border-chinese-black-900 bg-gunmetal"
            >
              <div className="px-5 py-3 border-b-2 bg-gunmetal border-chinese-black-900">
                {/* <h2 className="mb-3 font-normal text-md text-anti-flash-white"> */}
                <h2 className="mb-3 font-normal text-md text-teal-deer">
                  Active Shipments
                </h2>
                <p className="text-base font-normal text-anti-flash-white">With an ever-increasing launch cadence, SpaceX has surpassed other launch providers by annual vehicles launched and continues, nearly year-on-year, to set vehicle flight records.</p>
              </div>
              <div className="p-5">
                <div className="relative h-72">
                  <ResponsivePie
                    data={data}
                    innerRadius={0.75}
                    padAngle={0}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'purple_blue' }}
                    borderColor={{ theme: 'background' }}
                    enableArcLinkLabels={false}
                    arcLabelsTextColor={{
                      from: 'color',
                      modifiers: [['darker', 3]],
                    }}
                    isInteractive={false}
                    animate={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}
