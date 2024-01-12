import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;