import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shimmer from './Shimmer'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/browse',
            element: <Browse />,
        },
        {
          path: '/shimmer',
          element: <Shimmer />

        }
    ])

  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}


export default Body