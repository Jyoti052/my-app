
import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Register from './sceens/Register';

import store from '../store/store'
import { Provider } from 'react-redux'
import Contact from './sceens/Contact';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>          
        },
  {
    path: "/contact",
    element: <Contact/>
        },
      ])

function App() {
  return (
    <Provider store={store}>
    <div><RouterProvider router={router} /></div>
    </Provider>
  )
}

export default App;