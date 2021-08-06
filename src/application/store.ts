import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "./services/coins";
import dateReducer from "./features/dateSlice";

const store = configureStore({
    reducer: {
        [coinApi.reducerPath]: coinApi.reducer,
        date: dateReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(coinApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
