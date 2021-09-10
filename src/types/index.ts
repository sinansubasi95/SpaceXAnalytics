export type LayoutProps = {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    children?: React.ReactElement;
    icon?: React.ReactElement;
};

export type NavigationListT = {
    name?: string;
    href?: string;
    icon?: any;
    current?: boolean;
};

export type LogoProps = {
    src?: string;
};