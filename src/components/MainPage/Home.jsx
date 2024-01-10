import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homeSlide">
        <div className="box-image d_flex">
          <img src="./images/banner.jpg" alt="" />
        </div>
        <div className="box-sale">
          <a href="/">shop sale</a>
        </div>
        <img src="./images/banner.jpg" alt="" />

        <img src="./images/banner.jpg" alt="" />
      </div>
    </>
  );
}
