import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar/navbar'
import {About, Home, Contact, Services} from './components/pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'> 
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path= '/about' element= {<About />} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/services' element= {<Services/>} />
      </Routes>
      
    </div>
  )
}

export default App
