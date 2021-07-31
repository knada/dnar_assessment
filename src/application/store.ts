import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "./services/coins";
import { eventsApi } from "./services/events";

const store = configureStore({
    reducer: {
        [coinApi.reducerPath]: coinApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(coinApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
