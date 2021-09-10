import { makeAutoObservable } from 'mobx';

// MobX implementation
class sidebarStore {
  isActive: boolean = false;
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  toggleSidebar(state: boolean) {
    this.isActive = state;
  }
}

export default sidebarStore;
