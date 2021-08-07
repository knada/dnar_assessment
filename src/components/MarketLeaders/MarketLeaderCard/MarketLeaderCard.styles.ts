import styled from "styled-components";

export const MarketLeaderCardContainer = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
`;

export const MarketLeaderCardImage = styled.img`
    display: block;
    height: 3rem;
`;

export const MarketLeaderCardName = styled.h3`
    font-size: 1rem;
    font-weight: 500;
`;

export const MarketLeaderCardPrice = styled.h3`
    font-size: 1rem;
    font-weight: 500;
`;
