import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #1d1d1d;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 999;
    filter: alpha(opacity=40);
    transition: all .6s ease-out;

    h3 { 
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    &.loadingFadeOut {
        -moz-transform: translateY(-100vh); 
        -ms-transform: translateY(-100vh); 
        -o-transform: translateY(-100vh); 
        transform: translateY(-100vh); 
        opacity: .5;
    }

    &.highScore {
        background-color: #0e8f6e !important;
    }

    &.lowScore {
        background-color: var(--red-700) !important;
    }

    .loader-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 101;
        margin-left: -15 !important;
        margin-top: -15 !important;
    }
`;

export const CancelometroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    svg, h3, span {
        color: var(--gray-200);
    }

    svg {
        width: 35px;
        height: 35px;
    }

    .maisDetalhes {
        display: flex;
        align-items: center;
        flex-direction: column;

        transition: all 0.5s ease;
        cursor: pointer;
    }

    .maisDetalhes:hover {
        -moz-transform: translateY(-10px); 
        -ms-transform: translateY(-10px); 
        -o-transform: translateY(-10px); 
        transform: translateY(-10px); 
    }
`;