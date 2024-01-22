import React from 'react'
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';

const MoviesList = ({title, movies}) => {
  console.log(movies);
  if(!movies) return <Shimmer />
  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
          <div className='flex'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
      </div>
  )
}

export default MoviesList