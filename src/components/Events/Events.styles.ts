import styled from "styled-components";

export const EventsContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
        grid-row: 2;
    }
`;
