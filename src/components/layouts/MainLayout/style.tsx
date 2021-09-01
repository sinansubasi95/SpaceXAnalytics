import styled from 'styled-components';
import tw from 'twin.macro';

export const PageContainer = styled.div`
  ${tw`
    h-screen
    flex
    overflow-hidden
    bg-white
  `}

  background-color: #0F0E13;
`;

export const ContentContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-0
    flex-1
    overflow-hidden
  `}
`;