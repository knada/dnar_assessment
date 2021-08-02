import styled from "styled-components";

export const MarketLeadersContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        & h3 {
            font-size: 1.5rem;
        }
    }
`;

export const MarketLeadersHeading = styled.h2`
    font-family: "Inter", "Roboto", sans-serif;
    font-size: 3rem;
    font-weight: 500;
    color: white;
    margin-bottom: 1rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        font-size: 2rem;
    }
`;

export const MarketLeadersCardsContainer = styled.div``;
