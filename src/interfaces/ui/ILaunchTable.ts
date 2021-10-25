import { LaunchAndPastLaunchesQuery } from '../../generated/graphql';

export interface ILaunchTable {
  data: LaunchAndPastLaunchesQuery['launch'];
}
