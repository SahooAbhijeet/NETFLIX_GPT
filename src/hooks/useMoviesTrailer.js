import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../Redux/Slices/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {

    const dispatch = useDispatch();
    /*
      * Fetch Movie Trailer And Updating The Store With The Trailer Video
    */

  const getMoviesVideo = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +  
      '/videos?language=en-US', 
      TMDB_API_OPTIONS
      );
      const json = await data.json();
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideos(trailer));
  }

    useEffect(() => {
      getMoviesVideo();
    }, []);
}

export default useMoviesTrailer;