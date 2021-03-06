import { IHorizontalTable } from '@interfaces/ui';
import _ from 'lodash';

export const HorizontalTable = ({ title, columns, data }: IHorizontalTable) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col justify-center flex-shrink-0 mb-3 font-medium">
        <h2 className="text-base text-anti-flash-white">{title}</h2>
      </div>
      <table className="min-w-full mb-3 border-collapse table-auto">
        <tbody>
          {columns.map((column, i) => (
            <tr key={i}>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                {column.header}
              </th>
              {data.map((item: any, i: any) => (
                <td
                  key={i}
                  className="w-10/12 px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver"
                >
                  {column.cell
                    ? column.cell(_.get(item, column.accessor))
                    : _.get(item, column.accessor)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
