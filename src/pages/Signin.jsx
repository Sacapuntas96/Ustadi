import { Link, useSearchParams } from "react-router-dom";
import "../Index.css";
import { useState } from "react";

export default function Signin() {
  const [searchParms, setSearchParm] = useSearchParams();  
  const passed_type = searchParms.get("type");
  
  const [role, setRole] = useState(passed_type || "student");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLasttName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const name_error = (name) => {
    const n = name.trim();
    return (
      n.length < 2 ||
      n.length > 50 ||
      !/^[\p{L}][\p{L}\s'-]*$/u.test(n) ||
      /(.)\1{2,}/.test(n)
    );
  };

  const phone_error = (phone) => {
    const p = phone.replace(/[\s.-]/g, "");
    return !/^(?:0|\+212|00212)[5-7]\d{8}$/.test(p);
  };

  const email_error = (mail) => {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.trim());
  };

  const password_error = (pass) => {
    return pass.length < 8 || !/\d/.test(pass) || !/[A-Za-z]/.test(pass);
  };

  const clearError = (...fields) => {
    const updated = { ...errors };
    fields.forEach((field) => {
      updated[field] = false;
    });
    setErrors(updated);
  };

  const handleSubmit = () => {
    const newErrors = {
      last_name: name_error(last_name),
      first_name: name_error(first_name),
      phone: phone_error(phoneNumber),
      email: email_error(email),
      password: password_error(password),
      confirm: password !== passwordconfirm,
    };
    setErrors(newErrors);
    if (!Object.values(newErrors).includes(true)) {
      console.log("ok", { role });
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
              <label>Je suis</label>
              <div className="selection" role="group" aria-label="Type de compte">
                <button
                  type="button"
                  aria-pressed={role === "student"}
                  onClick={() => setRole("student")}
                >
                  Élève
                </button>
                <button
                  type="button"
                  aria-pressed={role === "tutor"}
                  onClick={() => setRole("tutor")}
                >
                  Professeur
                </button>
              </div>
            </div>
            <div>
              <div className="field">
                <label>Nom</label>
                <input
                  type="text"
                  value={last_name}
                  onChange={(e) => {
                    setLasttName(e.target.value);
                    clearError("last_name");
                  }}
                  placeholder="Dupont"
                />
                {errors.last_name && (
                  <p className="error">Ce nom est invalide</p>
                )}
              </div>
              <div className="field">
                <label>Prénom</label>
                <input
                  type="text"
                  value={first_name}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    clearError("first_name");
                  }}
                  placeholder="Marie"
                />
                {errors.first_name && (
                  <p className="error">Ce prénom est invalide</p>
                )}
              </div>
            </div>
            <div className="field">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={18}
                placeholder="06 12 34 56 78"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  clearError("phone");
                }}
              />
              {errors.phone && (
                <p className="error">Numéro de téléphone invalide</p>
              )}{" "}
            </div>
            <div className="field">
              <label>E-mail</label>
              <input
                type="text"
                placeholder="adresse@exemple.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError("email");
                }}
              />
              {errors.email && <p className="error">E-mail invalide</p>}
            </div>
            <div>
              <div className="field">
                {" "}
                <label>Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    clearError("password", "confirm");
                  }}
                />
                {errors.password && (
                  <p className="error">
                    8 caractères minimum, avec une lettre et un chiffre
                  </p>
                )}
              </div>

              <div className="field">
                <label>Confirmer mot de passe</label>
                <input
                  type="password"
                  value={passwordconfirm}
                  onChange={(event) => {
                    setPasswordConfirm(event.target.value);
                    clearError("confirm");
                  }}
                />
                {errors.confirm && (
                  <p className="error">Les mots de passe diffèrent</p>
                )}
              </div>
            </div>
            <Link to="/login" className="nav-link">
              <p>Tu possède un compte ?</p>
            </Link>
            <button type="button" onClick={handleSubmit}>
              Créér un compte
            </button>
          </form>
        </div>
      </div>
    </>
  );
}