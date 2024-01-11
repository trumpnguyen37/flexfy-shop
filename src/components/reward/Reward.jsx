import React from "react";
import "./style.css";

export default function Reward() {
  const mystyle = {
    width: "50%",
    height: "410px",
  };
  return (
    <>
      <section className="reward">
        <div className="con d_flex">
          <div className="img" style={mystyle}>
            <img
              src="./images/newarrivals/background.png"
              width="100%"
              height="100%"
            />
          </div>
          <div className="img" style={mystyle}>
            <img
              src="./images/newarrivals/justinbieber.png"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="content-reward">
          <h1>Promotion for Member </h1>
          <p>
            Sign up now get <b>&#8369;50</b> coupon
          </p>
          <div className="box-sale3">
            <a href="/">join rewards</a>
          </div>
        </div>
      </section>
    </>
  );
}
