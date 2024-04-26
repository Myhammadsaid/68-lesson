import React from "react";
import logo from "../../assets/noteboock.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-style">
            <div className="footer-links">
              <a href="#" className="footer-title">
                Home
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Contact Us
              </a>
              <a href="#" className="footer-link">
                Prive
              </a>
              <a href="#" className="footer-link">
                Delivery Information
              </a>
              <a href="#" className="footer-link">
                Company
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Company
              </a>
              <a href="#" className="footer-link">
                About Us
              </a>
              <a href="#" className="footer-link">
                Delivery Information
              </a>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
              <a href="#" className="footer-link">
                Support Center
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Category
              </a>
              <a href="#" className="footer-link">
                Dairy & Bakery
              </a>
              <a href="#" className="footer-link">
                Snack & Spice
              </a>
              <a href="#" className="footer-link">
                Juice & Drinks
              </a>
              <a href="#" className="footer-link">
                Prive
              </a>
              <a href="#" className="footer-link">
                Fast Food
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Subscribe Our Newsletter
              </a>
              <img style={{ width: "180px" }} src={logo} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
