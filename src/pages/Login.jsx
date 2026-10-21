import "./../Index.css";
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
              <label>Username or e-mail</label>
              <input type='text' />
            </div>
            <div className='field'>
              <label>Password</label>
              <input type='password' />
            </div>

            <Link to='/forgot-password' className='nav-link'>
              <p>Forogt password ?</p>
            </Link>
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
