import styled from "styled-components";

export const DashboardContainer = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.colors.dashboardBg};
`;

export const DashboardContentContainer = styled.div``;

export const DashboardContentHeading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
`;

export const DashboardHomeContainer = styled.div`
    /* display: grid;
    grid-template-columns: 1fr minmax(16rem, 24rem);
    grid-gap: 1rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
        display: block;
    } */
`;
