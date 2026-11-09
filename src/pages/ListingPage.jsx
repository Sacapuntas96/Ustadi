import "../Index.css"
import {Link} from "react-router-dom"

export default function ListingPage(){
    return (
        <>
            <div className="header">
        <a href="">
          <img src="main.html" alt="" />
        </a>
        <div className="button-container">
          <Link to={"/"} className="nav-link">
            <button><p>Home</p></button>
          </Link>
          <Link to={"/listing"} className="nav-link">
            <button className="is-active"><p>Subjects</p></button>
          </Link>
          <Link to={"/contact"} className="nav-link">
            <button><p>Contact</p></button>
          </Link>
          <Link to={"/get-help"} className="nav-link">
            <button><p>Help</p></button>
          </Link>
        </div>
        <div className="account">
          <Link to="/login" className="nav-link">
            <button className="login">Login</button>
          </Link>
          <Link to={"/sign-in"} className="nav-link">
            <button className="signin">Sign in</button>
          </Link>
          <button className="profile"></button>
        </div>
      </div>
        </>
    )
}