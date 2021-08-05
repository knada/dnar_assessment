import { FC } from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from "recharts";
import format from "date-fns/format";
import { useGetRangeDataQuery } from "../../../application/services/coins";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import {
    ChartContainer,
    ChartHeader,
    CoinDataVisualizationContainer,
} from "./CoinDataVisualization.styles";
import ChangePercentage from "./ChangePercentage/ChangePercentage";
import DateRange from "./DateRange/DateRange";
import {
    NameType,
    ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import styled from "styled-components";

type CoinDataVisualitionProps = {
    id: string;
};

const TooltipContainer = styled.div`
    background-color: ${props => props.theme.colors.buttonBg};
    padding: 1.5rem;
    border-radius: 1rem;
    text-align: center;
`;

const TooltipPrice = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
`;

const TooltipDate = styled.p`
    font-size: 0.825rem;
`;

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
    if (active && payload && label) {
        return (
            <TooltipContainer>
                <TooltipPrice>{`$${payload[0].value}`}</TooltipPrice>
                <TooltipDate>{label}</TooltipDate>
            </TooltipContainer>
        );
    }
    return <TooltipContainer></TooltipContainer>;
};

const CoinDataVisualition: FC<CoinDataVisualitionProps> = ({ id }) => {
    //placeholder date range
    const fromDate = "1609467149";
    const toDate = "1627783949";
    const { data, isLoading, isError } = useGetRangeDataQuery({
        coin: id,
        fromDate,
        toDate,
    });
    if (isLoading) {
        return <LoadingIndicator />;
    }
    if (isError) {
        return <h1>Error fetching data</h1>;
    } else {
        const chartData = data.prices.map((point: number[]) => {
            return {
                date: format(point[0], "dd MMM yy"),
                price: point[1].toFixed(2),
            };
        });

        const getPercentageChange = (fromPrice: number, toPrice: number) => {
            const change = toPrice - fromPrice;
            const percentageChange = (change / fromPrice) * 100;
            return percentageChange;
        };

        const percentageChange = getPercentageChange(
            chartData[0].price,
            chartData[chartData.length - 1].price,
        );
        return (
            <CoinDataVisualizationContainer>
                <ChartHeader>
                    <ChangePercentage
                        endPrice={chartData[chartData.length - 1].price}
                        percentageChange={percentageChange}
                    />
                    <DateRange />
                </ChartHeader>
                <ChartContainer>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <Line
                                type="monotone"
                                dataKey="price"
                                stroke="#4b75ff"
                                dot={false}
                                strokeWidth={2}
                            />
                            <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12, fill: "white" }}
                                tickMargin={10}
                            />
                            <YAxis
                                dataKey="price"
                                tickMargin={10}
                                tick={{ fontSize: 12, fill: "white" }}
                            />
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="2 8"
                            />
                            <Tooltip
                                payload={chartData}
                                content={CustomTooltip}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CoinDataVisualizationContainer>
        );
    }
};

export default CoinDataVisualition;
