import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img { 
        width: 100%;
    }    
`;

export const SearchContainer = styled.div`
    width: 50%;
`;

export const TitleContainer = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: .5rem;
    background: var(--gray-700);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 35px;
        height: 35px;
        color: var(--red-700);
    }
`;


export const ToneContainer = styled.section`
    width: 80%;
    background: var(--midnight-blue-900);    
    border-radius: 5px;
    padding: 1rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 2rem;
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

export const CommentsContainer = styled.div`
    width: 80%;
    background: var(--midnight-blue-900);    
    border-radius: 5px;
    padding: 1rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 2rem;
    }
`;

export const CommentsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CommentItem = styled.li`
    width: 100%;
    border-radius: .5rem;
    background: var(--blue-500);    

    display: flex;
    align-items: center;
    
    font-size: .8rem;

    .imgContainer {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
            margin-right: .25rem;
            border-radius: .5rem 0 0 .5rem;
        }
    }

    & + li {
        margin-top: .5rem;
    }
`;