import React from 'react';
import { ILaunchContent } from '@/interfaces/ui';
import moment from 'moment';
import isNil from 'lodash/isNil';
import { HorizontalTable } from '../Table';
import { VerticalTable } from '../Table';

export const LaunchContent = ({ data }: ILaunchContent) => {
  return (
    <>
      <HorizontalTable
        title="Mission Overview"
        columns={[
          {
            header: 'Static Fire (UTC)',
            accessor: 'static_fire_date_utc',
            cell: (props: any) => props ? moment(props).format('LLLL') : null,
          },
          {
            header: 'Launched (UTC)',
            accessor: 'launch_date_utc',
            cell: (props: any) => props ? moment(props).format('LLLL') : null,
          },
          {
            header: 'Location',
            accessor: 'launch_site_name',
          },
          {
            header: 'Launch Status',
            accessor: 'launch_success',
            cell: (props: any) =>
              props ? 'SUCCESS' : isNil(props) || 'FAILURE',
          },
          {
            header: 'Details',
            accessor: 'details',
          },
        ]}
        data={[
          {
            static_fire_date_utc: data?.static_fire_date_utc,
            launch_date_utc: data?.launch_date_utc,
            launch_site_name: data?.launch_site?.site_name_long,
            launch_success: data?.launch_success,
            details: data?.details,
          },
        ]}
      />
      <HorizontalTable
        title="Rocket Used"
        columns={[
          {
            header: 'Rocket Name',
            accessor: 'rocket_name',
          },
          {
            header: 'Engine Type',
            accessor: 'rocket.engines.type',
          },
          {
            header: 'Engine Version',
            accessor: 'rocket.engines.version',
          },
          {
            header: 'Engine Number',
            accessor: 'rocket.engines.number',
          },
          {
            header: 'Engine Layout',
            accessor: 'rocket.engines.layout',
          },
          {
            header: 'Cost Per Launch',
            accessor: 'rocket.cost_per_launch',
          },
        ]}
        data={[data?.rocket]}
      />
      <VerticalTable
        title="Cores Used"
        columns={[
          {
            header: 'Core',
            accessor: 'core.id',
          },
          {
            header: 'Block',
            accessor: 'block',
          },
          {
            header: 'Landing Intent',
            accessor: 'landing_intent',
            cell: (props: any) => (props ? 'YES' : isNil(props) || 'NO'),
          },
          {
            header: 'Land Success',
            accessor: 'land_success',
            cell: (props: any) =>
              props ? 'SUCCESS' : isNil(props) || 'FAILURE',
          },
          {
            header: 'Landing Vehicle',
            accessor: 'landing_vehicle',
          },
          {
            header: 'Landing Type',
            accessor: 'landing_type',
          },
          {
            header: 'Reused',
            accessor: 'reused',
            cell: (props: any) => (props ? 'YES' : isNil(props) || 'NO'),
          },
          {
            header: 'Reuse Count',
            accessor: 'core.reuse_count',
          },
        ]}
        data={data?.rocket?.first_stage?.cores}
      />
      <VerticalTable
        title="Payloads"
        columns={[
          {
            header: 'Payload Type',
            accessor: 'payload_type',
          },
          {
            header: 'Payload Mass (KG)',
            accessor: 'payload_mass_kg',
          },
          {
            header: 'Manufacturer',
            accessor: 'manufacturer',
          },
          {
            header: 'Customers',
            accessor: 'customers',
            cell: (props: any) => props.join(),
          },
          {
            header: 'Nationality',
            accessor: 'nationality',
          },
          {
            header: 'Orbit',
            accessor: 'orbit',
          },
          {
            header: 'Reused',
            accessor: 'reused',
            cell: (props: any) => (props ? 'YES' : isNil(props) || 'NO'),
          },
        ]}
        data={data?.rocket?.second_stage?.payloads}
      />
    </>
  );
};
