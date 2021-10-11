import { LaunchesPastQuery } from "../../generated/graphql";

export interface ILaunchesPanel<T> {
    heading: string;
    data: T
};

// check types on runtime