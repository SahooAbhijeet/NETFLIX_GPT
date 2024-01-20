import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addRatedTVEpisodes, addTopRatedMovies, addUpcomingMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const useRatedTVEpisodes = () => {

    const dispatch = useDispatch();
    const ratedTVEpisodes = useSelector((store) => store.movies.ratedTVEpisodes);

    async function getRatedTVEpisodes() {
        const data = await fetch(    

            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
            dispatch(addRatedTVEpisodes(json.results));
    };

    useEffect(() => {
        !ratedTVEpisodes && getRatedTVEpisodes();
        
    }, []);
}

export default useRatedTVEpisodes;

// Movie