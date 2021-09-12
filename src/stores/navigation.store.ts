import { makeAutoObservable } from 'mobx';
import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { NavigationListT } from '../types';

// MobX implementation
class navigationStore {
  primaryNavigation: NavigationListT[] = [
    { name: 'Upcoming Launches', href: '#', icon: HomeIcon, current: true },
    { name: 'Past Launches', href: '#', icon: CalendarIcon, current: false },
    { name: 'Statistics', href: '#', icon: UserGroupIcon, current: false },
  ];
  secondaryNavigation: NavigationListT[] = [
    { name: 'Rockets', href: '#', current: true },
    { name: 'Ships', href: '#', current: false },
    { name: 'Cores', href: '#', current: false },
    { name: 'Capsules', href: '#', current: false },
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