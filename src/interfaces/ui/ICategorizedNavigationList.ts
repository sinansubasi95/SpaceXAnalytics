import { INavigationList } from '@interfaces/ui';

export interface ICategorizedNavigationList {
  heading: string;
  list: Array<INavigationList>;
}
