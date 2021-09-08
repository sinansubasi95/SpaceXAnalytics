import { makeAutoObservable } from "mobx";

// MobX implementation
class SidebarStore {
    isActive: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleSidebar(state: boolean) {
        this.isActive = state;
    }
}

const store = new SidebarStore();

export default store;