import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 5rem;
`

export const ToneContainer = styled.section`
    background: var(--midnight-blue-900);    
    border-radius: 5px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 2.5rem;
    }

    .confidentContainer {
        background: #996943;
    }
    .joyContainer {
        background: var(--green-400);
    }
    .tentativeContainer {
        background: #9e9738;
    }
    .analyticalContainer {
        background: var(--gray-700);
    }
    .fearContainer {
        background: #000;
    }
    .angerContainer {
        background: var(--red-700);
    }
    .sadnessContainer {
        background: #3F4375;
    }
`
export const ToneList = styled.ul`
    width: 100%;
`;

export const ToneCard = styled.li`
    font-size: 1.8rem;

    height: 6.5rem;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg { 
        width: 40px;
        height: 40px;
        color: var(--gray-800);
    }
`