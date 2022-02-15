import { createGlobalStyle } from 'styled-components';
import './reset.css';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-size: 16px;
        height:100%;
    }

    div#root{
        height:100%;
    }
`;
