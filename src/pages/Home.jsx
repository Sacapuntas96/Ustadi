import { useState } from "react";
import "../Index.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [review_content, setReviewContent] = useState("");

  const subjects = [
    "Français",
    "Arabe",
    "Amazighe",
    "Anglais",
    "Espagnol",
    "Mathématiques",
    "Physique-Chimie",
    "Sciences de la Vie et de la Terre (SVT)",
    "Histoire-Géographie",
    "Éducation islamique",
    "Philosophie",
    "Informatique",
    "Technologie",
    "Éducation physique et sportive",
    "Éducation artistique",
  ];

  const HOW_IT_WORKS_STEPS = [
    {
      title: "Crée ton compte",
      text: "Inscris-toi avec ton e-mail ou ton numéro de téléphone, puis indique ton niveau et ta ville.",
    },
    {
      title: "Trouve ton professeur",
      text: "Filtre les annonces par matière, niveau, ville et type de cours. Le tarif horaire en dirhams est affiché sur chaque annonce.",
    },
    {
      title: "Contacte-le",
      text: "Présente-toi, indique la matière et tes disponibilités. Le professeur confirme la séance et le lieu.",
    },
    {
      title: "Participes aux cours particuliers",
      text: "Tu règles directement le professeur au tarif affiché, sans frais cachés.",
    },
  ];

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src="main.html" alt="" />
        </Link>
        <div className="button-container">
          <Link to={"/"} className="nav-link">
            <button className="is-active">
              <p>Accueil</p>
            </button>
          </Link>
          <Link to={"/listing"} className="nav-link">
            <button>
              <p>Annonces</p>
            </button>
          </Link>
          <Link to={"/contact"} className="nav-link">
            <button>
              <p>Contact</p>
            </button>
          </Link>
          <Link to={"/get-help"} className="nav-link">
            <button>
              <p>Aide</p>
            </button>
          </Link>
        </div>
        <div className="account">
          <Link to="/login" className="nav-link">
            <button className="login">Se connecter</button>
          </Link>
          <Link to={"/sign-in"} className="nav-link">
            <button className="signin">S'inscrire</button>
          </Link>
          <button className="profile"></button>
        </div>
      </div>
      <div className="hero">
        <h1>
          Le professeur&nbsp; <span>idéal</span>
          <br />
          Au prix&nbsp;<span>idéal</span>
        </h1>
        <p>Trouve la matière qui te convient</p>
        <div className="catalog">
          <div className="search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un cours..."
              type="text"
              onKeyDown={(e) => {
                if (e.key == "Enter")
                  window.location.href = `/listing?query=${query}`;
              }}
            />
            <Link className="nav-link" to={`/listing?query=${query}`}>
              <button>Rechercher</button>
            </Link>
          </div>
          <div className="subjects">
            {subjects.map((subject) => (
              <Link
                to={`/listing?subject=${subject}`}
                key={subjects.indexOf(subject)}
              >
                <button>{subject}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="tutor">
        <h1>
          Tu cherches un emploi de professeur particulier ? <br />
          Nous recrutons !
        </h1>
        <p>
          Rejoins notre communauté et trouve des élèves à qui enseigner ta
          matière
        </p>
        <Link to={"/sign-in?type=tutor"}>
          <button>Postuler</button>
        </Link>
      </div>
      <div className="how-it-works" id="how-it-works">
        <div className="hiw-intro">
          <h2>Comment ça marche</h2>
          <p>De la recherche à la première séance, en quatre étapes.</p>
          <Link to="/listing" className="nav-link">
            <button className="hiw-cta">Voir les annonces</button>
          </Link>
        </div>
        <ol className="hiw-steps">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li className="hiw-step" key={step.title}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="first-container">
            <h1>
              Ustadi<span>.</span>
            </h1>
            <p className="footer-tagline">
              Trouve le bon professeur pour chaque matière, au bon prix.
            </p>
            <label htmlFor="review">Envie de nous laisser un avis ?</label>
            <div className="submit">
              <input
                id="review"
                type="text"
                value={review_content}
                onChange={(e) => setReviewContent(e.target.value)}
                placeholder="Je pense que..."
              />
              <Link to={`/contact?content=${review_content}`}>
                <button>Envoyer</button>
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h2>Assistance</h2>
              <Link to={"/get-help"} className="nav-link">
                <button>Obtenir de l'aide</button>
              </Link>
              <button>Comment ça marche</button>
            </div>
            <div className="footer-column">
              <h2>Mentions légales</h2>
              <Link to="/privacy-policy" className="nav-link">
                <button>Politique de confidentialité</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ustadi. Tous droits réservés.</span>
          <span>Fabriqué au Maroc 🇲🇦</span>
        </div>
      </div>
    </>
  );
}
