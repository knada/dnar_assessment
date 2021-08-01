import styled from "styled-components";

export const DashboardContainer = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 64px 1fr;
    grid-template-columns: 64px 1fr;
    grid-gap: 1rem;
    background-color: ${props => props.theme.colors.dashboardBg};
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
        grid-template-columns: auto;
    }
`;

export const DashboardContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(16rem, 24rem);
    grid-gap: 1rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr;
    }
`;

export const DashboardContentHeading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
`;
