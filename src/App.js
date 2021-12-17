import "./App.css";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "./images/logo.svg";

function App() {
  return (
    <div className="grid">
      <header>
        <img className="logo" src={logo} alt="PING Logo" />
      </header>
      <main>
        <h1 className="title">
          We are launching <strong>soon!</strong>
        </h1>
        <p className="subtitle">Subscribe and get notified</p>
        <form action="">
          <input type="email" placeholder="Your email address..." />
          <button type="submit">Notify Me</button>
        </form>
      </main>
      <div className="dashboard-img"></div>
      <footer>
        <div className="links">
          <a href="/" className="social-links">
            <FaFacebookF size="16px" />
          </a>
          <a href="/" className="social-links">
            <FaTwitter size="16px" />
          </a>
          <a href="/" className="social-links">
            <FaInstagram size="16px" />
          </a>
        </div>
        <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
