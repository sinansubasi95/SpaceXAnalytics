import { ThreeColumnLayout } from '../../../components/Layout/ThreeColumnLayout';
import { LaunchesPanel } from '../../../components/Panel';
import { useQuery } from 'urql';
import { LaunchesPastDocument } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { LaunchTable } from '../../../components/Table';

export default function PastLaunches() {
  const router = useRouter();
  const { id } = router.query;

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
          ui={{
            heading: 'Past Launches',
            path: '/launches/past-launches',
            id: typeof id === 'string' ? id : '',
          }}
          data={data?.launchesPast}
        />
      }
    >
      <LaunchTable/>
    </ThreeColumnLayout>
  );
}
