import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img 
      className=''
      alt='Movie Card'
      src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard;