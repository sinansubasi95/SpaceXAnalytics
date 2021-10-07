import { LaunchesPastQuery } from "../../generated/graphql";

export interface ILaunchesPanel {
    heading: string;
    launches: LaunchesPastQuery;
};