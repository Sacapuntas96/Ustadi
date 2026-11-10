import "../Index.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className='container'>
        <div className='landscape'>
          <Link to='/' className='nav-link'>
            <h1>
              Ustadi<span>.</span>
            </h1>
          </Link>
        </div>
        <div className='filler'>
          <form>
            <div className='field'>
              <label>Nom d'utilisateur ou adresse e-mail</label>
              <input type='text' />
            </div>
            <div className='field'>
              <label>Mot de passe</label>
              <input type='password' />
            </div>
            <div style={{display:"flex", width:100 + "%", justifyContent:"space-between"}}>
            <Link to='/forgot-password' className='nav-link'>
              <p>Mot de passe oublié ?</p>
            </Link>
            <Link to='/sign-in ' className='nav-link'>
              <p>Pas de compte ?</p>
            </Link></div>
            <button>Se connecter</button>
          </form>
        </div>
      </div>
    </>
  );
}
