import { IVerticalTable } from '@/interfaces/ui';
import _ from 'lodash';

export const VerticalTable = ({ title, columns, data }: IVerticalTable) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col justify-center flex-shrink-0 h-12 font-medium">
        <h2 className="text-base text-anti-flash-white">{title}</h2>
      </div>
      <table className="min-w-full mb-3 border-collapse table-auto">
        <thead className="font-medium border-2 text-metallic-silver bg-onyx border-chinese-black-900">
          <tr>
            {columns.map((column: any, i: any) => (
              <th
                key={i}
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, i: any) => (
            <tr key={i}>
              {columns.map((column: any, i: any) => {
                const TableCellComponent = i === 1 ? `th` : `td`;

                return (
                  <TableCellComponent
                    key={i}
                    className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver"
                  >
                    {column.cell
                      ? column.cell(_.get(item, column.accessor))
                      : _.get(item, column.accessor)}
                  </TableCellComponent>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
