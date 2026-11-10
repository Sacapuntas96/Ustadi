import { useEffectEvent, useEffect, useState, useMemo } from "react";
import "../Index.css";
import { Link } from "react-router-dom";

export default function Listing() {
  const SUBJECTS = [
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

  const GRADES = [
    "CP",
    "CE1",
    "CE2",
    "CM1",
    "CM2",
    "6ème",
    "5ème",
    "4ème",
    "3ème",
    "Seconde",
    "Première",
    "Terminale",
    "Bac+1",
    "Bac+2",
    "Bac+3",
  ];

  const CITIES = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fès",
    "Tanger",
    "Agadir",
    "Meknès",
    "Oujda",
    "Kénitra",
    "Tétouan",
    "Salé",
    "Témara",
    "Mohammedia",
    "El Jadida",
    "Béni Mellal",
    "Nador",
    "Safi",
    "Essaouira",
    "Laâyoune",
    "Dakhla",
  ];

  const TYPES = ["Distanciel", "Présentiel", "Hybride"];

  const [listings, setListings] = useState([]);

  const [subjectHover, setSubjectHover] = useState(false);
  const [gradeHover, setGradeHover] = useState(false);
  const [typeHover, setTypeHover] = useState(false);
  const [locationHover, setLocationHover] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [tempQuery, setTempQuery] = useState("");
  const [query, setQuery] = useState("");

  const [max_price, setMaxPrice] = useState(0);
  const [min_price, setMinPrice] = useState(0);

  const closeAll = () => {
    setSubjectHover(false);
    setGradeHover(false);
    setTypeHover(false);
    setLocationHover(false);
  };

  const clearFilters = () => {
    setSelectedSubject(null);
    setSelectedGrade(null);
    setSelectedType(null);
    setSelectedLocation(null);
    setMinPrice(0);
    setMaxPrice(0);
    closeAll();
  };

  const hasFilters =
    selectedSubject !== null ||
    selectedGrade !== null ||
    selectedType !== null ||
    selectedLocation != null ||
    min_price != 0 ||
    max_price != 0;

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedSubject) params.set("subject", selectedSubject);
    if (selectedLocation) params.set("location", selectedLocation);
    if (selectedGrade) params.set("grade", selectedGrade);
    if (selectedType) params.set("type", selectedType);
    if (min_price) params.set("min_price", min_price);
    if (max_price) params.set("max_price", max_price);
    if (query) params.set("query", query);
    fetch(`/api/listings?${params}`)
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, [
    selectedSubject,
    selectedLocation,
    selectedGrade,
    selectedType,
    min_price,
    max_price,
    query,
  ]);

  useMemo(() => {
    console.log("Variables:", {
      selectedSubject,
      selectedLocation,
      selectedGrade,
      selectedType,
      min_price,
      max_price,
    });
    console.log("Return : ", listings);
  }, [
    selectedSubject,
    selectedLocation,
    selectedGrade,
    selectedType,
    min_price,
    max_price,
  ]);
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
            <button className="is-active">
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
            <Link to={"/sign-in"} className="nav-link">
              <button className="signin">S'inscrire</button>
            </Link>
          </Link>
          <button className="profile"></button>
        </div>
      </div>

      <div className="listing-container">
        <div className="listing-search">
          <h1>Find a tutor</h1>
          <p>
            Parcourez les profils des tuteurs par matière, niveau scolaire et
            format. Contactez-les directement.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher par sujet, nom ou ville…"
              value={tempQuery}
              onChange={(e) => setTempQuery(e.target.value)}
              onKeyDown={(event) => {
                if (event.key == "Enter") setQuery(tempQuery);
              }}
            />
            <button
              className="search-button"
              onClick={() => setQuery(tempQuery)}
            >
              Recherche
            </button>
          </div>
        </div>

        <div className="listing-content">
          <div className="filters">
            <div
              className={`dropdown ${selectedSubject ? "active" : ""}`}
              onClick={() => {
                const next = !subjectHover;
                closeAll();
                setSubjectHover(next);
              }}
            >
              <p>{selectedSubject ?? "Matière"}</p>
              <ul
                className={`dropdown-menu ${subjectHover ? "open" : ""}`}
                onMouseLeave={() => setSubjectHover(false)}
              >
                {SUBJECTS.map((subject) => (
                  <li key={subject}>
                    <button
                      type="button"
                      className={selectedSubject === subject ? "selected" : ""}
                      onClick={() => {
                        setSelectedSubject(subject);
                        setSubjectHover(false);
                        if (selectedSubject == subject) {
                          setSelectedSubject(null);
                        }
                      }}
                    >
                      {subject}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`dropdown ${selectedGrade ? "active" : ""}`}
              onClick={() => {
                const next = !gradeHover;
                closeAll();
                setGradeHover(next);
              }}
            >
              <p>{selectedGrade ?? "Classe"}</p>
              <ul
                className={`dropdown-menu ${gradeHover ? "open" : ""}`}
                onMouseLeave={() => setGradeHover(false)}
              >
                {GRADES.map((grade) => (
                  <li key={grade}>
                    <button
                      type="button"
                      className={selectedGrade === grade ? "selected" : ""}
                      onClick={() => {
                        setSelectedGrade(grade);
                        setGradeHover(false);
                        if (selectedGrade == grade) {
                          setSelectedGrade(null);
                        }
                      }}
                    >
                      {grade}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`dropdown ${selectedType ? "active" : ""}`}
              onClick={() => {
                const next = !typeHover;
                closeAll();
                setTypeHover(next);
              }}
            >
              <p>{selectedType ?? "Type"}</p>
              <ul
                className={`dropdown-menu ${typeHover ? "open" : ""}`}
                onMouseLeave={() => setTypeHover(false)}
              >
                {TYPES.map((type) => (
                  <li key={type}>
                    <button
                      type="button"
                      className={selectedType === type ? "selected" : ""}
                      onClick={() => {
                        setSelectedType(type);
                        setTypeHover(false);
                        if (selectedType == type) {
                          setSelectedType(null);
                        }
                      }}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`dropdown ${selectedLocation ? "active" : ""}`}
              onClick={() => {
                const next = !locationHover;
                closeAll();
                setLocationHover(next);
              }}
            >
              <p>{selectedLocation ?? "Localisation"}</p>
              <ul
                className={`dropdown-menu ${locationHover ? "open" : ""}`}
                onMouseLeave={() => setLocationHover(false)}
              >
                {CITIES.map((location) => (
                  <li key={location}>
                    <button
                      type="button"
                      className={
                        selectedLocation === location ? "selected" : ""
                      }
                      onClick={() => {
                        setSelectedLocation(location);
                        setLocationHover(false);
                        if (selectedLocation == location) {
                          setSelectedLocation(null);
                        }
                      }}
                    >
                      {location}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-filter">
              <label htmlFor="">Min</label>
              <div className="price-input">
                <input
                  type="number"
                  placeholder="0"
                  min={0}
                  max={20000}
                  value={min_price}
                  onChange={(event) => setMinPrice(event.target.value)}
                />
                <button onClick={() => setMinPrice(0)}>Réinitialiser</button>
              </div>
              <label htmlFor="">Max</label>
              <div className="price-input">
                <input
                  type="number"
                  placeholder="0"
                  min={0}
                  max={20000}
                  value={max_price}
                  onChange={(event) => setMaxPrice(event.target.value)}
                />
                <button onClick={() => setMaxPrice(0)}>Réinitialiser</button>
              </div>
            </div>

            <button
              type="button"
              className="filter-cleaner"
              onClick={clearFilters}
              disabled={!hasFilters}
              style={{ opacity: hasFilters ? 1 : 0.4 }}
            >
              Retirer les filtres
            </button>
          </div>

          <div className="listing">
            {listings.length === 0 ? (
              <p
                style={{
                  gridColumn: "1 / -1",
                  color: "var(--grey-500)",
                  fontSize: 14,
                }}
              >
                No tutors match your filters. Try clearing them.
              </p>
            ) : (
              listings.map((p) => <ListingCard element={p} key={p.title} />)
            )}
          </div>
        </div>
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
              <input id="review" type="text" placeholder="Je pense que..." />
              <button>Envoyer</button>
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

function ListingCard({ element }) {
  return (
    <div className="posting" key={element.listing_id}>
      <h4>{element.title}</h4>
      <div>
        <h5>
          <span>Prix / heure</span>
          <span>{element.hourly_price} DH</span>
        </h5>
        <h5>
          <span>Sujet</span>
          <span>{element.subject}</span>
        </h5>
        <h5>
          <span>Localisation</span>
          <span>{element.location}</span>
        </h5>
        <h5>
          <span>Type</span>
          <span>{element.type}</span>
        </h5>
      </div>
    </div>
  );
}
