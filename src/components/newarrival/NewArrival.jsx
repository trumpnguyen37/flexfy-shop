import React from "react";
import "./style.css";

export default function NewArrival() {
  const mystyle = {
    width: "50%",
    height: "600px",
  };
  return (
    <>
      <section className="annocument">
        <div className="con d_flex">
          <div className="img" style={mystyle}>
            <img
              src="./images/newarrivals/jisoon1.png"
              width="100%"
              height="100%"
            />
          </div>
          <div className="img" style={mystyle}>
            <img
              src="./images/newarrivals/jisoon2.png"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="box-sale1">
          <a href="/">New arrival</a>
        </div>
        <div className="box-sale2">
          <a href="/">Beanie</a>
        </div>
      </section>
    </>
  );
}
