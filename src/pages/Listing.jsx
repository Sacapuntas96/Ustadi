import { useState } from "react";
import "./../Index.css";
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

  const TYPES = ["Distanciel", "Présentiel", "Hybride"];

  const SAMPLE_POSTINGS = [
    { name: "Sara B.", price: "40 Dh/h", subject: "Anglais", location: "Casablanca", type: "Distanciel" },
    { name: "Youssef A.", price: "60 Dh/h", subject: "Mathématiques", location: "Rabat", type: "Présentiel" },
    { name: "Imane K.", price: "50 Dh/h", subject: "Français", location: "Marrakech", type: "Hybride" },
    { name: "Omar T.", price: "45 Dh/h", subject: "Physique-Chimie", location: "Casablanca", type: "Distanciel" },
    { name: "Salma R.", price: "55 Dh/h", subject: "Philosophie", location: "Fès", type: "Présentiel" },
    { name: "Hicham M.", price: "35 Dh/h", subject: "Arabe", location: "Tanger", type: "Distanciel" },
  ];

  const [subjectHover, setSubjectHover] = useState(false);
  const [gradeHover, setGradeHover] = useState(false);
  const [typeHover, setTypeHover] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [query, setQuery] = useState("");

  const [max_price, setMaxPrice] = useState(0)
  const [min_price, setMinPrice] = useState(0)

  const closeAll = () => {
    setSubjectHover(false);
    setGradeHover(false);
    setTypeHover(false);
  };

  const clearFilters = () => {
    setSelectedSubject(null);
    setSelectedGrade(null);
    setSelectedType(null);
    setQuery("");
    closeAll();
  };

  const hasFilters =
    selectedSubject !== null || selectedGrade !== null || selectedType !== null || query !== "";

  const filtered = SAMPLE_POSTINGS.filter((p) => {
    if (selectedSubject && p.subject !== selectedSubject) return false;
    if (selectedType && p.type !== selectedType) return false;
    if (query && !`${p.subject} ${p.name} ${p.location}`.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });

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
                <div>{selectedSubject ?? "Subject"}</div>
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
                <div>{selectedGrade ?? "Grade"}</div>
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
                <div>{selectedType ?? "Type"}</div>
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
            {filtered.length === 0 ? (
              <p style={{ gridColumn: "1 / -1", color: "var(--grey-500)", fontSize: 14 }}>
                No tutors match your filters. Try clearing them.
              </p>
            ) : (
              filtered.map((p) => (
                <div className="posting" key={p.name}>
                  <h4>{p.name}</h4>
                  <div>
                    <h5><span>Price</span><span>{p.price}</span></h5>
                    <h5><span>Subject</span><span>{p.subject}</span></h5>
                    <h5><span>Location</span><span>{p.location}</span></h5>
                    <h5><span>Type</span><span>{p.type}</span></h5>
                  </div>
                </div>
              ))
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