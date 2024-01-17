import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    async function getNowPlayingMovie() {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?page=1',
          TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      };
      
      useEffect(() => {
        !nowPlayingMovies &&  getNowPlayingMovie();
       
      }, []);
}

export default useNowPlayingMovies;