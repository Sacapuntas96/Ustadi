import { Link } from "react-router-dom";
import "./../Index.css";
import { useState } from "react";

export default function Signin() {
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLasttName] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [password_error, setPasswordError] = useState(false);
  const [first_name_error, setFirstNameError] = useState(false);
  const [last_name_error, setLastNameError] = useState(false);

  const releaseFirstNameError = () => {
    setFirstNameError(first_name.length < 2 || first_name.includes());
  };

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
            <div>
              <div className='field'>
                <label>Last Name</label>
                <input type='text' placeholder='Dupont' />
                {last_name_error && (
                  <p className='error'>Last name is invalid</p>
                )}
              </div>
              <div className='field'>
                <label>First Name</label>
                <input type='text' placeholder='Marie' />
                {first_name_error && (
                  <p className='error'>First name is invalid</p>
                )}
              </div>
            </div>
            <div className='field'>
              <label>Phone Number (optional)</label>
              <input type='text' placeholder='06 12 34 56 78' />
            </div>
            <div className='field'>
              <label>E-mail</label>
              <input type='text' placeholder='name@example.com' />
            </div>
            <div>
              <div className='field'>
                {" "}
                <label>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className='field'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  value={passwordconfirm}
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                />
              </div>
            </div>

            {password_error && (
              <p className='error'>Passwords are not the same</p>
            )}
            <button
              type='button'
              onClick={() => setPasswordError(password != passwordconfirm)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
