import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'


/* {PLANNING OF SecondaryContainer}
* MovieList - Popular
    *( Movie Cards* N)
* MovieList - Now Playing
    *( Movie Cards* N)
* MovieList - Trending
    *( Movie Cards* N)
* MovieList - Horror
    *( Movie Cards* N)
*/

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && movies.popularMovies && movies.upcomingMovies && (
      <div className='bg-black'>
    <div className='-mt-72 relative z-20 pl-12'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Popular"} movies={movies.popularMovies}/>
      {/* <MoviesList title={"Trending"} movies={movies.top_rated}/> */}
      <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    </div>
    </div>
    )
  )
}

export default SecondaryContainer