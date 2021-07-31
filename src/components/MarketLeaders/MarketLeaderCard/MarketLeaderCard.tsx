import { FC } from "react";
import {
    MarketLeaderCardContainer,
    MarketLeaderCardImage,
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
            <MarketLeaderCardImage src={coin.image.large} />
            <MarketLeaderCardName>{coin.name}</MarketLeaderCardName>
            <MarketLeaderCardPrice>
                {`$ ${coin.market_data.current_price.usd}`}
            </MarketLeaderCardPrice>
        </MarketLeaderCardContainer>
    );
};

export default MarketLeaderCard;
