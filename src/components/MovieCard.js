import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img 
      className=''
      alt='Movie Card'
      src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard;