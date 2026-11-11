import { useState, useEffect, useMemo, memo } from "react";
import "../Index.css";
import { Link, useSearchParams } from "react-router-dom";

export default function ListingPage() {
  const [listingData, setListingData] = useState({});
  const [publisherData, setPublisherData] = useState({});
  const [searchParms, setSearchParm] = useSearchParams();
  useEffect(() => {
    fetch(`/api/listing-page?id=${searchParms.get("id")}`)
      .then((res) => res.json())
      .then(value => setListingData(...value))
  }, [])

  useEffect(() => {
    fetch(`/api/users?id=${searchParms.get("id")}`)
      .then((res) => res.json())
      .then(value => setPublisherData(...value))
  }, [])

  const [review_content, setReviewContent] = useState("");
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
  <Link to="/listing" className="listing-page-back">← Retour aux annonces</Link>

  {listingData && (
    <div className="listing-page-grid">
      <article className="listing-page-content">
        <p className="listing-page-eyebrow">{listingData.subject}</p>
        <h1>{listingData.title}</h1>

        <div className="listing-page-tags">
          <span className="listing-tag">{listingData.grade}</span>
          <span className="listing-tag">{listingData.type}</span>
          <span className="listing-tag">{listingData.location}</span>
        </div>

        <dl className="listing-page-details">
          <div>
            <dt>Matière</dt>
            <dd>{listingData.subject}</dd>
          </div>
          <div>
            <dt>Niveau</dt>
            <dd>{listingData.grade}</dd>
          </div>
          <div>
            <dt>Ville</dt>
            <dd>{listingData.location}</dd>
          </div>
          <div>
            <dt>Type de cours</dt>
            <dd>{listingData.type}</dd>
          </div>
          <div>
            <dt>Publiée le</dt>
            <dd>
              {new Date(listingData.publish_date).toLocaleDateString("fr-FR", {
                dateStyle: "long",
              })}
            </dd>
          </div>
          <div>
            <dt>Identifiant d'annonce</dt>
            <dd>{listingData.listing_id}</dd>
          </div>
        </dl>
      </article>

      <aside className="listing-page-side">
        <p className="listing-page-side-label">Tarif</p>
        <p className="listing-page-price">
          {listingData.hourly_price} DH<span> / heure</span>
        </p>
        <button className="listing-page-cta">Contacter le professeur</button>
        <p className="listing-page-note">
          Annonce publiée par le professeur  <Link className="nav-link" style={{color:"#ff8f3c", fontWeight:600}}>{publisherData.last_name} {publisherData.first_name}</Link>
        </p>
      </aside>
    </div>
  )}
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
