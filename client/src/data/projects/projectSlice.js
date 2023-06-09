import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
    name: "todo",
    initialState: {
        projects: [],
    },
    reducers: {
        addProject: (state, action) => {
            state.projects = [...state.projects, ...action.payload];
        },
    },
});

export default projectsSlice.reducer;
export const { addProject } = projectsSlice.actions;
