import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <a href=""></a>
        <button>Home</button>
        <button>Subjects</button>
        <button>Contact</button>
        <button>Help</button>
      </div>
    </>
  )
}

export default App
