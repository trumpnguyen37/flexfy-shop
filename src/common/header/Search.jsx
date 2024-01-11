import React, { useEffect, useState } from "react";
import logo from "../../components/assets/logo.svg";
import { Link } from "react-router-dom";

export default function Search() {
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  // fixed header
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      if (search) {
        search.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="l_flex">
            <Link to="/">reward</Link>
            <Link to="/">fit guide</Link>
          </div>
          <div className="logo center">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="r_flex">
            <div
              className="search-box"
              onClick={() => {
                setShowSearchMenu(true);
              }}
            >
              <input type="text" placeholder="Search" />
              <i className="fa fa-search"></i>
            </div>
            <div className="icon f_flex width">
              <Link to="/profile" className="profile_link hover1">
                <i className="fa fa-user icon-circle"></i>
              </Link>
              <div className="cart">
                <Link to="/cart">
                  <i className="fa fa-shopping-bag icon-circle"></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
