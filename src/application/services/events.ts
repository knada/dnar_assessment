import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "https://api.coingecko.com/api/v3/";

export const eventsApi = createApi({
    reducerPath: "eventApi",
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: builder => ({
        getEvents: builder.query({
            query: () => "events",
        }),
    }),
});

export const { useGetEventsQuery } = eventsApi;
