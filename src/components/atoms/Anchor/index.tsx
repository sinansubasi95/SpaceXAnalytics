import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IAnchorProps {
  href: string;
}

const BaseAnchor = styled.a`
  color: red;
  ${tw`
    border-transparent
    text-gray-600
    hover:bg-gray-50
    hover:text-gray-900
    flex
    items-center
    px-3
    py-2
    text-sm
    font-medium
    border-r-4
    active:bg-indigo-50
    active:border-indigo-600
    active:text-indigo-600
  `}
`;

const Anchor: React.FC<IAnchorProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <BaseAnchor>{children}</BaseAnchor>
    </Link>
  );
};

export default Anchor;
