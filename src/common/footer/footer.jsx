import React, { useState } from "react";
import "./style.css";
import logo from "../../components/assets/logo.png";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <footer class="footer">
        <div className="container-footer">
          <div className="grid__column-10">
            <div className="container-column">
              <div class="grid__column-2-4">
                <h3>SHOP</h3>
                <a href="#">t-shirt</a>
                <a href="#">jeans</a>
                <a href="#">jacket</a>
                <a href="#">clothing & accessories</a>
              </div>
              <div class="grid__column-2-4">
                <h3>COMMUNITY</h3>
                <a href="#">about us</a>
                <a href="#">events</a>
                <a href="#">the flexfy blog</a>
                <a href="#">join our rewards program</a>
              </div>
              <div class="grid__column-2-4">
                <h3>LEARN</h3>
                <a href="#">fit guide</a>
                <a href="#">size charts</a>
                <a href="#">contact us</a>
                <a href="#">faqs</a>
              </div>
              <div class="grid__column-2-4">
                <h3>RESOURCES</h3>
                <a href="#">returns & exchanges (us)</a>
                <a href="#">returns (canada)</a>
                <a href="#">privacy & terms</a>
                <a href="#">careers</a>
              </div>
            </div>
          </div>
          <div className="grid__column-2">
            <div class="subscription-area">
              <img src={logo} alt="" />
              <p>Sign up for P50 OFF your first order!</p>
              <input
                dir="ltr"
                type="email"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="email address"
              />

              <button>join</button>
              <p>
                By signing up, you agree to receive marketing emails from
                LIVELY. You can unsubscribe any time by clicking the link at the
                bottom of our emails.
              </p>
              <a href="#">Privacy & Terms.</a>
            </div>
          </div>
        </div>
        <ul class="social-icons">
          <li>
            <img src="./icons/icon_insta.png" alt="" />
          </li>
          <li>
            <img src="./icons/icon_facebook.png" alt="" />
          </li>
          <li>
            <img src="./icons/icon_tiktok.png" alt="" />
          </li>
        </ul>
      </footer>

      <div class="footer-bottom">
        <p>&copy; Copyright 2023 FLEXFY | Terms | Privacy</p>

        <p>Designed by AVL Team</p>
        <div className="foot">
          <p>
            Peso (PHP &#8369;)<i class="fa fa-caret-down"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
