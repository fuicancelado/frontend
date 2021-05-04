import styled, { createGlobalStyle } from 'styled-components';

export const MainContainer = styled.main`
    padding-left: 5rem;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-200: #BAB9D2;    //Font color
        --gray-700: #49494E;    //Applciations Background
        --gray-800: #2D2D2D;    //Applciations Background
        --green-400: #11AC84;   //Green buttons
        --red-700: #EE5353;     
        --midnight-blue-900: #323342; //Containers background
        --blue-500: #5B44DE;    
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width:1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width:720) {
            font-size: 87,.5%; //14px
        }
    }
    
    body {
        background: var(--gray-800);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, span, p {
        color: var(--gray-200);
    }

    button {
        cursor: pointer;
    }
`