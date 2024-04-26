import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/noteboock.png";
import img2 from "../../assets/carousel2.jpg";

import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="banner__swiper"
      >
        <SwiperSlide className="banner__item">
          <section className="hero">
            <div className="container">
              <div className="hero-style">
                <div className="hero-content">
                  <p className="hero-title">
                    <span>100%</span> Organic Vegetables
                  </p>
                  <p className="hero-text">
                    The best way to stuff your wallet.
                  </p>
                  <p className="hero-par">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet reiciendis beatae consequuntur.
                  </p>
                  <form className="hero-form" action="">
                    <input
                      className="email"
                      type="text"
                      placeholder="Your emaill address"
                    />
                    <button className="hero-btn">Subscribe</button>
                  </form>
                </div>
                <img src={img1} alt="" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <section className="hero">
            <div className="container">
              <div className="hero-style">
                <div className="hero-content">
                  <p className="hero-title">
                    <span>100%</span> Organic Vegetables
                  </p>
                  <p className="hero-text">
                    The best way to stuff your wallet.
                  </p>
                  <p className="hero-par">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet reiciendis beatae consequuntur.
                  </p>
                  <form className="hero-form" action="">
                    <input
                      className="email"
                      type="text"
                      placeholder="Your emaill address"
                    />
                    <button className="hero-btn">Subscribe</button>
                  </form>
                </div>
                <img
                  src={img2}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
