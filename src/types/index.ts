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
// https://github.com/labs42io/clean-code-typescript#classes
// https://blog.bitsrc.io/react-typescript-cheetsheet-2b6fa2cecfe2
// https://www.youtube.com/watch?v=lSrpmK1nxow
// https://www.youtube.com/watch?v=bM5iOUTTFoo
// https://www.youtube.com/watch?v=vjKWPJTK5gc
// https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-classes-structs-and-interfaces
// https://stackoverflow.com/questions/681700/interface-naming-convention
// https://stackoverflow.com/questions/35774620/typescript-style-guide-for-interfaces
// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props

// PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// prop-types is a lib

/*
    --- final decision ---

*/


/*
- types / interfaces
-- props
--- ILayout? / LayoutProps? / ThreeColumnLayoutProps?
--- INavigationList
--- ICategorizedNavigationList
--- ILogo
-- 
*/
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