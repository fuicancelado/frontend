import styled from 'styled-components';

export const Container = styled.nav`
    background: var(--midnight-blue-900);
    width: 5rem;
    height: 100vh;
    position: absolute;
`;

export const Content = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        border: none;
        background: none;
    }
    
    a svg {
        width: 30px;
        height: 30px;
    }

    .trendButton {
        svg {
            color: var(--red-700);
        }
    }

    .SearchButton {
        svg {
            color: var(--blue-500);
        }
    }

    .signOutButton { 
        margin-top: 1rem;

        svg {
            color: var(--gray-200);
        }
    }
`;
