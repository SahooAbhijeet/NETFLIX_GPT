import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
      // Make an API call to GPT API and get the movie results

      const gptQuery = 
      "Act as a movie recommendation system and suggest some movies for the query:" +
        searchText.current.value + 
      ".only give me names of 5 movies, comma separated like the example result given ahead.Example Result: Pathaan, Jawan, Fighter, Jeene Nhi Doonga, Golmaal Returns";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(gptResults.choices)
    }
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form 
        className='bg-black grid grid-cols-12 md:w-1/2 w-full'
        onSubmit={(e) => e.preventDefault()}
        >
            <input 
            ref={searchText}
            className='p-4 m-4 col-span-9'
            type='text'
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='bg-red-700 m-4 px-4 py-2 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar