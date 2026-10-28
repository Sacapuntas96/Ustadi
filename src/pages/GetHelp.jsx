import "./../Index.css";
import { Link } from "react-router-dom";

export default function GetHelp() {
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
            <button><p>Subjects</p></button>
          </Link>
          <Link to={"/contact"} className="nav-link">
            <button><p>Contact</p></button>
          </Link>
          <Link to={"/get-help"} className="nav-link">
            <button className="is-active"><p>Help</p></button>
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

      <div className="get-help-content">
        <h2>Comment fonctionne Ustadi ?</h2>
        <p>
          Ustadi met en relation des élèves et des étudiants avec des tuteurs
          particuliers au Maroc. Tu cherches un professeur pour une matière
          précise, à un niveau donné et dans un budget défini : la plateforme
          te permet de parcourir les annonces, de comparer les profils et de
          contacter directement le tuteur qui te convient. Aucun cours n’est
          imposé, tu choisis librement.
        </p>

        <h2>Créer un compte et compléter ton profil</h2>
        <p>
          L’inscription se fait avec une adresse e-mail valide ou un numéro de
          téléphone. Une fois connecté, complète ton profil : ton niveau
          (collège, lycée, supérieur), les matières qui t’intéressent et ta
          ville. Un profil complet permet aux tuteurs de mieux répondre à tes
          demandes et t’évite de répéter les mêmes informations à chaque
          contact.
        </p>

        <h2>Rechercher un tuteur</h2>
        <p>
          Depuis la page « Subjects », utilise la barre de recherche ou les
          filtres pour affiner par matière, niveau, ville et type de cours
          (présentiel, distanciel ou hybride). Chaque annonce affiche le tarif
          horaire, la localisation et la matière enseignée. Tu peux ouvrir
          plusieurs annonces dans des onglets pour comparer tranquillement.
        </p>

        <h2>Contacter un tuteur et réserver une séance</h2>
        <p>
          Lorsque tu as trouvé un profil qui te convient, contacte le tuteur
          depuis son annonce. Présente-toi brièvement, indique la matière, le
          niveau et les disponibilités qui t’arrangent. Le tuteur confirme
          ensuite la séance et le lieu (ou le lien pour un cours en ligne).
          Toute la coordination se fait via la messagerie de la plateforme, ce
          qui garde une trace en cas de problème.
        </p>

        <h2>Paiement et tarifs</h2>
        <p>
          Les tarifs sont fixés par chaque tuteur et affichés clairement sur
          son annonce, en dirhams par heure. Ustadi ne prélève pas de frais
          cachés : le montant affiché est celui que tu paieras. Le paiement se
          règle directement avec le tuteur selon le mode convenu (espèces,
          virement ou paiement en ligne si le tuteur le propose). Demande
          toujours un reçu ou une confirmation écrite après paiement.
        </p>

        <h2>Gérer ton compte et tes réservations</h2>
        <p>
          Depuis ton espace personnel, tu peux consulter l’historique de tes
          séances, annuler ou reporter une réservation et mettre à jour tes
          informations. Pour annuler une séance, préviens le tuteur au moins 24
          heures à l’avance afin de ne pas bloquer son planning. Si tu changes
          de numéro ou d’adresse e-mail, pense à mettre à jour ton profil pour
          rester joignable.
        </p>

        <h2>Signaler un problème sur la plateforme</h2>
        <p>
          Un tuteur ne répond pas, une séance a été annulée sans prévenir, un
          paiement pose problème ou un profil te semble suspect ? Utilise la
          page « Contact » en choisissant « Signaler un problème » et décris ce
          qui s’est passé avec le plus de détails possible (nom du tuteur,
          date, message d’erreur). Ne partage jamais ton mot de passe ni tes
          informations bancaires, même avec un tuteur.
        </p>

        <h2>Protéger tes données et ta sécurité</h2>
        <p>
          Tes informations personnelles restent sur ton compte Ustadi. Ne
          communique jamais ton mot de passe, ton code de vérification ou tes
          coordonnées bancaires à un tuteur ou à un tiers. Méfie-toi des
          demandes de paiement en dehors de la plateforme avant une première
          séance. En cas de doute, contacte-nous avant de payer quoi que ce
          soit.
        </p>

        <h2>Besoin d’aide supplémentaire ?</h2>
        <p>
          Si tu ne trouves pas la réponse à ta question dans cette page, écris
          à <a href="mailto:hello@ustadi.ma">hello@ustadi.ma</a> ou passe par la
          page « Contact ». Décris ton problème en précisant ton nom
          d’utilisateur et l’appareil que tu utilises (téléphone ou
          ordinateur) : cela nous aide à répondre plus vite. L’équipe répond du
          lundi au vendredi, de 9h à 18h.
        </p>
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