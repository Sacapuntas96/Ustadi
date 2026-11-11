import { useState } from "react";
import "../Index.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [review_content, setReviewContent] = useState("");
  return (
    <>
      <div className="header">
        <a href="">
          <img src="main.html" alt="" />
        </a>
        <div className="button-container">
          <Link to={"/"} className="nav-link">
            <button className="is-active">
              <p>Accueil</p>
            </button>
          </Link>
          <Link to={"/listing"} className="nav-link">
            <button>
              <p>Matières</p>
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
            <input placeholder="Rechercher un cours..." type="text" />
            <button>Rechercher</button>
          </div>
          <div className="subjects">
            <button>Français</button>
            <button>Arabe</button>
            <button>Amazighe</button>
            <button>Anglais</button>
            <button>Espagnol</button>
            <button>Mathématiques</button>
            <button>Physique-Chimie</button>
            <button>Sciences de la Vie et de la Terre (SVT)</button>
            <button>Histoire-Géographie</button>
            <button>Éducation islamique</button>
            <button>Philosophie</button>
            <button>Informatique</button>
            <button>Technologie</button>
            <button>Éducation physique et sportive</button>
            <button>Éducation artistique</button>
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
        <button>Postuler</button>
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
