import "../Index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const identifier_error = (value) => {
    return value.trim().length < 3;
  };

  const password_error = (pass) => {
    return pass.length < 8;
  };

  const clearError = (field) => {
    setErrors({ ...errors, [field]: false });
  };

  const handleSubmit = () => {
    const newErrors = {
      identifier: identifier_error(identifier),
      password: password_error(password),
    };
    setErrors(newErrors);
    if (!Object.values(newErrors).includes(true)) {
      console.log("ok");
    }
  };

  return (
    <>
      <div className="container">
        <div className="landscape">
          <Link to="/" className="nav-link">
            <h1>
              Ustadi<span>.</span>
            </h1>
          </Link>
        </div>
        <div className="filler">
          <form>
            <div className="field">
              <label>Nom d'utilisateur ou adresse e-mail</label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  clearError("identifier");
                }}
              />
              {errors.identifier && (
                <p className="error">Nom d'utilisateur ou e-mail invalide</p>
              )}
            </div>
            <div className="field">
              <label>Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearError("password");
                }}
              />
              {errors.password && (
                <p className="error">8 caractères minimum</p>
              )}
            </div>
            <div
              style={{
                display: "flex",
                width: 100 + "%",
                justifyContent: "space-between",
              }}
            >
              <Link to="/forgot-password" className="nav-link">
                <p>Mot de passe oublié ?</p>
              </Link>
              <Link to="/sign-in " className="nav-link">
                <p>Pas de compte ?</p>
              </Link>
            </div>
            <button type="button" onClick={handleSubmit}>
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}