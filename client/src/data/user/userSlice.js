import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: "todo",
    initialState: {
        value: {
            id: "123",
        },
    },
});

export default userInfoSlice.reducer;
