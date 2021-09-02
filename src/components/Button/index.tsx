import React from 'react';

interface IButtonProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'string';
    children?: React.ReactElement;
    icon?: React.ReactElement;
    onClick?: Function;
}

const Button: React.FC<IButtonProps> = ({icon, size, color, onClick}) => {
    return (
        <div>
            
        </div>
    )
}

export default Button;