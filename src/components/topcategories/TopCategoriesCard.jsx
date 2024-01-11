import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";

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

export default function TopCategoriesCard() {
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
        {Tdata.map((productItems) => {
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
                  <div className="box-sale">
                    <a href="#">{productItems.type}</a>
                  </div>
                  {/* step : 3  
           
                */}
                  {/* <button onClick={() => addToCart(productItems)}>
                <i className="fa fa-plus"></i>
              </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
