import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "features/todo/todoSlice";
import userReducer from "data/user/userSlice";
import projectReducer from "data/projects/projectSlice";

export default configureStore({
    reducer: {
        projects: projectReducer,
    },
});
