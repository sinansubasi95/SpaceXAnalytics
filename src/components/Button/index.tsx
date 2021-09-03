import React from 'react';
import { StyledIconButton } from './style';

type Props = {
    size?: 'small' | 'medium' | 'large';
    color?: 'string';
    children?: React.ReactElement;
    icon?: React.ReactElement;
};

export const IconButton = (props: Props) => {
    return (
        <StyledIconButton {...props}>
            {props.icon}
        </StyledIconButton>
    )
}