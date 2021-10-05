import { IPastLaunchesQuery } from "../gql/IPastLaunchesQuery";

export interface ILaunchesPanel {
    heading: string;
    list: Array<IPastLaunchesQuery>
};