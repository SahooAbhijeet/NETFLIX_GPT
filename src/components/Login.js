import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
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

<form className='absolute w-3/12 p-12 my-36 text-white mx-auto left-0 right-0 bg-black rounded-lg bg-opacity-80'>
<h1 className='text-3xl font-bold'>
{isSignInForm ? "Sign In" : "Sign Up"}
</h1>
{isSignInForm && (
<input
type='text'
className='w-full my-4 p-4 bg-gray-800'
placeholder='Full Name'
/>
)}
<input
type='email'
className='w-full my-4 p-4 bg-gray-800'
placeholder='Email Address'
/>

<input
type='password'
className='w-full p-4 bg-gray-800'
placeholder='Password'
/>

<button 
className='w-full my-10 p-4 rounded-lg bg-red-700 '
>{isSignInForm ? "Sign In" : "Sign Up"}

</button>
<input 
type='checkbox'
className='h-4 w-4 bg-gray-800 '
/>
<label className='mx-2  text-sm '>Remember Me</label>
<p className='py-4 cursor-pointer'
onClick={toggleSignIn}
>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
</form>
</div>
  )
}

export default Login