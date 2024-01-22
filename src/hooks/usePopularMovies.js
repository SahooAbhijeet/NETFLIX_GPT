import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const PopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    async function getPopularMovies() {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US &page=1",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
            dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        !popularMovies && getPopularMovies();
        
    }, []);
}

export default PopularMovies;