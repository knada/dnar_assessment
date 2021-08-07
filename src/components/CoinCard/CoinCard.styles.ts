import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinCardCointainer = styled(Link)`
    background-color: ${props => props.theme.colors.cardBg};
    text-align: center;
    padding: 1rem;
    border-radius: 1rem;
`;

export const CoinName = styled.h3`
    font-weight: 400;
`;

export const CoinSymbol = styled.img`
    display: block;
    height: 3rem;
    margin: 1rem auto;
`;
