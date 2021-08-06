import React from 'react';
import Anchor from '../../atoms/Anchor';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Link {
  name: string;
  icon: any;
  href: string;
  current: boolean;
}

interface INavigationProps {
  links: Link[];
}

const BaseNavigation = styled.a`
  ${tw`
    flex-1 
    bg-white
    space-y-1
  `}
`;

const Navigation: React.FC<INavigationProps> = ({ links }) => {
  return (
    <BaseNavigation aria-label="Sidebar">
      {links.map((item) => (
        <Anchor key={item.name} href="/cat">
          <item.icon
            aria-hidden="true"
            className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
          />
          {item.name}
        </Anchor>
      ))}
    </BaseNavigation>
  );
};

export default Navigation;
