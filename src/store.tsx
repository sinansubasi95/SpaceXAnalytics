import { makeAutoObservable } from "mobx";

// MobX implementation
class NavUI {
    isActive: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleNav() {
        this.isActive = !this.isActive;
    }
}

const store = new NavUI();

export default store;