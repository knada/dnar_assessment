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
    }),
});

export const { useGetAllCoinsQuery, useGetCoinQuery } = coinApi;
