import "../Index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const identifier_error = (value) => {
    return value.trim().length != 8;
  };

  const password_error = (pass) => {
    return pass.length < 8;
  };

  const clearError = (field) => {
    setErrors({ ...errors, [field]: false });
  };

  const [loginType, setLoginType] = useState("Adresse e-mail");

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
              <label>Je me connecte avec</label>
              <div
                className="selection"
                role="group"
                aria-label="Type de compte"
              >
                <button
                  type="button"
                  aria-pressed={loginType === "Adresse e-mail"}
                  onClick={() => setLoginType("Adresse e-mail")}
                >
                  Adresse e-mail
                </button>
                <button
                  type="button"
                  aria-pressed={loginType === "Numéro de téléphone"}
                  onClick={() => setLoginType("Numéro de téléphone")}
                >
                  Numéro de téléphone
                </button>
                
              </div>
            </div>
            <div className="field">
              <label>{loginType}</label>
              <input
                type="text"
                value={identifier}
                placeholder={loginType == "Numéro de téléphone" ? "06 12 34 56 78" : "adresse@exemple.com"}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  clearError("identifier");
                }}
              />
              {errors.identifier && (
                <p className="error">Numéro de téléphone ou e-mail invalide</p>
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
              {errors.password && <p className="error">8 caractères minimum</p>}
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
