import React from 'react';
import { ILaunchTable } from '../../interfaces/ui/ILaunchTable';
import moment from 'moment';
import isNil from 'lodash/isNil';

export const LaunchTable = ({ data }: ILaunchTable) => {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col justify-center flex-shrink-0 mb-3 font-medium">
          <h2 className="text-base text-anti-flash-white">Mission Overview</h2>
        </div>
        <table className="min-w-full mb-3 border-collapse table-auto">
          {/* <thead className="font-medium border-2 text-metallic-silver bg-onyx border-chinese-black-900">
            <tr>
              <th
                scope="col"
                colSpan={2}
                className="px-4 py-2 text-sm text-left "
              >
                General Launch Information
              </th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Static Fire (UTC)
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {moment(data?.static_fire_date_utc).format('LLLL')}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Launched (UTC)
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
                Launch Status
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.launch_success ? 'SUCCESS' : isNil(data?.launch_success) || 'FAILURE'}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Details
              </th>
              <td className="w-10/12 px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.details}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-col justify-center flex-shrink-0 h-12 font-medium">
          <h2 className="text-base text-anti-flash-white">Rocket Used</h2>
        </div>
        <table className="min-w-full mb-3 border-collapse table-auto">
          <tbody>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Rocket Name
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.rocket?.rocket_name}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Engine Type
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.rocket?.rocket?.engines?.type}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Engine Version
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.rocket?.rocket?.engines?.version}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Engine Number
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.rocket?.rocket?.engines?.number}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Engine Layout
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.rocket?.rocket?.engines?.layout}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
              >
                Cost Per Launch
              </th>
              <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                {data?.rocket?.rocket?.cost_per_launch}$
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-col justify-center flex-shrink-0 h-12 font-medium">
          <h2 className="text-base text-anti-flash-white">Cores Used</h2>
        </div>
        <table className="min-w-full mb-3 border-collapse table-auto">
          <thead className="font-medium border-2 text-metallic-silver bg-onyx border-chinese-black-900">
            <tr>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Core
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Block
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Landing Intent
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Land Success
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Landing Vehicle
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Landing Type
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Reused
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Reuse Count
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.rocket?.first_stage?.cores?.map((item, i) => (
              <tr key={i}>
                <th
                  scope="row"
                  className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
                >
                  {item?.core?.id}
                </th>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.block}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.landing_intent ? 'YES' : isNil(item?.landing_intent) || 'NO'}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.land_success ? 'SUCCESS' : isNil(item?.land_success) || 'FAILURE'}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.landing_vehicle}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.landing_type}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.reused ? 'YES' : isNil(item?.reused) || 'NO'}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.core?.reuse_count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-col justify-center flex-shrink-0 h-12 font-medium">
          <h2 className="text-base text-anti-flash-white">Payloads</h2>
        </div>
        <table className="min-w-full mb-3 border-collapse table-auto">
          <thead className="font-medium border-2 text-metallic-silver bg-onyx border-chinese-black-900">
            <tr>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Payload Type
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Payload Mass (KG)
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Manufacturer
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Customers
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Nationality
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Orbit
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Reused
              </th>
              <th
                scope="col"
                colSpan={1}
                className="px-4 py-2 text-sm text-left"
              >
                Block
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.rocket?.second_stage?.payloads?.map((item, i) => (
              <tr key={i}>
                <th
                  scope="row"
                  className="px-4 py-2 text-sm font-medium text-left border-2 border-chinese-black-900 text-metallic-silver"
                >
                  {item?.payload_type}
                </th>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.payload_mass_kg}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.manufacturer}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.customers?.join()}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.nationality}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.orbit}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {item?.reused ? 'YES' : isNil(item?.reused) || 'NO'}
                </td>
                <td className="px-4 py-2 text-sm font-normal text-left border-2 border-chinese-black-900 text-metallic-silver">
                  {data?.rocket?.second_stage?.block}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};