import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Profilepage from './components/profilepage.jsx'
import Admin from './components/admin.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/user",
      element: <><Navbar/>
      <Profilepage client='user' />
      </>,
    },
    {
      path: "/admin",
      element: <><Navbar/>
      <Profilepage client = 'admin' />
     </>,
    },
    {
      path: "/adminrequest",
      element: <><Navbar/>
      <Admin />
      </>,
    },
    
    
  ]);
  
    return(
      
      <RouterProvider router = {router}></RouterProvider>
      
    )
  }


 


export default App
