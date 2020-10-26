// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
// import POLYA from '../fonts/POLYA.otf';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    * {
        outline: none;
    }

    h2 {
        font-weight: 300;
        font-size: 2vw;
        line-height: 3vw;
    }

    h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 34px;
        line-height: 40px;
        color: #1C1F28;
    }

    h4 {
        font-size: 1.1vw;
        font-weight: 500;
    }
`;

