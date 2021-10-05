export interface IPastLaunchesQuery {
    details: string;
    id: number;
    launch_date_utc: string;
    mission_name: string;
    rocket: IRocket;
    links: ILinks;
    __typename: string;
};

interface IRocket {
    rocket_name: string;
    __typename: string;
};

interface ILinks {
    mission_patch: string;
    __typename: string;
};