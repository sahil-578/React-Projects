import { useState } from 'react'
import logo from './assets/ColorPlay.png'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      
      <img src={logo} alt="Logo img" className=' h-auto w-40' />
      
      <h1 className="text-3xl font-bold text-white text-center mt-48" style={{fontSize : '80px'}}>Change the background color</h1>
      
      <div className='flex flex-wrap fixed justify-center px-2 bottom-12 inset-x-0'>
        
        <div className='flex flex-wrap px-3 py-2 rounded-2xl justify-center gap-3 bg-white shadow-lg'>
          
          <button onClick={() => setColor('Red')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Red'}}>Red</button>
          <button onClick={() => setColor('Yellow')} className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor : 'Yellow'}}>Yellow</button>
          <button onClick={() => setColor('Blue')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Blue'}}>Blue</button>
          <button onClick={() => setColor('Olive')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Olive'}}>Olive</button>
          <button onClick={() => setColor('Pink')} className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor : 'Pink'}}>Pink</button>
          <button onClick={() => setColor('Lavender')} className='outline-none px-4 py-1 text-black shadow-lg rounded-full' style={{backgroundColor : 'Lavender'}}>Lavender</button>
          <button onClick={() => setColor('Grey')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Grey'}}>Grey</button>
          <button onClick={() => setColor('Orange')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Orange'}}>Orange</button>
          <button onClick={() => setColor('Violet')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Violet'}}>Violet</button>
          <button onClick={() => setColor('Indigo')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Indigo'}}>Indigo</button>
          <button onClick={() => setColor('Navy')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full' style={{backgroundColor : 'Navy'}}>Navy</button>

        </div>
      </div>
    </div>
  )
}

export default App