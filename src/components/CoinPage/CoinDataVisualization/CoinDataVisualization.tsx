import { FC } from "react";
import {
    CoinDataVisualizationContainer,
    CoinPrice,
} from "./CoinDataVisualization.styles";

const CoinDataVisualition: FC = () => {
    return (
        <CoinDataVisualizationContainer>
            <CoinPrice>$30,000.00</CoinPrice>
        </CoinDataVisualizationContainer>
    );
};

export default CoinDataVisualition;
