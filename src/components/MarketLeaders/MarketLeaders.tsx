import { FC } from "react";
import {
    MarketLeadersCardsContainer,
    MarketLeadersContainer,
    MarketLeadersHeading,
} from "./MarketLeaders.styles";
import { useGetCoinsQuery } from "../../application/services/coins";
import MarketLeaderCard from "./MarketLeaderCard/MarketLeaderCard";
import { Coin } from "../../types";

const MarketLeaders: FC = () => {
    const { data, isLoading, isError } = useGetCoinsQuery("");
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Error fetching data</h1>;
    } else {
        const marketLeaders = data.slice(0, 10);
        return (
            <MarketLeadersContainer>
                <MarketLeadersHeading>Market Leaders</MarketLeadersHeading>
                <MarketLeadersCardsContainer>
                    {marketLeaders.map((coin: Coin) => (
                        <MarketLeaderCard key={coin.id} coin={coin} />
                    ))}
                </MarketLeadersCardsContainer>
            </MarketLeadersContainer>
        );
    }
};

export default MarketLeaders;
