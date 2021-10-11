import {ThreeColumnLayout} from '../../components/Layout/ThreeColumnLayout';
import LaunchesPanel from '../../components/Panel/LaunchesPanel';
import { useQuery } from 'urql';
import { LaunchesUpcomingDocument } from '../../generated/graphql';

export default function UpcomingLaunches() {
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
        <LaunchesPanel heading="Upcoming Launches" data={data?.launchesUpcoming} />
      }
    >
      <div>Upcoming Launch</div>
    </ThreeColumnLayout>
  )
}