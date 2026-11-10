import { Link } from "react-router-dom";
import "../Index.css";
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
                <label>Nom</label>
                <input type='text' placeholder='Dupont' />
                {last_name_error && (
                  <p className='error'>Ce nom est invalide</p>
                )}
              </div>
              <div className='field'>
                <label>Prénom</label>
                <input type='text' placeholder='Marie' />
                {first_name_error && (
                  <p className='error'>Ce prénom est invalide</p>
                )}
              </div>
            </div>
            <div className='field'>
              <label>Numéro de téléphone (optionel)</label>
              <input type='text' placeholder='06 12 34 56 78' />
            </div>
            <div className='field'>
              <label>E-mail</label>
              <input type='text' placeholder='adresse@exemple.com' />
            </div>
            <div>
              <div className='field'>
                {" "}
                <label>Mot de passe</label>
                <input
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className='field'>
                <label>Confirmer mot de passe</label>
                <input
                  type='password'
                  value={passwordconfirm}
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                />
              </div>
            </div>
        <Link to='/login' className='nav-link'>
              <p>Tu possède un compte ?</p>
            </Link>

            {password_error && (
              <p className='error'>Les mots de passe diffèrent</p>
            )}
            <button
              type='button'
              onClick={() => setPasswordError(password != passwordconfirm)}
            >
              Créér un compte
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
