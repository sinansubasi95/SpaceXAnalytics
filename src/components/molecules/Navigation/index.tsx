import React from 'react';
import Anchor from '../../atoms/anchor';
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

// interface Link {
//   name: string;
//   icon: any;
//   href: string;
//   current: boolean;
// }

// interface INavigationProps {
//   links: Link[];
// }

const Navigation: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Anchor href="#">
          <StyledHomeIcon />
          Dashboard
        </Anchor>
        <Anchor href="#">
          <StyledUsersIcon />
          Team
        </Anchor>
        <Anchor href="#">
          <StyledFolderIcon />
          Projects
        </Anchor>
        <Anchor href="#">
          <StyledCalendarIcon />
          Calendar
        </Anchor>
        <Anchor href="#">
          <StyledInboxIcon />
          Documents
        </Anchor>
        <Anchor href="#">
          <StyledChartBarIcon />
          Reports
        </Anchor>
      </Nav>
    </Container>
  );
};

export default Navigation;
