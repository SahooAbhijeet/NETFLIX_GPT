import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='md:mx-48 mx-4 gap-8 flex '>
       <a
       className='mt-16 text-4xl hover:text-white'
       href='https://www.facebook.com/NetflixIN/?brand_redir=475822799216240'
       target='_blank'
       rel='noreferrer'
       >
        <FaFacebook />
       </a>

       <a
       className='mt-16 text-4xl hover:text-white'
       href='https://www.instagram.com/netflix_in/?hl=en'
       target='_blank'
       rel='noreferrer'
       >
        <FaInstagram />
       </a>

       <a
       className='mt-16 text-4xl hover:text-white'
       href='https://twitter.com/netflix'
       target='_blank'
       rel='noreferrer'
       >
        <FaSquareXTwitter />
       </a>

       <a
       className='mt-16 text-4xl hover:text-white'
       href='https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw'
       target='_blank'
       rel='noreferrer'
       >
        <FaYoutube />
       </a>
    </div>
  )
}

export default SocialMedia