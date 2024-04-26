import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/Category/Category";
import Company from "../../components/Company/Company";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Category />
      <Company />
      <Product />
    </div>
  );
}

export default Home;
