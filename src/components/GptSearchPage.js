import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
            <div className='absolute -z-10'>
        <img 
        src={NETFLIX_BACKGROUND}
        alt='logo'
        />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearchPage