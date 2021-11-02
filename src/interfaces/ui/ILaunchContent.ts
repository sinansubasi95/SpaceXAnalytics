import { LaunchAndPastLaunchesQuery } from '../../generated/graphql';

export interface ILaunchContent {
  data: LaunchAndPastLaunchesQuery['launch'];
}
