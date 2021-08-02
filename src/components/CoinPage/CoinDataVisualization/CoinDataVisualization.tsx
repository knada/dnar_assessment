import { FC } from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import format from "date-fns/format";
import { useGetRangeDataQuery } from "../../../application/services/coins";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import {
    ChartContainer,
    CoinDataVisualizationContainer,
    CoinPrice,
} from "./CoinDataVisualization.styles";

type CoinDataVisualitionProps = {
    id: string;
    currentPrice: string;
};

const CoinDataVisualition: FC<CoinDataVisualitionProps> = ({
    id,
    currentPrice,
}) => {
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
                date: format(point[0], "yyyy/MM/dd"),
                price: point[1],
            };
        });
        return (
            <CoinDataVisualizationContainer>
                <CoinPrice>${currentPrice}</CoinPrice>
                <ChartContainer>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData}>
                            <Line
                                type="monotone"
                                dataKey="price"
                                stroke="white"
                            />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="price" />
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="3 3"
                            />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CoinDataVisualizationContainer>
        );
    }
};

export default CoinDataVisualition;
