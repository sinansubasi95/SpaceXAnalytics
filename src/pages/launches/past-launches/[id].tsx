import { ThreeColumnLayout } from '../../../components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '../../../components/Panel';
import { useQuery } from 'urql';
import { LaunchAndPastLaunchesDocument } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { LaunchTable } from '../../../components/Table';

export default function PastLaunches() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useQuery({
    query: LaunchAndPastLaunchesDocument,
    variables: { launchID: id, pastLaunchesLimit: 0 },
  });

  const { data, fetching, error } = result;

  console.log(data);

  // Use same layout for fetching and error
  if (fetching) return 'Fetching';
  if (error) return 'Error';

  return (
    <ThreeColumnLayout
      ui={{
        content: {
          heading: 'Starlink-9 (v1.0) & BlackSky Global 5-6',
        },
      }}
      leftPanel={
        <LaunchesPanel
          ui={{
            heading: 'Past Launches',
            path: '/launches/past-launches',
            id: typeof id === 'string' ? id : '',
          }}
          data={data?.launchesPast}
        />
      }
    >
      <LaunchTable data={data?.launch} />
    </ThreeColumnLayout>
  );
}
