import {ThreeColumnLayout} from '../../components/Layout/ThreeColumnLayout';
import LaunchesPanel from '../../components/Panel/LaunchesPanel';
import { useQuery } from 'urql';
import { client, ssrCache } from '../../utils/createUrqlClient';

// https://api.spacex.land/graphql/

const PastLaunchesQuery = `

  query launchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      id
      details
    }
  }

`;

// const PastLaunchesQuery = `
// {
//   launchesPast(limit: 1) {
//     mission_name
//     launch_date_utc
//     rocket {
//       rocket_name
//     }
//     id
//     details
//   }
// }
// `;

export default function PastLaunches() {
  const [result] = useQuery({
    query: PastLaunchesQuery,
    variables: { limit: 1 }
  });

  const {data, fetching, error} = result;

  if (fetching) return "Fetching";
  if (error) return "Error";

  console.log(JSON.stringify(data, null, 2));

  return (
    <ThreeColumnLayout leftPanel={<LaunchesPanel/>}>
      <div>test</div>
    </ThreeColumnLayout>
  )
}
