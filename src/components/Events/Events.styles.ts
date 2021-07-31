import styled from "styled-components";

export const EventsContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
        grid-row: 2;
    }
`;

export const EventsHeading = styled.h2`
    font-family: "Inter", "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    margin: 1rem 0;
`;

export const EventsCardsContainer = styled.div``;
