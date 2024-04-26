import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/header-logo.png";
import phone from "../../assets/phone-Icon.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import logo2 from "../../assets/logo.png";
import search from "../../assets/search.png";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      <header>
        <section className="header-top">
          <div className="container">
            <nav>
              <a className="logo">
                <img src={logo} alt="" />
              </a>
              <div
                className={`nav-items ${showNav ? "open" : ""}`}
                id="navbar-responsive"
              >
                <NavLink className="nav-item" to={"/"}>
                  Home
                </NavLink>
                <a href="#" className="nav-item">
                  About
                </a>
                <a href="#" className="nav-item">
                  Contact Us
                </a>
                <NavLink className="nav-item" to={"/register"}>
                  Login
                </NavLink>
              </div>
              <a href="#" className="phone">
                <img src={phone} alt="" />
                +123 ( 456 ) ( 7890 )
              </a>
              <button onClick={toggleNav} class="menu-btn" id="menu-btn">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </button>
            </nav>
          </div>
        </section>
        <section className="header-buttom">
          <div className="container">
            <nav>
              <a href="#" className="h-b-logo">
                <img src={logo2} alt="" />
              </a>
              <form className="header-form" action="">
                <input
                  className="in-search"
                  type="text"
                  placeholder="Search For items..."
                />
                <select name="text">
                  <option value="text">All Categories</option>
                </select>
                <button className="header-btn">
                  <img src={search} alt="" />
                </button>
              </form>
              <div className="nav-links">
                <a href="#" className="nav-link">
                  <img src={user} alt="" /> Account
                </a>
                <a href="#" className="nav-link">
                  <img src={heart} alt="" /> Wishes
                </a>
                <a href="#" className="nav-link">
                  <img src={cart} alt="" /> Cart
                </a>
              </div>
            </nav>
          </div>
        </section>
        <hr />
      </header>
    </div>
  );
}

export default Header;
