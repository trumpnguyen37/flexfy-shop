import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function SaleOffCard() {
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
        {Sdata.map((productItems) => {
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
                    <i className="fa fa-star" style={{ color: "grey" }}></i>
                  </div>
                  <span className="review">{productItems.review} REVIEWS</span>
                  <h3>{productItems.name}</h3>
                  <div className="price">
                    <h4>&#8369;{productItems.price}</h4>
                    {/* step : 3  
          
                */}
                    {/* <button onClick={() => addToCart(productItems)}>
                <i className="fa fa-plus"></i>
              </button> */}
                  </div>
                  <div
                    class="color-circle active"
                    style={{ backgroundColor: "pink" }}
                  ></div>
                  <div
                    class="color-circle"
                    style={{ backgroundColor: "grey" }}
                  ></div>
                  <div
                    class="color-circle"
                    style={{ backgroundColor: "black" }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
