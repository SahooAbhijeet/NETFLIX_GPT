import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { NETFLIX_LOGO } from '../utils/constants';
import { addUser, removeUser } from '../Redux/Slices/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
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

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        src={NETFLIX_LOGO}
        alt='logo'
        className=' w-52'
        />

        {user && <div className='flex p-2 my-2'>
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
        </div>}
    </div>

    // src=''
  )
}

export default Header