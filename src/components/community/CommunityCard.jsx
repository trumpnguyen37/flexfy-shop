import React from "react";

export default function CommunityCard() {
  const mystyle = {
    width: "25%",
    height: "510px",
  };
  return (
    <>
      <section className="com-card">
        <div className="con">
          <div className="con d_flex">
            <div className="img" style={mystyle}>
              <img
                src="./images/newarrivals/jisoo1.png"
                width="100%"
                height="100%"
              />
            </div>
            <div className="img" style={mystyle}>
              <img
                src="./images/newarrivals/jisoo2.png"
                width="100%"
                height="100%"
              />
            </div>
            <div className="img" style={mystyle}>
              <img
                src="./images/newarrivals/jisoo3.png"
                width="100%"
                height="100%"
              />
            </div>
            <div className="img" style={mystyle}>
              <img
                src="./images/newarrivals/jisoo4.png"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="con-bk">
            <h1 className="slanted-thin-text1">Confidence from within</h1>
            <p>
              Post your pictures on your instagram or facebook with hashtag
              #flexfy
            </p>
            <div className="box-sale3">
              <a href="/">about us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
