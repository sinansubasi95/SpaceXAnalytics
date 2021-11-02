import { useQuery } from 'urql';
import { LaunchAndUpcomingLaunchesDocument } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { ThreeColumnLayout } from '@/components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '@/components/Panel';
import { LaunchContent } from '@/components/Content';
import { LoadingLaunchesPanel } from '@/components/Loading';
import { LoadingLaunchTable } from '@/components/Loading';

export default function UpcomingLaunches() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useQuery({
    query: LaunchAndUpcomingLaunchesDocument,
    variables: { launchID: id, upcomingLaunchesLimit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) {
    return (
      <ThreeColumnLayout
        leftPanel={<LoadingLaunchesPanel ui={{ heading: 'Past Launches' }} />}
      >
        <LoadingLaunchTable />
      </ThreeColumnLayout>
    );
  }

  if (error) return 'Error';

  return (
    <ThreeColumnLayout
      ui={{
        content: {
          heading: data?.launch?.mission_name,
        },
      }}
      leftPanel={
        <LaunchesPanel
          ui={{
            heading: 'Upcoming Launches',
            path: '/launches/upcoming-launches',
            id: typeof id === 'string' ? id : '',
          }}
          data={data?.launchesUpcoming}
        />
      }
    >
      <LaunchContent data={data?.launch} />
    </ThreeColumnLayout>
  );
}
