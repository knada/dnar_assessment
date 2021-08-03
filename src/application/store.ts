import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "./services/coins";

const store = configureStore({
    reducer: {
        [coinApi.reducerPath]: coinApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(coinApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
