import { ThreeColumnLayout } from '../../components/Layout/ThreeColumnLayout';
import LaunchesPanel from '../../components/Panel/LaunchesPanel';
import { useQuery } from 'urql';
import { client, ssrCache } from '../../utils/createUrqlClient';

const PastLaunchesQuery = `
  query launchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      links {
        mission_patch
      }
      id
      details
    }
  }
`;

export default function PastLaunches() {
  const [result] = useQuery({
    query: PastLaunchesQuery,
    variables: { limit: 0 },
  });

  const { data, fetching, error } = result;

  if (fetching) return 'Fetching';
  if (error) return 'Error';

  return (
    <ThreeColumnLayout
      leftPanel={
        <LaunchesPanel heading="Past Launches" list={data.launchesPast} />
      }
    >
      <div>test</div>
    </ThreeColumnLayout>
  );
}
