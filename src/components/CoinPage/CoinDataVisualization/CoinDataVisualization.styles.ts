import styled from "styled-components";

export const CoinDataVisualizationContainer = styled.div`
    background-color: ${props => props.theme.colors.sectionBg};
`;

export const CoinPrice = styled.h3`
    font-family: "Inter", "Roboto", sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    color: white;
`;

export const ChartContainer = styled.div`
    padding: 2rem;
`;
