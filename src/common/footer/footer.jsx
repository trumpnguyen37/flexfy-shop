import React, { useState } from "react";
import "./style.css";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <footer class="footer">
        <div class="footer-column">
          <h3>SHOP</h3>
          <a href="#">t-shirt</a>
          <a href="#">jeans</a>
          <a href="#">jacket</a>
          <a href="#">clothing & accessories</a>
        </div>
        <div class="footer-column">
          <h3>COMMUNITY</h3>
          <a href="#">about us</a>
          <a href="#">events</a>
          <a href="#">the flexfy blog</a>
          <a href="#">join our rewards program</a>
        </div>
        <div class="footer-column">
          <h3>LEARN</h3>
          <a href="#">fit guide</a>
          <a href="#">size charts</a>
          <a href="#">contact us</a>
          <a href="#">faqs</a>
        </div>
        <div class="footer-column">
          <h3>RESOURCES</h3>
          <a href="#">returns & exchanges (us)</a>
          <a href="#">returns (canada)</a>
          <a href="#">privacy & terms</a>
          <a href="#">careers</a>
        </div>
        <div class="subscription-area">
          <h3>flex&fy</h3>
          <p>Sign up for P50 OFF your first order!</p>
          <input type="text" value={inputValue} onChange={handleInputChange} />

          <button>join</button>
          <p>
            By signing up, you agree to receive marketing emails from LIVELY.
            You can unsubscribe any time by clicking the link at the bottom of
            our emails.
          </p>
        </div>
      </footer>

      <div class="footer-bottom">
        <p>&copy; Copyright 2023 FLEXFY | Terms | Privacy</p>
        <ul class="social-icons">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">TikTok</a>
          </li>
        </ul>
        <p>Designed by AVL Team</p>
        <p>Peso (PHP)</p>
      </div>
    </>
  );
};

export default Footer;
