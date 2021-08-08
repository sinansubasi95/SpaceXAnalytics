import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline';

export const Container = styled.div`
  ${tw`
    mt-5
    flex-grow
    flex
    flex-col
  `}
`;

export const Nav = styled.nav`
  ${tw`
    flex-1 
    bg-white
    space-y-1
  `}
`;

const baseIconStyles = css`
  ${tw`
    text-gray-400
    group-hover:text-gray-500
    mr-3
    flex-shrink-0
    h-6
    w-6
  `}
`;

export const StyledHomeIcon = styled(HomeIcon)`
  ${baseIconStyles}
`;
export const StyledCalendarIcon = styled(CalendarIcon)`
  ${baseIconStyles}
`;
export const StyledChartBarIcon = styled(ChartBarIcon)`
  ${baseIconStyles}
`;
export const StyledFolderIcon = styled(FolderIcon)`
  ${baseIconStyles}
`;
export const StyledInboxIcon = styled(InboxIcon)`
  ${baseIconStyles}
`;
export const StyledUsersIcon = styled(UsersIcon)`
  ${baseIconStyles}
`;
