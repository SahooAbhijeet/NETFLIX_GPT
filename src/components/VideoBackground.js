import React, { useEffect } from 'react'
import { TMDB_API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {

  /*
  * Fetch Movie Trailer 
   */

  const getMoviesVideo = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/753342/videos?language=en-US', 
      TMDB_API_OPTIONS
      );
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData[0];
      console.log(trailer);
  }

  useEffect(() => {
    getMoviesVideo();
  }, []);
  return (
    <div>

    </div>
  )
}

export default VideoBackground