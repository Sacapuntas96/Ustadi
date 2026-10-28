import { useState } from "react";
import "./../Index.css";
import { Link } from "react-router-dom";

export default function Listing() {
  const SUBJECTS = [
    "Français",
    "Arabe",
    "Amazighe",
    "Anglais",
    "Espagnol",
    "Mathématiques",
    "Physique-Chimie",
    "Sciences de la Vie et de la Terre (SVT)",
    "Histoire-Géographie",
    "Éducation islamique",
    "Philosophie",
    "Informatique",
    "Technologie",
    "Éducation physique et sportive",
    "Éducation artistique",
  ];

  const GRADES = [
    "CP",
    "CE1",
    "CE2",
    "CM1",
    "CM2",
    "6ème",
    "5ème",
    "4ème",
    "3ème",
    "Seconde",
    "Première",
    "Terminale",
    "Bac+1",
    "Bac+2",
    "Bac+3"
  ]

  const TYPES = [
    "Distanciel",
    "Présentiel",
    "Hybride"
  ]

  const [subject_hover, setSubjectHover] = useState(false)
  const [grade_hover, setGradeHover] = useState(false)
  const [type_hover, setTypeHover] = useState(false)

  const disable_all = () => {
    setSubjectHover(false)
    setGradeHover(false)
    setTypeHover(false)
  }

  return (
    <>
      <div className='header' onClick={() => setSubjectHover(false)}>
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
          <Link to={"/get-help"} className='nav-link'>
            <button>
              <p>Help</p>
            </button>
          </Link>
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
      <div className='listing-container'>
        <div className="listing-search">
          <h1>Find a tutor</h1>
          <div className='search-bar'>
            
            <input type='text' placeholder='Search for a specific subject...' />
            <button className="search-button">Search</button>
            <button className="filter-cleaner">Clear Filters</button>
          </div>
        </div>
        <div className="listing-content">
            <div className='filters'>
              <div className='dropdown' onClick={() => {disable_all()
              setSubjectHover(subject_hover == true ? false : true)
                
              }}>
                <p><div>Subject</div> ↓</p>

                <ul className={`dropdown-menu ${subject_hover ? "open" : ""}`} onMouseLeave={() => setSubjectHover(false)}>
                  {SUBJECTS.map((subject) => (
                    <li key={subject}>
                      <button
                        type="button"
                      >
                        {subject}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='dropdown' onClick={() => {disable_all()
              setGradeHover(grade_hover == true ? false : true)}}>
                <p><div>Grade</div> ↓</p>

                <ul className={`dropdown-menu ${grade_hover ? "open" : ""}`} onMouseLeave={() => {disable_all()
                setGradeHover(false)}}>
                  {GRADES.map((grade) => (
                    <li key={grade}>
                      <button
                        type="button"
                      >
                        {grade}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='dropdown' onClick={() => {disable_all()
              setTypeHover(type_hover == true ? false : true)}}>
                <p><div>Type</div> ↓</p>

                <ul className={`dropdown-menu ${type_hover ? "open" : ""}`} onMouseLeave={() => setTypeHover(false)}>
                  {TYPES.map((type) => (
                    <li key={type}>
                      <button
                        type="button"
                      >
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

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
