import React from 'react'
import SocialMedia from '../utils/socialMedia'

const Footer = () => {
  return (
    <div className='md:w-full md:h-full bg-black text-gray-500'>
        <SocialMedia />
        <div className='md:grid grid-cols-12'>
            <ul className='md:mx-48 mx-4 mt-4 col-span-2'>
                <li className='hover:text-white transition duration-400 whitespace-nowrap'>Audio Description</li><br />
                <li className='hover:text-white transition duration-400 whitespace-nowrap'>Investor Relations</li><br />
                <li className='hover:text-white transition duration-400 whitespace-nowrap'>Legal Notices</li><br />
            </ul>

            <ul className='md:mx-48 mx-4 mt-4 col-span-2'>
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Help Center</li><br />
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Jobs</li><br />
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Cookie Preferences</li><br />
        </ul>

        <ul className='md:mx-48 mx-4 mt-4 col-span-2'>
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Gift Cards</li><br />
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Terms of Use</li><br />
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Corporate Information</li><br />
        </ul>

        <ul className='md:mx-48 mx-4 mt-4 col-span-2'>
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Media Center</li><br />
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Privacy</li><br />
            <li className='hover:text-white transition duration-400 whitespace-nowrap'>Contact Us</li><br />
        </ul>

       


        </div>
        <p className='md:mx-48 mx-4'> ©  1997-2024 Netflix. Inc.</p>
    </div>
  )
}

export default Footer