import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: "date",
    initialState: {
        fromDate: new Date(),
        toDate: new Date(),
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
