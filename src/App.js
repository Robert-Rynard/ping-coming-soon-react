import "./App.css";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "./images/logo.svg";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(
    "Whoops! It looks like you forgot to add your email"
  );

  const inputHandler = (event) => {
    setEmail(event.target.value);
  };

  const validationHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setIsInputValid(false);
      setErrorMessage("Whoops! It looks like you forgot to add your email");
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setIsInputValid(false);
      setErrorMessage("Please provide a valid email address");
    }
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setIsInputValid(true);
    }
  };

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
        <form onSubmit={validationHandler} noValidate action="">
          <input
            className={!isInputValid && "invalid"}
            type="email"
            onChange={inputHandler}
            placeholder="Your email address..."
            value={email}
          />
          {!isInputValid && <p className="error-message">{errorMessage}</p>}
          <button className="btn" type="submit">
            Notify Me
          </button>
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
        <p className="copyright">© Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
