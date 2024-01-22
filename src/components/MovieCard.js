import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-56 pr-8'>
      <img 
      className=' transform  hover:scale-125  overflow-hidden
      transition delay-200 duration-00 ease-in-out'
      alt='Movie Card'
      src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard;