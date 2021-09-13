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
    { name: "Upcoming Launches", href: "/launches/upcoming-launches", icon: CalendarIcon, current: true },
    { name: "Past Launches", href: "/launches/past-launches", icon: CalendarIcon, current: false },
    { name: "Statistics", href: "/launches/statistics", icon: ChartBarIcon, current: false },
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
}

export default navigationStore;

// navigation: NavigationListT[] = [
//   {
//     heading: "Launches",
//     icon: CalendarIcon,
//     links: [
//       { name: "Upcoming Launches", href: "#", current: true },
//       { name: "Past Launches", href: "#", current: false },
//       { name: "Statistics", href: "#", current: false },
//     ],
//   },
//   {
//     heading: "Vehicles",
//     icon: MapIcon,
//     links: [
//       { name: "Rockets", href: "#", current: false },
//       { name: "Ships", href: "#", current: false },
//       { name: "Cores", href: "#", current: false },
//       { name: "Capsules", href: "#", current: false },
//     ],
//   },
// ];
