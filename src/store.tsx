import { makeAutoObservable } from "mobx";

// MobX implementation
class NavUI {
    isActive: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleNav(state: boolean) {
        this.isActive = state;
    }
}

const store = new NavUI();

export default store;