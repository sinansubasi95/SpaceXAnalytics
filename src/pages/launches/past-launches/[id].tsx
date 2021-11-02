import { useQuery } from 'urql';
import { LaunchAndPastLaunchesDocument } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { ThreeColumnLayout } from '@/components/Layout';
import { LaunchesPanel } from '@/components/Panel';
import { LaunchContent } from '@/components/Content';
import { LoadingLaunchesPanel } from '@/components/Loading';
import { LoadingLaunchTable } from '@/components/Loading';

export default function PastLaunches() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useQuery({
    query: LaunchAndPastLaunchesDocument,
    variables: { launchID: id, pastLaunchesLimit: 0 },
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
            heading: 'Past Launches',
            path: '/launches/past-launches',
            id: typeof id === 'string' ? id : '',
          }}
          data={data?.launchesPast}
        />
      }
    >
      <LaunchContent data={data?.launch} />
    </ThreeColumnLayout>
  );
}
