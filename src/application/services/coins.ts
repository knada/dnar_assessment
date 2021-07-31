import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "https://api.coingecko.com/api/v3/";

export const coinApi = createApi({
    reducerPath: "coinApi",
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: builder => ({
        getCoins: builder.query({
            query: () => "coins",
        }),
    }),
});

export const { useGetCoinsQuery } = coinApi;
