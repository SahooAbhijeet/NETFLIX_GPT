import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { auth } from '../utils/firebase'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    // console.log(name.current.value);

    const message = checkValidData( email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);

    if(message) return;

    if(!isSignInForm) {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value, 
        // name.current.value
        )
        .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      console.log(user)
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
    // ...
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
  return (
    <div>
    <div className='absolute'>
        <Header />
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='logo'
        />
    </div>

<form 
className='absolute w-3/12  mt-20 p-12 my-36 text-white mx-auto left-0 right-0 bg-black rounded-lg bg-opacity-80'
onSubmit={(e) => e.preventDefault()}
>
<h1 className='text-3xl py-4 font-bold'>
{isSignInForm ? "Sign In" : "Sign Up"}
</h1>

{!isSignInForm && (
<input
ref={name}
type='text'
className='w-full my-4 p-4 bg-gray-800'
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
type='password'
className='w-full p-4 my-4 bg-gray-800 '
placeholder='Password'
/>
<p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
<button 
className='w-full my-10 p-4 rounded-lg bg-red-700 '
onClick={handleButtonClick}
>
  {isSignInForm ? "Sign In" : "Sign Up"}

</button>

<p className='mb-2 cursor-pointer'
onClick={toggleSignIn}
>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
</form>
</div>
  )
}

export default Login