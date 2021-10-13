import {
  LaunchesPastQuery,
  LaunchesUpcomingQuery,
} from '../../generated/graphql';

export interface ILaunchesPanel {
  ui: { heading: string; path: string; id?: string };
  data:
    | LaunchesPastQuery['launchesPast']
    | LaunchesUpcomingQuery['launchesUpcoming'];
}
