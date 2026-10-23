import "./../Index.css";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
                <button><p>Help</p></button>
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

      <div className='policy'>
        <h1>Privacy Policy</h1>
        <h4>Last updated : 20th of October 2026</h4>

        <h3>1. Introduction</h3>
        <p>
          Ustadi (“we”, “us”, “our”) respects your privacy. This policy explains
          what personal data we collect, why we collect it, how we use and
          protect it, and what rights you have. By using our website, you agree
          to this policy.
        </p>

        <h3>2. Who we are</h3>
        <p>
          Data controller: YOUR NAME / COMPANY NAME
          <br />
          Address: ADDRESS
          <br />
          Contact: CONTACT EMAIL
        </p>

        <h3>3. Data we collect</h3>
        <ul>
          <li>
            Account data: username, e-mail address, and password (stored in
            hashed form).
          </li>
          <li>
            Verification data: one-time verification codes sent to confirm your
            account.
          </li>
          <li>
            Technical data: IP address, browser type, device information, and
            pages visited (if applicable).
          </li>
          <li>
            Usage data: content you create or actions you perform on the site
            (if applicable).
          </li>
          <li>Cookies: see section 8.</li>
        </ul>
        <p>
          We do not knowingly collect sensitive data (health, religion,
          biometrics, etc.).
        </p>

        <h3>4. How we use your data</h3>
        <ul>
          <li>Create and manage your account.</li>
          <li>Verify your identity and secure your account.</li>
          <li>Provide and improve our services.</li>
          <li>
            Send service messages (verification codes, security alerts, policy
            updates).
          </li>
          <li>Prevent fraud and abuse.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h3>5. Legal basis</h3>
        <p>
          We process your data based on your consent, the need to provide the
          service you requested, our legitimate interest in securing and
          improving the site, and legal obligations.
        </p>

        <h3>6. Sharing your data</h3>
        <p>We do not sell your personal data. We may share it only with:</p>
        <ul>
          <li>
            Service providers that help us operate the site (hosting, e-mail
            delivery, analytics): LIST PROVIDERS.
          </li>
          <li>Authorities, when required by law.</li>
        </ul>

        <h3>7. Data retention</h3>
        <p>
          We keep your data only as long as your account is active or as needed
          to provide the service. You can ask for deletion at any time. Some
          data may be kept longer when the law requires it. Verification codes
          expire after DURATION.
        </p>

        <h3>8. Cookies</h3>
        <p>
          We use cookies for essential functions (login session, security) and,
          if applicable, analytics. You can block or delete cookies in your
          browser settings, but some features may stop working.
        </p>

        <h3>9. Security</h3>
        <p>
          We use measures such as HTTPS encryption, password hashing, and access
          controls. No system is 100% secure, but we work to protect your data
          against unauthorized access, loss, or misuse.
        </p>

        <h3>10. Your rights</h3>
        <p>Depending on your country, you may have the right to:</p>
        <ul>
          <li>Access your data.</li>
          <li>Correct inaccurate data.</li>
          <li>Delete your data.</li>
          <li>Restrict or object to processing.</li>
          <li>Withdraw consent at any time.</li>
          <li>Receive a copy of your data (portability).</li>
        </ul>
        <p>
          To exercise these rights, contact us at CONTACT EMAIL. We will answer
          within 30 days.
        </p>

        <h3>11. Children</h3>
        <p>
          Ustadi is not intended for children under AGE (usually 13 or 16). We
          do not knowingly collect their data. If you believe a child has given
          us data, contact us and we will delete it.
        </p>

        <h3>12. International transfers</h3>
        <p>
          If your data is processed outside your country, we ensure appropriate
          safeguards are in place (if applicable).
        </p>

        <h3>13. Changes to this policy</h3>
        <p>
          We may update this policy. The “Last updated” date shows the latest
          version, and we will notify you of significant changes.
        </p>

        <h3>14. Contact</h3>
        <p>For any question about this policy: CONTACT EMAIL</p>
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
              <Link to={"/get-help"}>
                <button>Get help</button>
              </Link>
              <button>How it works</button>
            </div>
            <div className='footer-column'>
              <h2>Legal</h2>
              <Link to='/privacy-policy'>
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
