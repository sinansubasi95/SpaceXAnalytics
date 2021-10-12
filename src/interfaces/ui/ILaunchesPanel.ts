import {
  LaunchesPastQuery,
  LaunchesUpcomingQuery,
} from '../../generated/graphql';

export interface ILaunchesPanel {
  heading: string;
  data:
    | LaunchesPastQuery['launchesPast']
    | LaunchesUpcomingQuery['launchesUpcoming'];
}
