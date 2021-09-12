export type LayoutProps = {
    side: React.ReactElement;
    main: React.ReactElement;
    // list
    // details
};

export type NavigationListT = {
    name: string;
    href: string;
    icon?: any;
    current: boolean;
};

export type LogoProps = {
    src?: string;
};