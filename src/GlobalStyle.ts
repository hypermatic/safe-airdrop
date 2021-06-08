import avertaBoldFont from "@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2";
import avertaFont from "@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2";
import { createGlobalStyle } from "styled-components";

import errorIcon from "./static/error-icon.svg";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
       height: 100%;
       margin: 0px;
       padding: 0px;
    }

    #root {
        height: 100%;
        padding-right: 0.5rem;
    }

    .MuiFormControl-root,
    .MuiInputBase-root {
        width: 100% !important;
    }

    @font-face {
        font-family: 'Averta';
        src: local('Averta'), local('Averta Bold'),
        url(${avertaFont}) format('woff2'),
        url(${avertaBoldFont}) format('woff');
    }

    .error-marker {
        position: absolute;
        background-color: lightpink;
        display: block;
      }
    
    .error-marker:hover::after {
        content: 'DescriptionTest';
    }
    .ace_error {
        background-image: url(${errorIcon}) !important;
        background-size: 15px;
    }
    .ace_tooltip {
        font-family: 'Averta' !important;
    }

    .MuiTableCell-head {
        position: sticky;
        top: 0px;
        background-color: #FFF;
        box-shadow: 10px 2px 10px 0 rgba(40,54,61,0.18);
    }
    .MuiTableContainer-root {
        overflow: auto;
        height: 750px;
    }
`;

export default GlobalStyle;
