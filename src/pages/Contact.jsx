import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./../Index.css";

export default function Contact() {
  const [review, setReview] = useState(
    useSearchParams()[0].get("content") ?? "",
  );
  const [messageError, setMessageError] = useState(false);

  return (
    <>
      <div className="header">
        <a href="">
          <img src="main.html" alt="" />
        </a>
        <div className="button-container">
          <Link to={"/"} className="nav-link">
            <button>
              <p>Accueil</p>
            </button>
          </Link>
          <Link to={"/listing"} className="nav-link">
            <button>
              <p>Matières</p>
            </button>
          </Link>
          <Link to={"/contact"} className="nav-link">
            <button className="is-active">
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
      <main className="contact-content">
        <section className="contact-container">
          <p className="contact-eyebrow">Contact</p>
          <h1>Contactez nous</h1>
          <p className="contact-intro">
            Une question, une suggestion ? Dites-nous ce que vous pensez
            d'Ustadi, nous lisons chaque message.
          </p>

          <form
            className="contact-form"
            onSubmit={(e) => {
              if (review.length >= 15) {
                fetch(`/api/reviews?content=${review}`);
              } else {
                setMessageError(true);
                e.preventDefault();
              }
            }}
          >
            <label htmlFor="contact-review">Donnez votre avis</label>
            <textarea
              id="contact-review"
              rows={5}
              maxLength={500}
              placeholder="Donnez votre avis…"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{ resize: "none" }}
            />
            {messageError && (
              <p className="error">L'avis doit faire au moins 15 caractères</p>
            )}
            <div className="contact-actions">
              <span className="contact-count">{review.length} / 500</span>
              <button type="submit" className="contact-submit">
                Envoyer
              </button>
            </div>
          </form>
        </section>
      </main>
      <div className="footer">
        <div className="footer-top">
          <div className="first-container">
            <h1>
              Ustadi<span>.</span>
            </h1>
            <p className="footer-tagline">
              Trouve le bon professeur pour chaque matière, au bon prix.
            </p>
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
