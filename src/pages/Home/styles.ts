import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .titleContainer{
        width: 100%;
        padding: 1rem;
        background: var(--gray-700);
        border-radius: 5px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 35px;
            height: 35px;
        }

        h1 {
            margin-right: .5rem;
        }

        svg, h1 {
            color: var(--red-700);
        }
    }

    .socialMediaButton {
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;
        text-align: center;
        border-radius: 5px;
        background: var(--blue-500);
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;

        svg { 
            margin-right: .5rem;
            width: 35px;
            height: 35px;
        }

        span {
            font-size: 1.5rem;
        }

        svg, span {
            color: var(--gray-800);
        }
    }
`;