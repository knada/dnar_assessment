import styled from "styled-components";

export const DashboardContainer = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 64px 1fr;
    grid-template-columns: 64px 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    background-color: ${props => props.theme.colors.dashboardBg};
`;

export const DashboardContentContainer = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr minmax(16rem, 24rem);
    grid-gap: 1rem;
    @media screen and (max-width: 40rem) {
        grid-template-columns: auto;
    }
`;

export const DashboardContentHeading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
`;
