import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <>
    
        <div className='fixed -z-10 '>
            <img 
                className='h-screen w-screen object-cover'
                src={NETFLIX_BACKGROUND}
                alt='logo'
              />
            </div>

            <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
        </div>
        </>
  )
}

export default GptSearchPage