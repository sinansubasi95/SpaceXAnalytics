import {
  LaunchesPastQuery,
  LaunchesUpcomingQuery,
} from '../../generated/graphql';

export interface ILaunchesPanel {
  ui: {heading: string, path: string};
  data:
    | LaunchesPastQuery['launchesPast']
    | LaunchesUpcomingQuery['launchesUpcoming'];
}
