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
  navigation: NavigationListT[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Teams', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Direchrefry', href: '#', icon: SearchCircleIcon, current: false },
    { name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
    { name: 'Office Map', href: '#', icon: MapIcon, current: false },
  ];
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default navigationStore;
