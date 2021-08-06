import { createSlice } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const dateSlice = createSlice({
    name: "date",
    initialState: {
        fromDate: sub(new Date(), { days: 91 }).toISOString(),
        toDate: new Date().toISOString(),
    },
    reducers: {
        setFromDate: (state, action) => {
            state.fromDate = action.payload;
        },
        setToDate: (state, action) => {
            state.fromDate = action.payload;
        },
    },
});

export const { setFromDate, setToDate } = dateSlice.actions;

export default dateSlice.reducer;
