import styled from "styled-components";

export const CoinDataVisualizationContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
    padding: 2rem;
    border-radius: 2rem;
    margin: 1rem 0;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        padding: 1rem 0;
    }
`;

export const ChartHeader = styled.div`
    @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        display: flex;
        align-items: center;
    }
`;

export const ChartContainer = styled.div`
    padding: 1rem 0;
    min-width: 16rem;
    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        padding: 0;
    }
`;
