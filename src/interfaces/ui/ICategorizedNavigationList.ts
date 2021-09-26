import { INavigationList } from ".";

export interface ICategorizedNavigationList {
    heading: string;
    list: Array<INavigationList>
};