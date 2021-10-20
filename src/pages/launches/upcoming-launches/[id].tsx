import { ThreeColumnLayout } from '../../../components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '../../../components/Panel';
import { useQuery } from 'urql';
import { LaunchesUpcomingDocument } from '../../../generated/graphql';
import { useRouter } from 'next/router';

export default function UpcomingLaunches() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useQuery({
    query: LaunchesUpcomingDocument,
    variables: { limit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) return 'Fetching';
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
      <div>{id}</div>
    </ThreeColumnLayout>
  );
}
