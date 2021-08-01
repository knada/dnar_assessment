import { CoinCardCointainer, CoinName, CoinSymbol } from "./CoinCard.styles";
import { FC } from "react";

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

type CoinCardProps = {
    coin: Coin;
};

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
    return (
        <CoinCardCointainer to={`/coins/${coin.id}`}>
            <CoinSymbol src={coin.image.small} />
            <CoinName>{coin.name}</CoinName>
        </CoinCardCointainer>
    );
};

export default CoinCard;
