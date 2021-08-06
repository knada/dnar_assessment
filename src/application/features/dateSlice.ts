import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: "date",
    initialState: {
        fromDate: new Date().toISOString(),
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
