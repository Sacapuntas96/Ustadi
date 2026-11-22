import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../Index.css";
import { useState } from "react";

const MIN_AGE = 16;

const years_ago = (years) => {
  const d = new Date();
  d.setFullYear(d.getFullYear() - years);
  return d.toLocaleDateString("en-CA");
};

const MAX_BIRTH = years_ago(MIN_AGE);
const MIN_BIRTH = years_ago(100);

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
  return !/^0[5-7]\d{8}$/.test(normalizePhone(phone));
};

const email_error = (mail) => {
  return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.trim());
};

const password_error = (pass) => {
  return pass.length < 8 || !/\d/.test(pass) || !/[A-Za-z]/.test(pass);
};

const birth_date_error = (value) => {
  return !value || value > MAX_BIRTH || value < MIN_BIRTH;
};



export default function Signin() {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const passed_type = searchParams.get("type");

  const [role, setRole] = useState(passed_type || "student");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const [availabilityError, setAvailabilityError] = useState(false);

  const normalizePhone = (phone) => {
    let p = phone.replace(/[\s.-]/g, "");

    if (p.startsWith("+212")) {
      p = "0" + p.slice(4);
    } else if (p.startsWith("00212")) {
      p = "0" + p.slice(5);
    } else if (p.startsWith("212")) {
      p = "0" + p.slice(3);
    }

    return p;
  };

  const phone_error = (phone) => {
    return !/^0[5-7]\d{8}$/.test(normalizePhone(phone));
  };

  const clearError = (...fields) => {
    setErrors((previous) => {
      const updated = { ...previous };
      fields.forEach((field) => {
        updated[field] = false;
      });
      return updated;
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault(); 

  const newErrors = {
    first_name: name_error(first_name),
    last_name: name_error(last_name),
    birth_date: birth_date_error(birthDate),
    phone: role === "tutor" ? phone_error(phoneNumber) : false,
    email: email_error(email),
    password: password_error(password),
    confirm: password !== passwordconfirm,
  };

  setErrors(newErrors);
  setAvailabilityError(false);

  if (Object.values(newErrors).includes(true)) return;

  try {
    const availabilityParams = new URLSearchParams({
      type: role,
      phone: normalizePhone(phoneNumber),
      email: email.trim(),
    });

    const availabilityRes = await fetch(`/api/availability?${availabilityParams}`);
    const taken = await availabilityRes.json();

    if (taken.length !== 0) {
      setAvailabilityError(true);
      return;
    }

    const registrationParams = new URLSearchParams({
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.trim(),
      birth_date: birthDate,
      phone:phoneNumber,
      creation_date: new Date().toISOString(),
      grade: "null",
      bio: "null",
      type: role,
      password:password,
    });

    const res = await fetch(`/api/registration?${registrationParams}`);

    if (!res.ok) throw new Error("Registration failed");

    navigate("/login?signed_in=true"); 
  } catch (err) {
    setAvailabilityError(true);
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
          <form noValidate onSubmit={handleSubmit}>
            <div className="field">
              <label>Je suis</label>
              <div
                className="selection"
                role="group"
                aria-label="Type de compte"
              >
                <button
                  type="button"
                  aria-pressed={role === "student"}
                  onClick={() => {
                    setRole("student");
                    setAvailabilityError(false);
                    setPhoneNumber("");
                  }}
                >
                  Élève
                </button>
                <button
                  type="button"
                  aria-pressed={role === "tutor"}
                  onClick={() => {
                    setRole("tutor");
                    setAvailabilityError(false);
                    setPhoneNumber("");
                  }}
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
                    setLastName(e.target.value);
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
              <label>Date de naissance</label>
              <input
                type="date"
                value={birthDate}
                min={MIN_BIRTH}
                max={MAX_BIRTH}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  clearError("birth_date");
                }}
              />
              {errors.birth_date && (
                <p className="error">
                  Date de naissance invalide ({MIN_AGE} ans minimum)
                </p>
              )}
            </div>

            {role == "tutor" && (
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
                )}
              </div>
            )}

            <div className="field">
              <label>E-mail</label>
              <input
                type="text"
                autoComplete="email"
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
                <label>Mot de passe</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
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
                  autoComplete="new-password"
                  value={passwordconfirm}
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                    clearError("confirm");
                  }}
                />
                {errors.confirm && (
                  <p className="error">Les mots de passe diffèrent</p>
                )}
              </div>
            </div>
            <div>
              {availabilityError && (
                <p className="error">
                  Une adresse e-mail ou un numéro de téléphone est déjà associé
                  à un compte existant
                </p>
              )}
            </div>

            <Link to="/login" className="nav-link">
              <p>Tu possèdes un compte ?</p>
            </Link>
            <button type="submit">Créer un compte</button>
          </form>
        </div>
      </div>
    </>
  );
}
