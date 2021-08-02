import { FC } from "react";
import {
    MarketLeaderCardContainer,
    MarketLeaderCardName,
    MarketLeaderCardPrice,
} from "./MarketLeaderCard.styles";
import { Coin } from "../../../types";

type MarketLeaderCardProps = {
    coin: Coin;
};

const MarketLeaderCard: FC<MarketLeaderCardProps> = ({ coin }) => {
    return (
        <MarketLeaderCardContainer>
            <MarketLeaderCardName>
                {coin.name}({coin.symbol.toUpperCase()})
            </MarketLeaderCardName>
            <MarketLeaderCardPrice>
                {`$${coin.market_data.current_price.usd}`}
            </MarketLeaderCardPrice>
        </MarketLeaderCardContainer>
    );
};

export default MarketLeaderCard;
