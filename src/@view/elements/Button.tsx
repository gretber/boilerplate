// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLButtonElement>;
    active?: boolean;
}

// Styles
const Styled = styled.button<ButtonProps>`
    cursor: pointer;
    outline: none;
    border: none;
    background: #6F96FF;
    border-radius: 16px;
    font-family: sans-serif;
    margin: 0px;
    height: 52px;
    width: 206px;
    color: #fff;

    &:hover {
        background: #0045fd;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const Button: FC<ButtonProps> = ({ children, ...otherProps  }) => {
    return (
        <Styled
            { ...otherProps }>
            {children}
        </Styled>
    );
};


// background: radial-gradient(ellipse, #DfDfDf 0%, #FFF 60%);
// border-image: linear-gradient(to right, #FFF, #933a, #724, #FFF ) 47% 0%;

// border: 2px solid #147;
// border-bottom: 2px solid #FFF;
