import { makeAutoObservable } from "mobx";
import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { NavigationListT, CategorizedNavigationListT } from "../types";

// MobX implementation
class navigationStore {
  primaryNavigation: NavigationListT[] = [
    { name: "Overview", href: "/", icon: CalendarIcon, current: true },
    { name: "Upcoming Launches", href: "/launches/upcoming-launches", icon: CalendarIcon, current: true },
    { name: "Past Launches", href: "/launches/past-launches", icon: CalendarIcon, current: false },
    // { name: "Statistics", href: "/launches/statistics", icon: ChartBarIcon, current: false },
  ];
  secondaryNavigation: CategorizedNavigationListT[] = [
    {
      heading: "vehicles",
      list: [
        { name: "Rockets", href: "/vehicles/rockets", current: true },
        { name: "Ships", href: "/vehicles/ships", current: false },
        { name: "Cores", href: "/vehicles/cores", current: false },
        { name: "Capsules", href: "/vehicles/capsules", current: false },
      ],
    },
  ];
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  activateLink(activateHref: string) {
    this.primaryNavigation.map(link => {
      if(link.href !== activateHref) {
        link.current = false;
      } else {
        link.current = true;
      }
    })

    this.secondaryNavigation.forEach(category => {
      category.list.map(link => {
        if(link.href !== activateHref) {
          link.current = false;
        } else {
          link.current = true;
        }
      })
    })
  }
}

export default navigationStore;