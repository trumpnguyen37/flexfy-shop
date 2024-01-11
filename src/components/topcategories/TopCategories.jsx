import React from "react";
import "./style.css";
import TopCategoriesCard from "./TopCategoriesCard";

export default function TopCategories() {
  return (
    <>
      <section className="seller">
        <div className="con">
          <div className="heading f_flex">
            {/* <i className="fa-solid fa-border-all"></i> */}
            <h1>15% Off Top Categories</h1>
          </div>
          <TopCategoriesCard />
        </div>
      </section>
    </>
  );
}
