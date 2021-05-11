import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    width: 100%;

    background: var(--midnight-blue-900);
    border-radius: 5rem;
    border: solid 1px var(--red-700);

    input {
        width: 100%;        
        background: none;
    }

    svg {
        margin-right: .5rem;
        color: var(--green-400);
    }

`;