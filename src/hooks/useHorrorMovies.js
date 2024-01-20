import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const useHorrorMovies = () => {

    const dispatch = useDispatch();
    const horrorMovies = useSelector((store) => store.movies.horrorMovies);

    async function getHorrorMovies() {
        const data = await fetch(    
            "https://api.themoviedb.org/3/search/movie?&language=en-US&query=horror&page=1&include_adult=false",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
            dispatch(addHorrorMovies(json.results));
    };

    useEffect(() => {
        !horrorMovies && getHorrorMovies();
        
    }, []);
}

export default useHorrorMovies;

