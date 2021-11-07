import { ResponsiveBar } from '@nivo/bar';

export const BarChartCard = ({ title, description, data, legends, keys }: any) => {
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
          <ResponsiveBar
            data={data}
            enableGridX={true}
            enableGridY={false}
            layout="horizontal"
            keys={keys}
            indexBy="year"
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            valueFormat=" >-"
            colors={{ scheme: 'purple_blue' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'values',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'year',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            legends={[]}
            animate={false}
            role="application"
            isFocusable={true}
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
              return (
                e.id + ': ' + e.formattedValue + ' in year: ' + e.indexValue
              );
            }}
            theme={{
              axis: {
                ticks: {
                  line: {
                    stroke: '#555555',
                  },
                  text: {
                    fill: '#ffffff',
                  },
                },
                legend: {
                  text: {
                    fill: '#aaaaaa',
                  },
                },
              },
              grid: {
                line: {
                  stroke: '#555555',
                },
              },
            }}
            margin={{ top: 0, right: 0, bottom: 40, left: 45 }}
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
