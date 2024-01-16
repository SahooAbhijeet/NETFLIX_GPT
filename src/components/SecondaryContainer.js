import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && movies.popularMovies && movies.upcomingMovies && (
      <div className='bg-black'>
    <div className='mt-0 md:-mt-52 relative z-20 pl-4 md:pl-12'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Popular"} movies={movies.popularMovies}/>
      <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MoviesList title={"Trending"} movies={movies.popularMovies}/>
    </div>
    </div>
    )
  )
}

export default SecondaryContainer