import "./../Index.css";
import { Link } from "react-router-dom";

export default function GetHelp() {
  return (
    <>
      <div className='header'>
        <a href=''>
          <img src='main.html' alt='' />
        </a>
        <div className='button-container'>
          <Link to={"/"} className='nav-link'>
            <button>
              <p>Home</p>
            </button>
          </Link>
          <Link to={"/listing"} className='nav-link'>
            <button>
              <p>Subjects</p>
            </button>
          </Link>
          <button>
            <p>Contact</p>
          </button>
          <Link to={"/get-help"} className='nav-link'>
            <button>
              <p>Help</p>
            </button>
          </Link>
        </div>
        <div className='account'>
          <Link to='/login' className='nav-link'>
            <button className='login'>Login</button>
          </Link>
          <Link to={"/sign-in"} className='nav-link'>
            <button className='signin'>Sign in</button>
          </Link>
          <button className='profile'></button>
        </div>
      </div>
      <div className="get-help-content">
        <h2>Besoin d’un coup de pouce ?</h2>
        <p>
          Un cours difficile à comprendre, un exercice qui te bloque ou un
          examen à préparer ? Tu n’as pas à tout résoudre seul. Cet espace est
          là pour t’aider à expliquer ton besoin et à trouver un accompagnement
          adapté à ton niveau.
        </p>

        <h2>Comprendre un cours</h2>
        <p>
          Certaines notions demandent plus de temps et une autre façon d’être
          expliquées. Indique ta matière, ton niveau et le chapitre concerné,
          puis précise ce que tu ne comprends pas. L’objectif est de reprendre
          les bases nécessaires et de progresser à ton rythme.
        </p>

        <h2>Débloquer un exercice</h2>
        <p>
          Partage l’énoncé, ce que tu as déjà essayé et l’étape où tu rencontres
          une difficulté. Même une tentative incomplète permet de mieux
          comprendre ton raisonnement. Le but n’est pas seulement de trouver la
          bonne réponse, mais de comprendre la méthode pour pouvoir la
          réutiliser.
        </p>

        <h2>Préparer un contrôle ou un examen</h2>
        <p>
          Tu prépares un contrôle, l’examen régional, le baccalauréat ou un
          examen dans le supérieur ? Précise ton échéance et les chapitres à
          revoir. Cela permettra de mieux cibler tes difficultés et de
          concentrer tes efforts sur les notions à travailler.
        </p>

        <h2>Poser ta question dans la langue qui te convient</h2>
        <p>
          Tu peux expliquer ton besoin en français, en arabe ou en darija.
          Précise également la langue dans laquelle tu préfères recevoir des
          explications afin de faciliter ton orientation vers un accompagnement
          adapté.
        </p>

        <h2>Signaler un problème sur le site</h2>
        <p>
          Si tu rencontres une difficulté de connexion, de réservation ou
          d’accès à une séance, décris ce qui s’est passé et le message d’erreur
          éventuel. Indique aussi si tu utilises un téléphone ou un ordinateur.
          Ne partage jamais ton mot de passe ni tes informations bancaires.
        </p>

        <h2>Avancer, une question à la fois</h2>
        <p>
          Tu n’as pas besoin de tout comprendre du premier coup. Poser une
          question, reprendre une étape et apprendre de ses erreurs font partie
          du parcours. Commence simplement par nous dire ce qui te bloque.
        </p>
      </div>
      <div className='footer'>
        <div className='footer-top'>
          <div className='first-container'>
            <h1>
              Ustadi<span>.</span>
            </h1>
            <p className='footer-tagline'>
              Find the right tutor for every subject, at the right price.
            </p>
            <label htmlFor='review'>Want to leave us a review ?</label>
            <div className='submit'>
              <input id='review' type='text' placeholder='I think that...' />
              <button>Submit</button>
            </div>
          </div>

          <div className='footer-links'>
            <div className='footer-column'>
              <h2>Support</h2>
              <Link to={"/get-help"} className='nav-link'>
                <button>Get help</button>
              </Link>
              <button>How it works</button>
            </div>
            <div className='footer-column'>
              <h2>Legal</h2>
              <Link to='/privacy-policy' className='nav-link'>
                <button>Privacy policy</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <span>© 2026 Ustadi. All rights reserved.</span>
          <span>Made in Morocco 🇲🇦</span>
        </div>
      </div>
    </>
  );
}
