import React from "react";
import SidebarStore from "./sidebar.store";

class RootStore {
    sidebarStore: any;

    constructor() {
        this.sidebarStore = new SidebarStore(this)
    }
}

const StoresContext = React.createContext(new RootStore());

// this will be the function available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);