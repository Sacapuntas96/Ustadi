import './App.css'

function App() {
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
        <div className='account'>
          <button className='login'>Login</button>
          <button className='signin'>Sign in</button>
          <button className='profile'></button>
        </div>
      </div>
      <div className='hero'>
        <h1>Find the <span>perfect</span> personal tutor <br />With the <span>perfect</span> price</h1>
        <p>Trouve la matière qui te convient</p>
        <div className='catalog'>
          <div className='search'>
            <input placeholder='Search for a lesson...' type="text" />
            <button>Search</button>
          </div>
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
      </div>
      <div className='tutor'>
        <h1>Looking for a tutoring job ? <br />We're open !</h1>
        <p>Join our community and find students to teach your subject</p>
        <button>Apply</button>
      </div>
      <div className='footer'>

      </div>
    </>
  )
}

export default App