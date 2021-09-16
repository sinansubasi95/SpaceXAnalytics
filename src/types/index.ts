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
    src: any;
};