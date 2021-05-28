import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    padding: 1rem;
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
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
    
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 35px;
        height: 35px;
        color: var(--red-700);
    }
`;

export const CancelometroContainer = styled.section`
    width: 80%;
    margin-top: 2rem;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
    padding: .5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        width: 60px;
        height: 60px;
    }

    span {
        font-size: 2rem;
        font-weight: bold;
    }

    &.highScore {
        background: var(--green-400);
        border: 3.5px solid #0e8f6e;
        
        svg, span {
            color: #0e8f6e;
        }
    }

    &.lowScore {
        background: var(--red-700);
        border: 3.5px solid #b02b2b;
        
        svg, span {
            color: #b02b2b;
        }
    }
`;


export const ToneContainer = styled.section`
    width: 80%;
    background: var(--midnight-blue-900);    
    border-radius: 5px;
    padding: 1rem;
    margin-top: 2rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .1);

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 2rem;
    }

    .confidentContainer {
        background: #5B44DE;
    }
    .joyContainer {
        background: #11AC84;
    }
    .tentativeContainer {
        background: #FEF02E;
    }
    .analyticalContainer {
        background: #BAB9D2;
    }
    .fearContainer {
        background: #56814F;
    }
    .angerContainer {
        background: var(--red-700);
    }
    .sadnessContainer {
        background: #4C54A7;
    }
`
export const ToneList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ToneCard = styled.li`
    width: 15%;
    height: 6.5rem;
    border-radius: 15px;
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-shadow: 2px 2px 2px rgba(0, 0, 0, .1);

    & + & {
        margin-left: .5rem;
    }

    span {
        color: var(--midnight-blue-900);
        font-weight: bold;
        font-size: 1.5rem;
    }

    svg { 
        width: 40px;
        height: 40px;
        color: var(--midnight-blue-900);
    }
    &.toneDisabled {
        opacity: .3;
    }
`

export const DescriptionContainer = styled.div`
    svg { 
        margin-left: .25rem;
        width:15px;
        height:15px;
    }
`;

export const ScoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
`;

export const CommentItem = styled.li`
    width: 100%;
    border-radius: .5rem;
    background: var(--gray-700);    
    height: fit-content;
    
    display: flex;
    align-items: center;
    
    font-size: .8rem;

    h5 { 
        font-size: .9rem;
        color: var(--gray-200);
    }

    span {
        font-size: .7rem;
    }

    .imgContainer {
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
            border-radius: .5rem 0 0 .5rem;
        }
    }

    .infoContainer {
        width: 100%;
        padding: 0 .25rem;
    }

    .commentText {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .commentItemFooter {
        display: flex;
        justify-content: space-between;
    }

    .badgeContainer {
        display: flex;
    }  

    .confidentBadge {
        background: #5B44DE;
    }

    .badge  + .badge{
        margin-left: .25rem;
    }

    .joyBadge {
        background: #11AC84;
    }

    .tentativeBadge {
        background: #FEF02E;
    }

    .analyticalBadge {
        background: #BAB9D2;
    }

    .fearBadge {
        background: #56814F;
    }

    .angerBadge {
        background: var(--red-700);
    }

    .sadnessBadge {
        background: #4C54A7;
    }  
`;

export const ToneDescriptionContainer = styled.section`
    height: 100%;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &.confidentBorder {
        border: 3px solid #5B44DE;
    }

    &.joyBorder {
        border: 3px solid #11AC84;
    }

    &.tentativeBorder {
        border: 3px solid #FEF02E;
    }

    &.analyticalBorder {
        border: 3px solid #BAB9D2;
    }

    &.fearBorder {
        border: 3px solid #56814F;
    }

    &.angerBorder {
        border: 3px solid var(--red-700);
    }

    &.sadnessBorder {
        border: 3px solid #4C54A7;
    }   
`;