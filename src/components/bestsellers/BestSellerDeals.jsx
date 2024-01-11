import React from "react";
import "./style.css";
import BestSellerCard from "./BestSellerCard";

export default function BestSellerDeals() {
  return (
    <>
      <section className="seller">
        <div className="con">
          <div className="heading f_flex">
            {/* <i className="fa fa-bolt"></i> */}
            <h1>Best Seller</h1>
            <div className="box-sale">
              <a href="/">shop sale</a>
            </div>
          </div>
          <BestSellerCard />
          <div class="gradient-banner1">CREW FAVE</div>
          <div class="gradient-banner2">NEW ARRIVAL</div>
        </div>
      </section>
    </>
  );
}
