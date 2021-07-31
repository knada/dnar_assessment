import styled from "styled-components";

export const CoinCardCointainer = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    /* min-width: 10rem;
    max-width: 20rem; */
    color: white;
    text-align: center;
    padding: 1rem;
    border-radius: 1rem;
`;

export const CoinName = styled.h3`
    font-weight: 400;
    font-family: "Inter", "Roboto", sans-serif;
`;

export const CoinSymbol = styled.img`
    display: block;
    height: 3rem;
    margin: 1rem auto;
`;
