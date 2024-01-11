import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className=" navlink">
            <ul
              className={
                mobileMenu ? "nav-links-mobileMenu" : "link f-flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="">SUMMER VIBE COLLECTION 2023</Link>
              </li>
              <li>
                <Link to="/">NEW</Link>
              </li>
              <li>
                <Link to="/">BEST SELLERS</Link>
              </li>
              <li>
                <Link to="/">SHIRT</Link>
              </li>
              <li>
                <Link to="/">JEANS</Link>
              </li>
              <li>
                <Link to="/">CLOTHING & ACCESSORIES</Link>
              </li>
              <li>
                <Link to="/">COLLECTIONS</Link>
              </li>
              <li>
                <Link to="/">SALE</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
