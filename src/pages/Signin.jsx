import { Link } from "react-router-dom";
import "./../Index.css";
import { useState } from "react";

export default function Signin() {
  const [password, setPassword] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLasttName] = useState("")
  const [passwordconfirm, setPasswordConfirm] = useState("")
  const [password_error, setPasswordError] = useState(false)
  const [first_name_error, setFirstNameError] = useState(false)
  const [last_name_error, setLastNameError] = useState(false)

  const releaseFirstNameError = () => {
    setFirstNameError(first_name.length < 2 || first_name.includes())
  }

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
            <label>Last Name</label>
            <input type='text' placeholder='' />
            {last_name_error &&
              <p className="error">Last name is invalid</p>
            }
            <label>First Name</label>
            <input type='text' placeholder='' />
            {first_name_error &&
              <p className="error">First name is invalid</p>
            }
            <label>Phone Number (optional)</label>
            <input type='text' placeholder='06 12 34 56 78' />
            <label>E-mail</label>
            <input type='text' placeholder='name@example.com' />
            <label>Password</label>
            <input type='password' placeholder='Apple123' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <label>Confirm Password</label>
            <input type='password' value={passwordconfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
            {password_error && 
                <p className="error">Passwords are not the same</p>
            }
            <button type="button" onClick={() => setPasswordError(password != passwordconfirm)}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
