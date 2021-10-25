import React from 'react';
import { ILaunchTable } from '../../interfaces/ui/ILaunchTable';
import moment from 'moment';

export const LaunchTable = ({ data }: ILaunchTable) => {
  return (
    <table className="min-w-full border-collapse table-auto">
      <thead className="font-medium border-2 text-metallic-silver bg-onyx border-chinese-black-900">
        <tr>
          <th scope="col" colSpan={2} className="px-4 py-2 text-sm text-left ">
            General Launch Informations
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Launched(UTC)
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            {moment(data?.launch_date_utc).format('LLLL')}
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Location
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            {data?.launch_site?.site_name_long}
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Mission
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            {data?.mission_name}
          </td>
        </tr>
        {data?.rocket?.second_stage?.payloads?.map((item, i) => (
          <tr key={i}>
            <th
              scope="row"
              className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
            >
              Payload Orbit - {i + 1}
            </th>
            <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
              {item?.orbit}
            </td>
          </tr>
        ))}
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Launch Status
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            {data?.launch_success ? 'SUCCESS' : 'FAILURE'}
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Rocket
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            {data?.rocket?.rocket_name}
          </td>
        </tr>
        {data?.rocket?.first_stage?.cores?.map((item, i) => (
          <>
            <tr key={i}>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Booster - {i + 1}
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {item?.core?.id}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Booster Landing - {i + 1}
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {item?.land_success ? 'SUCCESS' : 'FAILURE'}
              </td>
            </tr>
          </>
        ))}
        {/* <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Landing Location
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            LZ1
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

// https://tailwindcss.com/docs/table-layout
// https://tailwindui.com/components/application-ui/lists/tables
