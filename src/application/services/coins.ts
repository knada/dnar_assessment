/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "https://api.coingecko.com/api/v3/";

export const coinApi = createApi({
    reducerPath: "coinApi",
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: builder => ({
        getAllCoins: builder.query({
            query: () => "coins",
        }),
        getCoin: builder.query({
            query: coin => `coins/${coin}`,
        }),
        getEvents: builder.query({
            query: () => "events",
        }),
        getRangeData: builder.query<
            any,
            { coin: string; fromDate: string | number; toDate: string | number }
        >({
            query: ({ coin, fromDate, toDate }) =>
                `coins/${coin}/market_chart/range?vs_currency=usd&from=${fromDate}&to=${toDate}`,
        }),
    }),
});

export const {
    useGetAllCoinsQuery,
    useGetCoinQuery,
    useGetEventsQuery,
    useGetRangeDataQuery,
} = coinApi;
