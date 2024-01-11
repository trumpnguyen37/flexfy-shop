import React from "react";
import "./style.css";
import CommunityCard from "./CommunityCard";

export default function Community() {
  return (
    <>
      <section className="community">
        <div className="con">
          <div className="heading-com f_flex">
            <div className="content">
              <h1 className="slanted-thin-text">join the community</h1>
              <div className="box-sale">
                <a href="/">Become our KOLs</a>
              </div>
            </div>
            <div className="com-icon">
              <div className="box-icon">
                <img src="./icons/icon_insta.png" alt="" />
              </div>
              <div className="box-icon">
                <img src="./icons/icon_tiktok.png" alt="" />
              </div>
            </div>
          </div>
          <CommunityCard />
        </div>
      </section>
    </>
  );
}
