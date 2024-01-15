import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { addUser, removeUser } from '../Redux/Slices/userSlice';
import { toggleGptSearchView } from '../Redux/Slices/GptSlice';
import { changeLanguage } from '../Redux/Slices/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser(
            { 
              uid:uid, 
              email:email, 
              displayName:displayName, 
              photoURL:photoURL 
            }
          )
        );
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    /* 
    * Unsubscribe when the component unmounts
    */
    return () => unSubscribe();

  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        src={NETFLIX_LOGO}
        alt='logo'
        className='w-44'
        />

        {user && (
        <div className='flex p-4 '>
            {showGptSearch && (
            <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleChangeLanguage}>
              {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifer}value={lang.identifer}>
                {lang.name}
              </option>
              )
            )}
            </select>)}
          <button className='bg-purple-800 py-2 px-4 text-white rounded-lg mx-4 my-1'
          onClick={handleGptSearchClick}
          >

          {showGptSearch ? "HomePage" : "GPT Search"} 
          
          </button>
          <img 
          className='h-12 w-12'
          src={user.photoURL}
          alt='user-icon'
          />

          <button 
          className='text-red-500 font-bold '
          onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
        )}
    </div>

  )
}

export default Header