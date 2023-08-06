import React from "react";
import { HomeBg } from "../assets";

function Home() {
  return (
    <section className="home pad">
      <div className="row container">
        <div className="home__info">
          <div>
            <h1 className="main--heading">
              Eng yaxshi kurslar va ajoyib murabbiyni toping
            </h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              deserunt asperiores ad, quae animi voluptatem, minima illum quod
              qui, nemo inventore et esse nihil.
            </p>
          </div>
          <div className="row home__info--bottom">
            <p>⏲️ Life Time Acces</p>
            <p>👻 Expert Mentor</p>
            <p>🧾 100K+ Courses</p>
          </div>
        </div>
        <div className="home__img">
          <img src={HomeBg} alt="asosiy rasm" />
        </div>
      </div>
    </section>
  );
}

export default Home;
