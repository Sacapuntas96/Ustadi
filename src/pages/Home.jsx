import "./../Index.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='header'>
        <a href=''>
          <img src='main.html' alt='' />
        </a>
        <div className='button-container'>
          <Link to={"/"} className='nav-link'>
            <button>
              <p>Home</p>
            </button>
          </Link>
          <Link to={"/listing"} className='nav-link'>
            <button>
              <p>Subjects</p>
            </button>
          </Link>
          <button>
            <p>Contact</p>
          </button>
          <button>
            <p>Help</p>
          </button>
        </div>
        <div className='account'>
          <Link to='/login' className='nav-link'>
            <button className='login'>Login</button>
          </Link>
          <Link to={"/sign-in"} className='nav-link'>
            <button className='signin'>Sign in</button>
          </Link>
          <button className='profile'></button>
        </div>
      </div>
      <div className='hero'>
        <h1>
          Find the <span>perfect</span> personal tutor <br />
          With the <span>perfect</span> price
        </h1>
        <p>Trouve la matière qui te convient</p>
        <div className='catalog'>
          <div className='search'>
            <input placeholder='Search for a lesson...' type='text' />
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
        <h1>
          Looking for a tutoring job ? <br />
          We're open !
        </h1>
        <p>Join our community and find students to teach your subject</p>
        <button>Apply</button>
      </div>
      <div className='footer'>
        <div className='footer-top'>
          <div className='first-container'>
            <h1>
              Ustadi<span>.</span>
            </h1>
            <p className='footer-tagline'>
              Find the right tutor for every subject, at the right price.
            </p>
            <label htmlFor='review'>Want to leave us a review ?</label>
            <div className='submit'>
              <input id='review' type='text' placeholder='I think that...' />
              <button>Submit</button>
            </div>
          </div>

          <div className='footer-links'>
            <div className='footer-column'>
              <h2>Support</h2>
              <Link to={"/get-help"} className='nav-link'>
                <button>Get help</button>
              </Link>
              <button>How it works</button>
            </div>
            <div className='footer-column'>
              <h2>Legal</h2>
              <Link to='/privacy-policy' className='nav-link'>
                <button>Privacy policy</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <span>© 2026 Ustadi. All rights reserved.</span>
          <span>Made in Morocco 🇲🇦</span>
        </div>
      </div>
    </>
  );
}
