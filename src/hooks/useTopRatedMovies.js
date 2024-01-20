import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies, addUpcomingMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    async function getTopRatedMovies() {
        const data = await fetch(    

            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
            dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
        
    }, []);
}

export default useTopRatedMovies;