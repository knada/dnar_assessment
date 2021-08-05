import { FC } from "react";
import styled from "styled-components";
import TrendDown from "../../../SvgComponents/TrendDown";
import TrendUp from "../../../SvgComponents/TrendUp";
import { CoinPrice } from "../CoinDataVisualization.styles";

type ChangeProps = {
    change?: "up" | "down";
};

type ChangePercentageProps = {
    endPrice: number | string;
    percentageChange: number;
};

const ChangeContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ChangeValue = styled.h4<ChangeProps>`
    color: ${props => (props.change === "up" ? "green" : "red")};
    margin-left: 4rem;
    margin-right: 1rem;
    font-size: 1.5rem;
`;

const ChangePercentage: FC<ChangePercentageProps> = ({
    percentageChange,
    endPrice,
}) => {
    if (percentageChange < 0) {
        return (
            <ChangeContainer>
                <CoinPrice>{endPrice}</CoinPrice>
                <ChangeValue change="down">
                    -{percentageChange.toFixed(2)}%
                </ChangeValue>
                <TrendDown />
            </ChangeContainer>
        );
    }
    if (percentageChange > 0) {
        return (
            <ChangeContainer>
                <CoinPrice>{endPrice}</CoinPrice>
                <ChangeValue change="up">
                    +{percentageChange.toFixed(2)}%
                </ChangeValue>
                <TrendUp />
            </ChangeContainer>
        );
    }
    return (
        <ChangeContainer>
            <CoinPrice>{endPrice}</CoinPrice>
            <ChangeValue>{percentageChange.toFixed(2)}%</ChangeValue>
        </ChangeContainer>
    );
};

export default ChangePercentage;
