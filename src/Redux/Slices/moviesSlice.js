import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideos: null, 
        ratedTVEpisodes: null,
        horrorMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addRatedTVEpisodes: (state, action) => {
            state.ratedTVEpisodes = action.payload;
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        }
    }
});

export const {    addNowPlayingMovies, 
    addTrailerVideos, 
    addPopularMovies, 
    addTopRatedMovies,
    addUpcomingMovies,
    addRatedTVEpisodes,
    addHorrorMovies
} 
= moviesSlice.actions;

export default moviesSlice.reducer;