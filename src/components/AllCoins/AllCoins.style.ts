import styled from "styled-components";

export const AllCoinsContainer = styled.div`
    margin-top: 2rem;
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    grid-column: 1 / span 2;
`;

export const AllCoinsHeading = styled.h2`
    font-family: "Inter", "Roboto", sans-serif;
    font-size: 3rem;
    font-weight: 500;
    color: white;
    margin-bottom: 1rem;
`;

export const CoinCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 1rem;
`;
