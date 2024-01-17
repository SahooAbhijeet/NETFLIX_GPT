import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addGptMoviesResult } from '../Redux/Slices/GptSlice';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    
    // This function will take a movie and search that  movie in a TMDB API
      const searchMovieTMDB = async (movie) => {
        const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + 
          movie +
        "&include_adult=false&language=en-US&page=1",
        TMDB_API_OPTIONS
        );
        const json = await data.json();
        return json.results; 
      }

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

      if(!gptResults) {
       console.log({message: "GPT API FAILED"});
      }
      console.log(gptResults?.choices[0]?.message?.content);

      const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

      // ['Stree', ' Bhool Bhulaiyaa', ' Go Goa Gone', ' Housefull 3', ' Roohi']
      // For each movie call the Search API of TMDB and findout the results of the movie

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addGptMoviesResult({
          moviesNames: gptMovies, moviesResults: tmdbResults
         }));

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