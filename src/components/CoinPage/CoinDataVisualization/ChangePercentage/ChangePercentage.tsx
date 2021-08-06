import { FC } from "react";
import styled from "styled-components";
import TrendDown from "../../../SvgComponents/TrendDown";
import TrendUp from "../../../SvgComponents/TrendUp";

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
    margin: 1rem;
`;

const CoinPrice = styled.h3`
    font-family: "Inter", "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
        font-size: 2.5rem;
    }
`;

const ChangeValue = styled.h4<ChangeProps>`
    color: ${props => (props.change === "up" ? "green" : "red")};
    margin-left: 2rem;
    @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
        margin-left: 4rem;
        margin-right: 1rem;
        font-size: 1.5rem;
    }
`;

const ChangePercentage: FC<ChangePercentageProps> = ({
    percentageChange,
    endPrice,
}) => {
    if (percentageChange < 0) {
        return (
            <ChangeContainer>
                <CoinPrice>${endPrice}</CoinPrice>
                <ChangeValue change="down">
                    {percentageChange.toFixed(2)}%
                </ChangeValue>
                <TrendDown />
            </ChangeContainer>
        );
    }
    if (percentageChange > 0) {
        return (
            <ChangeContainer>
                <CoinPrice>${endPrice}</CoinPrice>
                <ChangeValue change="up">
                    +{percentageChange.toFixed(2)}%
                </ChangeValue>
                <TrendUp />
            </ChangeContainer>
        );
    }
    return (
        <ChangeContainer>
            <CoinPrice>${endPrice}</CoinPrice>
            <ChangeValue>{percentageChange.toFixed(2)}%</ChangeValue>
        </ChangeContainer>
    );
};

export default ChangePercentage;
