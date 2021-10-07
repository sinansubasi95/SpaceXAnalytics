import { ThreeColumnLayout } from '../../components/Layout/ThreeColumnLayout';
import LaunchesPanel from '../../components/Panel/LaunchesPanel';
import { useQuery } from 'urql';
import { client, ssrCache } from '../../utils/createUrqlClient';
import { LaunchesPastDocument } from '../../generated/graphql';

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
        <LaunchesPanel heading="Past Launches" launches={data} />
      }
    >
      <div>test</div>
    </ThreeColumnLayout>
  );
}
