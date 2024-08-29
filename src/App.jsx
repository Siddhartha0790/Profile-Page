import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Profilepage from './components/profilepage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <Navbar />
     <Profilepage />
     </>
  )
}

export default App
