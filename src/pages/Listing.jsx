import { useEffectEvent, useEffect, useState, useMemo } from "react";
import "../Index.css";
import { Link } from "react-router-dom";

export default function Listing() {
  const SUBJECTS = [
    "Français", "Arabe", "Amazighe", "Anglais", "Espagnol",
    "Mathématiques", "Physique-Chimie",
    "Sciences de la Vie et de la Terre (SVT)",
    "Histoire-Géographie", "Éducation islamique", "Philosophie",
    "Informatique", "Technologie",
    "Éducation physique et sportive", "Éducation artistique",
  ];

  const GRADES = [
    "CP", "CE1", "CE2", "CM1", "CM2",
    "6ème", "5ème", "4ème", "3ème",
    "Seconde", "Première", "Terminale",
    "Bac+1", "Bac+2", "Bac+3",
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

  const [query, setQuery] = useState("");

  const [max_price, setMaxPrice] = useState(0)
  const [min_price, setMinPrice] = useState(0)

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
    setSelectedLocation(null)
    setQuery("");
    closeAll();
  };

  const hasFilters =
    selectedSubject !== null || selectedGrade !== null || selectedType !== null || query !== "";

    useEffect(() => {
      const params = new URLSearchParams();
  if (selectedSubject) params.set("subject", selectedSubject);
  if (selectedLocation) params.set("location", selectedLocation);
  if (selectedGrade) params.set("grade", selectedGrade);
  if (selectedType) params.set("type", selectedType);
  if (min_price) params.set("min_price", min_price);
  if (max_price) params.set("max_price", max_price);
    fetch(`/api/listings?${params}`)
      .then(res => res.json())
      .then(data => setListings(data));    
          

  }, [selectedSubject, selectedLocation, selectedGrade, selectedType, min_price, max_price]);

  useMemo(() => {console.log("Variables : ", selectedSubject, selectedLocation, selectedGrade, selectedType, min_price, max_price );
          console.log("Return : ", listings);
  }, [selectedSubject, selectedLocation, selectedGrade, selectedType, min_price, max_price]);
  return (
    <>
      <div className="header">
        <a href="">
          <img src="main.html" alt="" />
        </a>
        <div className="button-container">
          <Link to={"/"} className="nav-link">
            <button><p>Home</p></button>
          </Link>
          <Link to={"/listing"} className="nav-link">
            <button className="is-active"><p>Subjects</p></button>
          </Link>
          <Link to={"/contact"} className="nav-link">
            <button><p>Contact</p></button>
          </Link>
          <Link to={"/get-help"} className="nav-link">
            <button><p>Help</p></button>
          </Link>
        </div>
        <div className="account">
          <Link to="/login" className="nav-link">
            <button className="login">Login</button>
          </Link>
          <Link to={"/sign-in"} className="nav-link">
            <button className="signin">Sign in</button>
          </Link>
          <button className="profile"></button>
        </div>
      </div>

      <div className="listing-container">
        <div className="listing-search">
          <h1>Find a tutor</h1>
          <p>
            Browse tutors by subject, grade and format. Contact them directly.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by subject, name or city…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button">Search</button>
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
              <p>
                {selectedSubject ?? "Subject"}
              </p>
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
                        if(selectedSubject == subject){
                          setSelectedSubject(null)
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
              <p>
                {selectedGrade ?? "Grade"}
              </p>
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
              <p>
                {selectedType ?? "Type"}
              </p>
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
                const next = ! locationHover;
                closeAll();
                setLocationHover(next);
              }}
            >
              <p>
                {selectedLocation ?? "Location"}
              </p>
              <ul
                className={`dropdown-menu ${locationHover ? "open" : ""}`}
                onMouseLeave={() => setLocationHover(false)}
              >
                {CITIES.map((location) => (
                  <li key={location}>
                    <button
                      type="button"
                      className={setSelectedLocation === location ? "selected" : ""}
                      onClick={() => {
                        setSelectedLocation(location);
                        setLocationHover(false);
                        if(selectedLocation == location){
                          setSelectedLocation(null)
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
                  <input type="number" value={min_price} onChange={(event) => setMinPrice(event.target.value)}/>
                  <button>Reset</button>
                </div>
                <label htmlFor="">Max</label>
                <div className="price-input">
                  <input type="number" value={max_price} onChange={(event) => setMaxPrice(event.target.value)}/>
                  <button>Reset</button>
                </div>
            </div>

            <button
              type="button"
              className="filter-cleaner"
              onClick={clearFilters}
              disabled={!hasFilters}
              style={{ opacity: hasFilters ? 1 : 0.4 }}
            >
              Clear Filters
            </button>
          </div>

          <div className="listing">
            {listings.length === 0 ? (
              <p style={{ gridColumn: "1 / -1", color: "var(--grey-500)", fontSize: 14 }}>
                No tutors match your filters. Try clearing them.
              </p>
            ) : (
              listings.map((p) => 
                <ListingCard
                  element={p}
                  key={p.title}
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-top">
          <div className="first-container">
            <h1>Ustadi<span>.</span></h1>
            <p className="footer-tagline">
              Find the right tutor for every subject, at the right price.
            </p>
            <label htmlFor="review">Want to leave us a review ?</label>
            <div className="submit">
              <input id="review" type="text" placeholder="I think that..." />
              <button>Submit</button>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h2>Support</h2>
              <Link to={"/get-help"} className="nav-link">
                <button>Get help</button>
              </Link>
              <button>How it works</button>
            </div>
            <div className="footer-column">
              <h2>Legal</h2>
              <Link to="/privacy-policy" className="nav-link">
                <button>Privacy policy</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ustadi. All rights reserved.</span>
          <span>Made in Morocco 🇲🇦</span>
        </div>
      </div>
    </>
  );
}

function ListingCard({element}){

  return (
    <div className="posting" key={element.listing_id}>
      <h4>{element.title}</h4>
      <div>
        <h5><span>Price</span><span>{element.hourly_price}</span></h5>
        <h5><span>Subject</span><span>{element.subject}</span></h5>
        <h5><span>Location</span><span>{element.location}</span></h5>
        <h5><span>Type</span><span>{element.type}</span></h5>
      </div>
    </div>
  )
}