import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[10%] px-6 md:px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='font-bold text-2xl md:text-5xl md:mt-0 mt-[140px] group-hover:text-lg'>{title}</h1>
      {/* { <p className='w-1/3 text-lg py-6 hidden md:inline-block'>{overview}</p>} */}

      <div>
        <button className='text-black bg-white px-3 md:px-12 py-1 md:py-4  text-2xl font-mono rounded-lg hover:bg-opacity-80 hidden md:inline-block '> Play</button>
        
        <button className=' px-3 md:px-12 md:mt-64 py-1 md:py-4  text-2xl rounded-lg hover:bg-opacity-80 font-mono hidden text-white md:inline-block hover:bg-gray-600 bg-gray-500 opacity-50 mx-5'>  More Info </button>

      </div>

    </div>
  )
}

export default VideoTitle