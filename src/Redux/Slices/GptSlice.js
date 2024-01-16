import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        moviesResults: null,
        moviesNames: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult: (state, action) => {
            const {moviesResults, moviesNames} = action.payload;
            state.moviesResults = moviesResults;
            state.moviesNames = moviesNames;
        }
    },
});


export default GptSlice.reducer;

export const { toggleGptSearchView, addGptMoviesResult } = GptSlice.actions;