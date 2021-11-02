export const HorizontalTable = ({ title, columns, data }: any) => {
  const renderRows = (): any => {
    return columns.map((column: any) => {
      const renderValues = (): any => {
        return data.map((item: any) => (
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            {item[column.accessor]}
          </td>
        ));
      };

      return (
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            {column.Header}
          </th>
          {renderValues()}
        </tr>
      );
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col justify-center flex-shrink-0 mb-3 font-medium">
        <h2 className="text-base text-anti-flash-white">{title}</h2>
      </div>
      <table className="min-w-full mb-3 border-collapse table-auto">
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};
