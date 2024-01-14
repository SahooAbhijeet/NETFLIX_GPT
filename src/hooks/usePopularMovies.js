import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const PopularMovies = () => {

    const dispatch = useDispatch();
    async function getPopularMovies() {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
            dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default PopularMovies;