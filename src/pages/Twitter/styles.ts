import styled from 'styled-components';

export const Container = styled.div`
`

export const ToneContainer = styled.section`
    background: var(--midnight-blue-900);    

    svg { 
        width: 30px;
        height: 30px;
        color: var(--gray-800);
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
