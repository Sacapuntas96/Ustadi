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
        <a href=""><img src="main.html" alt="" />
        </a>
        <div className='button-container'>
          <button><p>Home</p></button>
          <button><p>Subjects</p></button>
          <button><p>Contact</p></button>
          <button><p>Help</p></button>
        </div>
      </div>
      <div className='hero'>
        <h1>Find the perfect personal tutor <br />With the perfect </h1>
        <p>Trouve la matière qui te convient</p>
        <div className='subjects'>
          <button>Français</button>
          <button>Arabe</button>
          <button>Amazighe</button>
          <button>Anglais</button>
          <button>Espagnol</button>
          <button>Mathématiques</button>
          <button>Physique-Chimie</button>
          <button>Sciences de la Vie et de la Terre (SVT)</button>
          <button>Histoire-Géographie</button>
          <button>Éducation islamique</button>
          <button>Philosophie</button>
          <button>Informatique</button>
          <button>Technologie</button>
          <button>Éducation physique et sportive</button>
          <button>Éducation artistique</button>
        </div>
      </div>
    </>
  )
}

export default App
