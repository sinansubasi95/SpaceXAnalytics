import React from 'react';
import Anchor from '../../atoms/Anchor';
import {
  Nav,
  Container,
  StyledHomeIcon,
  StyledCalendarIcon,
  StyledChartBarIcon,
  StyledFolderIcon,
  StyledInboxIcon,
  StyledUsersIcon,
} from './style';

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline';

// interface Link {
//   name: string;
//   icon: any;
//   href: string;
//   current: boolean;
// }

// interface INavigationProps {
//   links: Link[];
// }

interface INavigationProps {
  isMobile?: boolean;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

// put ui state (navigation) at the top of our component hierarchy
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
];

const Navigation: React.FC<INavigationProps> = ({ isMobile }) => {
  if (isMobile) {
    <nav className="mt-5 px-2 space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
          )}
        >
          <item.icon
            className={classNames(
              item.current
                ? 'text-gray-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </nav>;
  }

  return (
    <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
          )}
        >
          <item.icon
            className={classNames(
              item.current
                ? 'text-gray-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </nav>

    // <Container>
    //   <Nav>
    //     <Anchor href="#">
    //       <StyledHomeIcon />
    //       Dashboard
    //     </Anchor>
    //     <Anchor href="#">
    //       <StyledUsersIcon />
    //       Team
    //     </Anchor>
    //     <Anchor href="#">
    //       <StyledFolderIcon />
    //       Projects
    //     </Anchor>
    //     <Anchor href="#">
    //       <StyledCalendarIcon />
    //       Calendar
    //     </Anchor>
    //     <Anchor href="#">
    //       <StyledInboxIcon />
    //       Documents
    //     </Anchor>
    //     <Anchor href="#">
    //       <StyledChartBarIcon />
    //       Reports
    //     </Anchor>
    //   </Nav>
    // </Container>
  );
};

export default Navigation;
