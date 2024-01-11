import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Odata from "./Odata";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
export default function OurCrewCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {Odata.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <img src={productItems.cover} alt="" />
                  {/* <div className="product-like">
          <label>{count}</label> <br />
          <i className="fa-regular fa-heart" onClick={increment}></i>
        </div> */}
                </div>
                <div className="product-details">
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>{productItems.product}</p>
                  <span className="name">{productItems.name}</span>
                  <div className="sale">
                    <a href="/">SHOP STYLE</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
