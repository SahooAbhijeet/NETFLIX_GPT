import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-16'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-1/4 text-lg py-6'>{overview}</p>

      <div>
        <button className='bg-black text-white px-6 py-2 text-2xl rounded-lg  inline-flex '> <FaPlay className='my-2 mx-2'/> Play</button>
        
        <button className='bg-gray-500 opacity-90 hover:bg-gray-600 mx-4 text-white px-6 py-2 text-2xl rounded-lg inline-flex'> <IoIosInformationCircleOutline className='my-1.5 mx-2' />More Info </button>

      </div>

    </div>
  )
}

export default VideoTitle