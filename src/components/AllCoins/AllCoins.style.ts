import styled from "styled-components";

export const AllCoinsContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    grid-column: 1 / span 2;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        padding: 0;
    }
`;

export const AllCoinsHeading = styled.h2`
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        text-align: center;
        font-size: 2rem;
        padding-top: 1rem;
    }
`;

export const CoinCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 1rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
        margin: 1rem;
    }
`;
