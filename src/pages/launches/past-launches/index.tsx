import { ThreeColumnLayout } from '@/components/Layout/ThreeColumnLayout';
import { LoadingLaunchesPanel } from '@/components/Loading/Panel/LoadingLaunchesPanel';
import { LaunchesPanel } from '@/components/Panel';
import React from 'react';
import { useQuery } from 'urql';
import { LaunchesPastDocument } from '../../../generated/graphql';

export default function PastLaunches() {
  const [result] = useQuery({
    query: LaunchesPastDocument,
    variables: { limit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) {
    return (
      <ThreeColumnLayout
        leftPanel={
          <LoadingLaunchesPanel
            ui={{ heading: 'Past Launches' }}
          />
        }
      >
        <div>Past Launch</div>
      </ThreeColumnLayout>
    );
  }

  if (error) return 'Error';

  return (
    <ThreeColumnLayout
      leftPanel={
        <LaunchesPanel
          ui={{
            heading: 'Past Launches',
            path: '/launches/past-launches',
          }}
          data={data?.launchesPast}
        />
      }
    >
      <div>Past Launch</div>
    </ThreeColumnLayout>
  );
}
