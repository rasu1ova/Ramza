import React from "react";
import { PupilsOpinion } from "../assets";

function Opinions() {
  return (
    <section className="container row pad">
      <div className="opinion__img">
        <img src={PupilsOpinion} alt="o'quvchilar fikri" />
      </div>
      <div className="opinion__info">
        <p className="opinion--title">
          Bu yerda o‘qiganimdan so‘ng yangi bilim va tushunchalarga ega bo‘ldim.
          Murabbiy juda samimiy edi va menga kerakli bilimlarni olishim uchun
          yo'l-yo'riq ko'rsatdi. Rahmat!
        </p>
        <h3 className="opinion--name">Ali</h3>
        <p className="grey--text">Chust shahri</p>
      </div>
    </section>
  );
}

export default Opinions;
