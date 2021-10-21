import React from 'react';

export const LaunchTable = () => {
  return (
    <table className="min-w-full border-collapse table-auto">
      <thead className="font-medium border-2 text-metallic-silver bg-onyx border-chinese-black-900">
        <tr>
          <th
            scope="col"
            colSpan={2}
            className="px-4 py-2 text-sm text-left "
          >
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
            30.07.2021 19:30:00
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
            CCAFS SLC-40
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
            Transporter-2
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Orbit
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            SSO
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Launch Status
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            SUCCESS
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
            Falcon 9
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Booster
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            B5 B1060.8
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Booster Landing
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            SUCCESS
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
          >
            Landing Location
          </th>
          <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
            LZ1
          </td>
        </tr>
      </tbody>
    </table>
  );
};

// https://tailwindcss.com/docs/table-layout
// https://tailwindui.com/components/application-ui/lists/tables
