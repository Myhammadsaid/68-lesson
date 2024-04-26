import React from "react";
import "./Category.css";

function Category() {
  const data = [
    {
      id: 1,
      text: `Everyday Fresh & Clean with Our Products`,
      btn: "Shop Now",
      bg: "https://seventrade.uz/upload/resize_cache/iblock/81c/400_400_140cd750bba9870f18aada2478b24840a/ztaf5zxhe803o35gi8xtgltlsjbljl48.png",
    },
    {
      id: 2,
      text: `Make your Breakfast
              Healthy and Easy`,
      btn: "Shop Now",
      bg: "https://seventrade.uz/upload/resize_cache/iblock/81c/400_400_140cd750bba9870f18aada2478b24840a/ztaf5zxhe803o35gi8xtgltlsjbljl48.png",
    },
    {
      id: 3,
      text: `The best Organic
              Products Online`,
      btn: "Shop Now",
      bg: "https://seventrade.uz/upload/resize_cache/iblock/81c/400_400_140cd750bba9870f18aada2478b24840a/ztaf5zxhe803o35gi8xtgltlsjbljl48.png",
    },
  ];
  let date = data?.map((val) => (
    <div key={val.id} className="category-card">
      <div className="category-content">
        <p className="category-text">{val.text}</p>
        <button className="category-btn">{val.btn}</button>
      </div>
      <img className="category-img" src={val.bg} alt="" />
    </div>
  ));
  return (
    <div>
      <section className="category">
        <div className="container">
          <div className="category-cards">{date}</div>
        </div>
      </section>
    </div>
  );
}

export default Category;
