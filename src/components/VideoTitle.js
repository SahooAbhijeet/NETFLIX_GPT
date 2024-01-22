import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const VideoTitle = ({title, overview}) => {

  const navigate = useNavigate();
  

  return (
    <div className='pt-[10%] px-6 md:px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='font-bold font-bebasneue text-sm md:text-5xl md:mt-0 mt-[60px] group-hover:text-lg'>{title}</h1>
      { <p className='md:w-1/2 text-lg py-6 hidden md:inline-block font-serif'>{overview}</p>}

      <div className='md:mt-20 mt-0 space-x-10'>

        <button className='bg-white hover:opacity-80 text-black font-bebasneue md:py-2 py-1 md:text-xl text-sm md:px-4 px-2 rounded md:inline-flex items-center hidden'> <FaPlay className='md:w-10 w-5 md:h-6 h-3  md:mr-1'/>Play</button>
        
        <button className='bg-white hover:opacity-80 text-black font-bebasneue md:py-2 py-1 md:text-xl text-sm md:px-4 px-2 rounded md:inline-flex items-center hidden'> <IoIosInformationCircleOutline className='md:w-10 w-5 md:h-6 h-3  md:mr-1'/>More Info</button>

      </div>

    </div>
  )
}

export default VideoTitle