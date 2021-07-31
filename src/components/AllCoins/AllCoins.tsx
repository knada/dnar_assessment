import { FC } from "react";
import { useGetAllCoinsQuery } from "../../application/services/coins";
import CoinCard from "../CoinCard/CoinCard";
import {
    AllCoinsContainer,
    AllCoinsHeading,
    CoinCardsContainer,
} from "./AllCoins.style";

type Coin = {
    id: string;
    symbol: string;
    name: string;
    block_time_minutes: string;
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    last_updated: string;
};

const AllCoins: FC = () => {
    const { data, isLoading, isError } = useGetAllCoinsQuery("");
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Error fetching data</h1>;
    }
    return (
        <AllCoinsContainer>
            <AllCoinsHeading>All Coins</AllCoinsHeading>
            <CoinCardsContainer>
                {data.map((coin: Coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </CoinCardsContainer>
        </AllCoinsContainer>
    );
};

export default AllCoins;
