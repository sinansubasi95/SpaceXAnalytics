import { makeAutoObservable } from 'mobx';
import { CalendarIcon } from '@heroicons/react/outline';
import { INavigationList, ICategorizedNavigationList } from '../interfaces/ui';

// MobX implementation
class navigationStore {
  primaryNavigation: INavigationList[] = [
    {
      name: 'Overview',
      href: '/',
      icon: CalendarIcon,
      current: true,
      exact: true,
    },
    {
      name: 'Upcoming Launches',
      href: '/launches/upcoming-launches',
      icon: CalendarIcon,
      current: true,
      exact: false,
    },
    {
      name: 'Past Launches',
      href: '/launches/past-launches',
      icon: CalendarIcon,
      current: false,
      exact: false,
    },
    // { name: "Statistics", href: "/launches/statistics", icon: ChartBarIcon, current: false },
  ];
  secondaryNavigation: ICategorizedNavigationList[] = [
    {
      heading: 'vehicles',
      list: [
        {
          name: 'Rockets',
          href: '/vehicles/rockets',
          current: false,
          exact: true,
        },
        { name: 'Ships', href: '/vehicles/ships', current: false, exact: true },
        { name: 'Cores', href: '/vehicles/cores', current: false, exact: true },
        {
          name: 'Capsules',
          href: '/vehicles/capsules',
          current: false,
          exact: true,
        },
      ],
    },
  ];
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  activateLink(activateHref: string) {
    this.primaryNavigation.map((link) => {
      if (link.exact) {
        if (link.href !== activateHref) {
          link.current = false;
        } else {
          link.current = true;
        }
      } else {
        if (!activateHref.includes(link.href)) {
          link.current = false;
        } else {
          link.current = true;
        }
      }
    });

    this.secondaryNavigation.forEach((category) => {
      category.list.map((link) => {
        if (link.exact) {
          if (link.href !== activateHref) {
            link.current = false;
          } else {
            link.current = true;
          }
        } else {
          if (!activateHref.includes(link.href)) {
            link.current = false;
          } else {
            link.current = true;
          }
        }
      });
    });
  }
}

export default navigationStore;
