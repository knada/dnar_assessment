import React, { FC, useState, useEffect } from "react";
import {
    ExchangeButton,
    ExchangeContainer,
    ExchangeFooter,
    ExchangeGroup,
    ExchangeGroupContainer,
    ExchangeSelect,
    ExchangeSubText,
    ExchangeTitle,
    ExchangeType,
    ExchangeValue,
} from "./Exchange.styles";

type ExchangeProps = {
    exchangeOptions: any;
    coinSymbol: string;
};

const isNumeric = (value: string | number) => {
    if (+value === +value) {
        // if is a number
        return true;
    }
    return false;
};

const Exchange: FC<ExchangeProps> = ({ exchangeOptions, coinSymbol }) => {
    const [selectedExchange, setSelectedExchange] = useState("usd");
    const [sellValue, setSellValue] = useState(
        exchangeOptions[selectedExchange],
    );
    const [buyValue, setBuyValue] = useState(
        sellValue / exchangeOptions[selectedExchange],
    );

    const handleSelectExchange = (
        event: React.FormEvent<HTMLSelectElement>,
    ): void => setSelectedExchange(event.currentTarget.value);

    const handleSellValue = (
        event: React.FormEvent<HTMLInputElement>,
    ): void => {
        if (isNumeric(event.currentTarget.value)) {
            setSellValue(parseInt(event.currentTarget.value));
        }
    };

    useEffect(() => {
        setBuyValue(sellValue / exchangeOptions[selectedExchange]);
    }, [exchangeOptions, selectedExchange, sellValue]);

    return (
        <ExchangeContainer>
            <ExchangeTitle>Exchange</ExchangeTitle>
            <ExchangeGroupContainer>
                <ExchangeGroup>
                    <ExchangeType>Sell</ExchangeType>
                    <ExchangeValue
                        value={sellValue}
                        onChange={handleSellValue}
                        type="number"
                        pattern="^-?[0-9]\d*\.?\d*$"
                    />
                    <ExchangeSelect
                        value={selectedExchange}
                        onChange={handleSelectExchange}
                    >
                        {Object.keys(exchangeOptions).map((key: string) => (
                            <option key={key} value={key}>
                                {key.toUpperCase()}
                            </option>
                        ))}
                    </ExchangeSelect>
                </ExchangeGroup>
                <ExchangeGroup>
                    <ExchangeType>Buy</ExchangeType>
                    <ExchangeValue
                        value={buyValue}
                        type="number"
                        pattern="^-?[0-9]\d*\.?\d*$"
                        disabled
                    />
                    <ExchangeSelect>
                        <option value={coinSymbol}>
                            {coinSymbol.toUpperCase()}
                        </option>
                    </ExchangeSelect>
                </ExchangeGroup>
            </ExchangeGroupContainer>
            <ExchangeFooter>
                <ExchangeSubText>
                    {`1 ${coinSymbol.toUpperCase()} = ${selectedExchange.toUpperCase()} ${
                        exchangeOptions[selectedExchange]
                    }`}
                </ExchangeSubText>
                <ExchangeButton>Exchange</ExchangeButton>
            </ExchangeFooter>
        </ExchangeContainer>
    );
};

export default Exchange;
