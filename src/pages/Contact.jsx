import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "./../Index.css";


export default function Contact() {
  const navigate = useNavigate()
  const [review, setReview] = useState(
    useSearchParams()[0].get("content") ?? "",
  );
  const [messageError, setMessageError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams()
  const [success, setSuccess] = useState(searchParams.get("success"))

  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src="main.html" alt="" />
        </Link>
        <div className="button-container">
          <Link to={"/"} className="nav-link">
            <button>
              <p>Accueil</p>
            </button>
          </Link>
          <Link to={"/listing"} className="nav-link">
            <button>
              <p>Annonces</p>
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
        {success && <div className="signing-confirmation">
            <p>Votre avis a été envoyé avec succès</p>
          </div>}
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
                setMessageError(false)
                navigate("/contact?success=true")
              } else {
                setMessageError(true);
                
                
              }
              e.preventDefault();
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
