import React from "react";
import NewsComp from "./NewsComp";

function News() {
  return (
    <section className="container pad">
      <h2 className="heading">Yangiliklar</h2>
      <div className="row-wrap">
        <NewsComp img="https://i.ibb.co/ckJH8vy/4.png" name="Kids" />
        <NewsComp img="https://i.ibb.co/qYwqL6w/1.png" name="UI/UX Dizayn" />
        <NewsComp img="https://i.ibb.co/hFGtDg7/5.png" name="Kompyuter savodxonligi" />
      </div>
    </section>
  );
}

export default News;
