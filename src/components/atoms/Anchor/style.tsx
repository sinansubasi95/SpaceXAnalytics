import styled from 'styled-components';
import tw from 'twin.macro';

export const BaseAnchor = styled.a`
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
