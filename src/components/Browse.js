import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useRatedTVEpisodes from '../hooks/useRatedTVEpisodes';
import useHorrorMovies from '../hooks/useHorrorMovies';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useHorrorMovies();
  useTopRatedMovies();
  useRatedTVEpisodes();

  return (
      <div>
        <Header />
        {showGptSearch ? (
          <GptSearchPage /> ) : (
            <>  
        <MainContainer />
        <SecondaryContainer />
            </>
        )}

      </div>
  )
}

export default Browse