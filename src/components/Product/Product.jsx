import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "../../api";
import star from "../../assets/=star.png";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let cards = data?.slice(0, 12).map((el) => (
    // <Link to={`/products/${el.id}`} style={{ textDecoration: "none" }}>
    <div key={el.id} className="product-card">
      <img
        style={{ width: "246px", height: "246px" }}
        src={el.thumbnail}
        alt=""
      />
      <p className="product-card-title">{el.title}</p>
      <p className="product-card-text" title={el.description}>
        {el.description}
      </p>
      <div className="product-stars">
        <img src={star} alt="" />
        <p className="stack">({el.stock})</p>
      </div>
      <p className="product-brand">{el.brand}</p>
      <div className="product-prices">
        <p className="product-price">{el.price}$</p>
        <button className="product-btn">Add</button>
      </div>
    </div>
    // </Link>
  ));

  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product-titles">
            <p className="product-title">Popular Products</p>
            <p className="product-items">
              <a href="#" className="product-item">
                All
              </a>
              <a href="#" className="product-item">
                Milks & Dairies
              </a>
              <a href="#" className="product-item">
                Coffes & Teas
              </a>
              <a href="#" className="product-item">
                Pet Foods
              </a>
              <a href="#" className="product-item">
                Meats
              </a>
              <a href="#" className="product-item">
                Vegetables
              </a>
              <a href="#" className="product-item">
                Fruits
              </a>
            </p>
          </div>
          {loading ? <h2>Loading...</h2> : <></>}
          <div className="product-cards">{cards}</div>
        </div>
      </section>
    </div>
  );
}

export default Product;
