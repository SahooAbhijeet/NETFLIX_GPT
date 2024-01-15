import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black grid grid-cols-12 w-1/2'>
            <input 
            className='p-4 m-4 col-span-9'
            type='text'
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='bg-red-700 m-4 px-4 py-2 text-white rounded-lg col-span-3'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar