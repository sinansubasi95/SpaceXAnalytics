// use interface
// somehow seperate api types and ui types
// use interface instead of type?
// learn what declare is and its advantages
// references:
// https://github.com/itchio/itch/tree/f88c47b9db45882872f3ad2d647c83b702ae4584/typings
// https://github.com/railsware/upterm/tree/master/typings
// https://github.com/tsedio/tsed/tree/production/packages/core
// https://github.com/zvikfir/MyWay-client
// https://www.typescriptlang.org/docs/handbook/2/generics.html

export type LayoutT = {
    leftPanel: React.ReactElement;
    children: React.ReactElement;
};

export type NavigationListT = {
    name: string;
    href: string;
    icon?: any;
    current: boolean;
};

export type CategorizedNavigationListT = {
    heading: string;
    list: Array<NavigationListT>;
};


export type LogoT = {
    src: string;
};