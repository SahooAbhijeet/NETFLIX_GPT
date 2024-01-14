import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    async function getNowPlayingMovie() {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?page=1',
          TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      };
      
      useEffect(() => {
        getNowPlayingMovie();
      }, []);
}

export default useNowPlayingMovies;