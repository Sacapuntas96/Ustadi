import { useState, useEffect } from "react";
import "../Index.css";
import { Link, useSearchParams } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);
  const [searchParams] = useSearchParams();
  const [review_content, setReviewContent] = useState("");

  const userId = searchParams.get("id");

  useEffect(() => {
    fetch(`/api/users?id=${userId}`)
      .then((res) => res.json())
      .then((value) => setUser(...value));
  }, [userId]);

  useEffect(() => {
    fetch(`/api/listings?author_id=${userId}`)
      .then((res) => res.json())
      .then((value) => setListings(value));
  }, [userId]);

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

      <main className="listing-page-container">
        <Link to="/listing" className="listing-page-back">
          ← Retour aux annonces
        </Link>

        <div className="listing-page-grid">
          <article className="listing-page-content">
            <div className="profile-head">
              <div className="profile-avatar">
                {user.first_name?.[0]}
                {user.last_name?.[0]}
              </div>
              <div>
                <p className="listing-page-eyebrow">Professeur</p>
                <h1>
                  {user.first_name} {user.last_name}
                </h1>
              </div>
            </div>

            <div className="listing-page-tags">
              <span className="listing-tag">{user.main_subject}</span>
              <span className="listing-tag">{user.main_grade}</span>
            </div>

            <dl className="listing-page-details">
              <div>
                <dt>Matière principale</dt>
                <dd>{user.main_subject}</dd>
              </div>
              <div>
                <dt>Niveau principal</dt>
                <dd>{user.main_grade}</dd>
              </div>
              <div>
                <dt>Âge</dt>
                <dd>{user.age} ans</dd>
              </div>
              <div>
                <dt>Membre depuis</dt>
                <dd>
                  {user.account_creation_date &&
                    new Date(user.account_creation_date).toLocaleDateString(
                      "fr-FR",
                      { dateStyle: "long" },
                    )}
                </dd>
              </div>
            </dl>

            <section className="listing-page-description">
              <h2>À propos</h2>
              {user.bio ? (
                <p>{user.bio}</p>
              ) : (
                <p className="listing-page-description-empty">
                  Aucune biographie fournie.
                </p>
              )}
            </section>

            <section className="listing-page-description">
              <h2>Annonces de {user.first_name}</h2>
              {listings.length > 0 ? (
                <div className="profile-listings">
                  {listings.map((l) => (
                    <Link
                      key={l.listing_id}
                      to={`/listing-page?id=${l.listing_id}`}
                      className="posting nav-link"
                    >
                      <h4>{l.title}</h4>
                      <div>
                        <h5>
                          <span>Tarif</span>
                          <span>{l.hourly_price} DH / h</span>
                        </h5>
                        <h5>
                          <span>Niveau</span>
                          <span>{l.grade}</span>
                        </h5>
                        <h5>
                          <span>Ville</span>
                          <span>{l.location}</span>
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="listing-page-description-empty">
                  Aucune annonce publiée.
                </p>
              )}
            </section>
          </article>

          <aside className="listing-page-side">
            <p className="listing-page-side-label">Statistiques</p>
            <p className="listing-page-price">
              {listings.length}
              <span> annonces</span>
            </p>
            <p className="listing-page-price">
              {user.number_of_reviews}
              <span> avis</span>
            </p>
            <button className="listing-page-cta">Contacter le professeur</button>
            <p className="listing-page-note">
              Pour votre sécurité, échangez uniquement via Ustadi.
            </p>
          </aside>
        </div>
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