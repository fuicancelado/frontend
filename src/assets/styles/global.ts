import styled, { createGlobalStyle } from 'styled-components';

export const MainContainer = styled.main`
    //padding-left: 5rem;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-200: #BAB9D2;    //Font color
        --gray-700: #49494E;    //Applciations Background
        --gray-800: #2D2D2D;    //Applciations Background
        --green-400: #11AC84;   //Green buttons
        --red-700: #EE5353;     
        --midnight-blue-900: #323342; //Containers background
        --midnight-blue-600: #363452; //Containers background
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

    h1, h2, h3, h4, span, p, input {
        color: var(--gray-200);
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    input {
        background: var(--midnight-blue-600);
        border: none;
        border-radius: 3px;
    }
    
    input:focus {
        outline: none;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 20px;
    }

    .col-2 {
        grid-column: span 2;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.8);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width:576px;
        background: var(--midnight-blue-900);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        svg { 
            color: var(--gray-200);
        }

        &:hover {
            filter: brightness(0.8);
        }
    }
`