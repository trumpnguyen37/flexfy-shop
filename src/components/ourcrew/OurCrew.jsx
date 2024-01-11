import React from "react";
import OurCrewCard from "./OurCrewCard";
import "./style.css";

export default function OurCrew() {
  return (
    <>
      <section className="ourcrew">
        <div className="con">
          <div className="heading f_flex">
            {/* <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" /> */}
            <h1>Our Crew is Raving</h1>
          </div>
          <OurCrewCard />
        </div>
      </section>
    </>
  );
}
