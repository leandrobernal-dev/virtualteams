import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: {
            1: {
                todo: "work",
            },
        },
    },
    reducers: {
        addToDo: (state, action) => {
            state.value = {
                ...state.value,

                [action.payload.id]: {
                    todo: action.payload.todo,
                },
            };
        },
        deleteToDo: (state, action) => {
            const updatedState = { ...state.value };
            delete updatedState[action.payload.id];
            state.value = updatedState;
        },
    },
});

export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
