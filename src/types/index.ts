// use interface
// somehow seperate api types and ui types
// use interface instead of type?
// learn what declare is and its advantages

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