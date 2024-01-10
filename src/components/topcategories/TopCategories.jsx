import React from "react";
import "./style.css";
import TopCategoriesCard from "./TopCategoriesCard";

export default function TopCategories() {
  return (
    <>
      <section className="seller">
        <div className="con">
          <div className="heading f_flex">
            <i className="fa-solid fa-border-all"></i>
            <h1>Up to 30% Off</h1>
            <div className="box-sale">
              <a href="/">shop Bras</a>
            </div>
          </div>
          <TopCategoriesCard />
        </div>
      </section>
    </>
  );
}
