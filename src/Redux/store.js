import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/moviesSlice";
import gptReducer from "./Slices/GptSlice";
import configReducer from "./Slices/configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;