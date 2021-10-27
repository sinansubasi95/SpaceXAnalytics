import { ThreeColumnLayout } from '../../../components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '../../../components/Panel';
import { useQuery } from 'urql';
import { LaunchAndUpcomingLaunchesDocument } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { LaunchTable } from '../../../components/Table';

export default function UpcomingLaunches() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useQuery({
    query: LaunchAndUpcomingLaunchesDocument,
    variables: { launchID: id, upcomingLaunchesLimit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) return 'Fetching';
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
      <LaunchTable data={data?.launch} />
    </ThreeColumnLayout>
  );
}
