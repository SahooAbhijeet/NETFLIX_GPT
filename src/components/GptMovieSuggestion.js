import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GptMovieSuggestion = () => {

  const gpt = useSelector((store) => store.gpt);
  const { moviesResults, moviesNames } = gpt;
  console.log(moviesResults)
  if(!moviesNames) return null;

  return (
    <div className='p-4 m-4 bg-black opacity-80 text-white'>
    <div>
      {moviesNames.map((movieName, index) => (
      <MoviesList 
      key={movieName} 
      title={movieName} 
      movies={moviesResults[index]} 
      />
      ))}

      </div>
    </div>
  )
}

export default GptMovieSuggestion