import styled from "styled-components";

export const MarketLeadersContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        padding: 0.5rem;
        & h3 {
            font-size: 1rem;
        }
    }
`;

export const MarketLeadersHeading = styled.h2`
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const MarketLeadersCardsContainer = styled.div``;
