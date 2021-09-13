export type LayoutT = {
    mainContent: React.ReactElement;
    secondaryColumn: React.ReactElement;
    // list
    // details
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