import { useQuery } from 'urql';
import { LaunchesUpcomingDocument } from '../../../generated/graphql';
import { LoadingLaunchesPanel } from '@/components/Loading';
import { ThreeColumnLayout } from '@/components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '@/components/Panel';

export default function UpcomingLaunches() {
  const [result] = useQuery({
    query: LaunchesUpcomingDocument,
    variables: { limit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) {
    return (
      <ThreeColumnLayout
        leftPanel={<LoadingLaunchesPanel ui={{ heading: 'Upcoming Launches' }} />}
      >
        <div>Upcoming Launch</div>
      </ThreeColumnLayout>
    );
  }

  if (error) return 'Error';

  return (
    <ThreeColumnLayout
      leftPanel={
        <LaunchesPanel
          ui={{
            heading: 'Upcoming Launches',
            path: '/launches/upcoming-launches',
          }}
          data={data?.launchesUpcoming}
        />
      }
    >
      <div>Upcoming Launch</div>
    </ThreeColumnLayout>
  );
}
