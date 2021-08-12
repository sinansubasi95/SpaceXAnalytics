import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
        h-screen
        flex
        overflow-hidden
        bg-white
    `}
`;

export const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-0
    flex-1
    overflow-hidden
  `}
`;
