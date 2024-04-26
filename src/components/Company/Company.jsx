import React from "react";
import "./Company.css";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import icon5 from "../../assets/icon-5.png";

function Company() {
  return (
    <div>
      <section className="company">
        <div className="container">
          <div className="company-cards">
            <div className="company-card">
              <img src={icon1} alt="" />
              <div className="company-content">
                <p className="company-text">Best prices & offers</p>
                <p className="company-par">Orders $50 or more</p>
              </div>
            </div>
            <div className="company-card">
              <img src={icon2} alt="" />
              <div className="company-content">
                <p className="company-text">Free delivery</p>
                <p className="company-par">Orders $50 or more</p>
              </div>
            </div>
            <div className="company-card">
              <img src={icon3} alt="" />
              <div className="company-content">
                <p className="company-text">Great daily deal</p>
                <p className="company-par">Orders $50 or more</p>
              </div>
            </div>
            <div className="company-card">
              <img src={icon4} alt="" />
              <div className="company-content">
                <p className="company-text">Wide assortment</p>
                <p className="company-par">Orders $50 or more</p>
              </div>
            </div>
            <div className="company-card">
              <img src={icon5} alt="" />
              <div className="company-content">
                <p className="company-text">Easy returns</p>
                <p className="company-par">Orders $50 or more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;
