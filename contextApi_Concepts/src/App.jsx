// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hi there</h1> 
      <Login/>
      <Profile/>     
    </UserContextProvider>
  )
}

export default App
