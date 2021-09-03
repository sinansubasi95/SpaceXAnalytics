import styled from 'styled-components';
import tw from 'twin.macro';

// const Container = styled.div(({ hasBg }: ContainerProps) => [
//   tw`flex w-full`, // Add base styles first
//   hasBg && tw`bg-black`, // Then add conditional styles
// ])

// export const StyledIconButton = styled.button(({ size }: {size: 'small' | 'medium' | 'large'}) => [
//   tw`
//     -ml-0.5
//     -mt-0.5
//     inline-flex
//     items-center
//     justify-center
//     rounded-md
//     text-gray-500
//     hover:text-gray-900
//     focus:outline-none
//     focus:ring-2 focus:ring-inset
//     focus:ring-indigo-500
//   `,
//   size && tw`w-12 h-12`,
// ])

// export const StyledIconButton = styled.button`
//   ${tw`
//     -ml-0.5
//     -mt-0.5
//     inline-flex
//     items-center
//     justify-center
//     rounded-md
//     text-gray-500
//     hover:text-gray-900
//     focus:outline-none
//     focus:ring-2 focus:ring-inset
//     focus:ring-indigo-500
//   `} 

//   ${({ size }: any) => 
//     size === 'large' &&
//     tw`
//       w-12
//       h-12
//     `;
//   };

//   background-color: #0F0E13;
// `;

interface IButtonProps {
  theme?: 'filled' | 'outlined';
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    -ml-0.5
    -mt-0.5
    inline-flex
    items-center
    justify-center
    rounded-md
    text-gray-500
    hover:text-gray-900
    focus:outline-none
    focus:ring-2 focus:ring-inset
    focus:ring-indigo-500
    `};
`;

const IconButton = styled(BaseButton)`
  ${tw`
        bg-red-500
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500
    `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500
        hover:text-white
        hover:border-transparent
    `};
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === 'filled')
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <IconButton className={className}>{text}</IconButton>;
}