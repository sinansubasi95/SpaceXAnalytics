import { ResponsivePie } from '@nivo/pie';

export const PieChartCard = ({ title, description, data, legends, total }: any) => {
  return (
    <div className="overflow-hidden border-2 rounded-md border-chinese-black-900 bg-gunmetal">
      <div className="px-5 py-3 border-b-2 bg-gunmetal border-chinese-black-900">
        {/* <h2 className="mb-3 font-normal text-md text-anti-flash-white"> */}
        <h2 className="mb-3 font-normal text-md text-teal-deer">{title}</h2>
        <p className="text-base font-normal text-anti-flash-white">
          {description}
        </p>
      </div>
      <div className="p-5">
        <div className="relative h-72">
          <div className="absolute text-lg font-normal text-center transform left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 text-anti-flash-white">
            <div className="mb-2 text-4xl">{total}</div>
            <div>In Total</div>
          </div>
          <ResponsivePie
            data={data}
            innerRadius={0.75}
            padAngle={0}
            colors={{ scheme: 'purple_blue' }}
            borderColor={{ theme: 'background' }}
            enableArcLinkLabels={false}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 3]],
            }}
            isInteractive={true}
            animate={false}
          />
        </div>
      </div>
      <div className="px-5 py-3 border-t-2 bg-gunmetal border-chinese-black-900">
        {/* <h2 className="mb-3 font-normal text-md text-anti-flash-white"> */}
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {legends.map((legend: any) => (
            <div className="flex items-center gap-x-2">
              <div
                className="w-3 h-3"
                style={{ backgroundColor: legend.color }}
              />
              <span className="text-sm font-normal text-anti-flash-white">
                {legend.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
