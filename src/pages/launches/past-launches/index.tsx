import { ThreeColumnLayout } from '@/components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '@/components/Panel';
import { useQuery } from 'urql';
import { LaunchesPastDocument } from '../../../generated/graphql';

export default function PastLaunches() {
  const [result] = useQuery({
    query: LaunchesPastDocument,
    variables: { limit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) return 'Fetching';
  if (error) return 'Error';

  return (
    <ThreeColumnLayout
      leftPanel={
        <LaunchesPanel
          ui={{ heading: 'Past Launches', path: '/launches/past-launches' }}
          data={data?.launchesPast}
        />
      }
    >
      <div>Past Launch</div>
    </ThreeColumnLayout>
  );
}
