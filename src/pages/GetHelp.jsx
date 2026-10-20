import "./../Index.css"
import {Link} from "react-router-dom"

export default function GetHelp(){
    return (
        <>
            <div className='header'>
                <a href=""><img src="main.html" alt="" />
                </a>
                <div className='button-container'>
                <Link to={"/"} className="nav-link"><button><p>Home</p></button></Link>
                <button><p>Subjects</p></button>
                <button><p>Contact</p></button>
                <Link to={"/get-help"} className="nav-link"></Link><button><p>Help</p></button>
                </div>
                <div className='account'>
                <Link to="/login" className='nav-link'><button className='login'>Login</button></Link>
                <button className='signin'>Sign in</button>
                <button className='profile'></button>
                </div>
            </div>

            <div className='footer'>
                <div className='footer-top'>
                    <div className='first-container'>
                    <h1>Ustadi<span>.</span></h1>
                    <p className='footer-tagline'>
                        Find the right tutor for every subject, at the right price.
                    </p>
                    <label htmlFor='review'>Want to leave us a review ?</label>
                    <div className='submit'>
                        <input id='review' type="text" placeholder='I think that...' />
                        <button>Submit</button>
                    </div>
                    </div>

                    <div className='footer-links'>
                    <div className='footer-column'>
                        <h2>Support</h2>
                        <Link to={"/get-help"} className="nav-link"><button>Get help</button></Link>
                        <button>How it works</button>
                    </div>
                    <div className='footer-column'>
                        <h2>Legal</h2>
                        <Link to="/privacy-policy" className="nav-link"><button>Privacy policy</button></Link>
                    </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <span>© 2026 Ustadi. All rights reserved.</span>
                    <span>Made in Morocco 🇲🇦</span>
                </div>
            </div>
        </>
    )
}