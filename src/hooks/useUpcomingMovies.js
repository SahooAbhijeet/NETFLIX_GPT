import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const UpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    async function getUpcomingMovies() {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
        
    }, []);
}

export default UpcomingMovies;