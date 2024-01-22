import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile 
  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Slices/userSlice';
import { NETFLIX_BACKGROUND, USER_AVATAR } from '../utils/constants';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData( email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm) {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value, 
        )
        .then((userCredential) => {
          // Signed up 
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name.current.value, photoURL: USER_AVATAR
      }).then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
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
        
      }).catch((error) => {
        setErrorMessage(error.message)
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
    else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        )
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  
    }
  }

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <Header />

        <div className='absolute '>
          <img 
            className='w-screen md:object-cover object-cover'
            src={NETFLIX_BACKGROUND}
            alt='logo'
          />
        </div>

<form 
className='absolute w-full h-min md:w-3/12 p-12 my-20 text-white mx-auto left-0 right-0 bg-black rounded-lg bg-opacity-80 '
onSubmit={(e) => e.preventDefault()}
>
<h1 className='text-4xl py-4  font-bebasneue  font-bold'>
{isSignInForm ? "Sign In" : "Sign Up"}
</h1>

{!isSignInForm && (
<input
ref={name}
type='text'
className='w-full my-4 p-4 bg-gray-800  '
placeholder='Full Name'
/>
)}

<input
ref={email}
type='email'
className='w-full my-4 p-4 bg-gray-800'
placeholder='Email Address'
/>

<input
ref={password}
type={showPassword ? "text" : "password"}
className='w-full p-4 my-4 bg-gray-800 '
placeholder='Password'
/>
<input
className=' h-10 w-4 accent-white' 
type='checkbox'
onClick={togglePassword}
/> 
<p className='text-yellow-600 font-bebasneue text-lg text-center border-yellow-900'>{errorMessage}</p>


<button 
className='w-full my-6 p-4 rounded-lg  bg-red-700 font-bebasneue'
onClick={handleButtonClick}
>
  {isSignInForm ? "Sign In" : "Sign Up"}

</button>

<p className='mb-2 cursor-pointer font-serif'
onClick={toggleSignIn}
>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
</form>
</div>
  )
}

export default Login