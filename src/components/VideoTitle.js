import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[12%] px-24  absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-1/4 text-lg py-6'>{overview}</p>

      <div>
        <button className='text-black bg-white px-12 p-4 text-3xl rounded-lg  inline-flex hover:bg-opacity-80 '> <FaPlay className='my-2 mx-4'/> Play</button>
        
        <button className='bg-gray-500 opacity-50 hover:bg-gray-600 mx-4 text-white px-12 p-4 text-2xl rounded-lg inline-flex'> <IoIosInformationCircleOutline className=' mx-3  text-4xl' /> More Info </button>

      </div>

    </div>
  )
}

export default VideoTitle