import React from "react";
import "./style.css";
import SaleOffCard from "./SaleOffCard";

export default function SaleOff() {
  return (
    <>
      <section className="seller">
        <div className="con">
          <div className="heading f_flex">
            <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
            <h1>Up to 30% Off</h1>
            <div className="box-sale">
              <a href="/">shop Bras</a>
            </div>
          </div>
          <SaleOffCard />
        </div>
      </section>
    </>
  );
}
