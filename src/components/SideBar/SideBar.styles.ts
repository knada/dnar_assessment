import styled from "styled-components";

export const SideBarContainer = styled.div`
    border-radius: 1rem;
    background: ${props => props.theme.colors.sectionBg};
    grid-row: 1 / span 2;
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
        display: hidden;
    }
`;
