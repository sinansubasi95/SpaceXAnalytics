import { LaunchesPastQuery } from "../../generated/graphql";

export interface ILaunchesPanel {
    heading: string;
    launches: LaunchesPastQuery['launchesPast']
};

// check types on runtime