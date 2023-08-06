import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pupil} from "../assets";

function Opinions() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const opinions = [
    {
      id: 1,
      title:
        "Bu yerda o‘qiganimdan so‘ng yangi bilim va tushunchalarga ega bo‘ldim. Murabbiy juda samimiy edi va menga kerakli bilimlarni olishim uchun yo'l-yo'riq ko'rsatdi. Rahmat!",
      name: "Ali",
      location: "Chust shahri",
    },
    {
      id: 2,
      title:
        "Bu yerda o‘qiganimdan so‘ng yangi bilim va tushunchalarga ega bo‘ldim. Murabbiy juda samimiy edi va menga kerakli bilimlarni olishim uchun yo'l-yo'riq ko'rsatdi. Rahmat!",
      name: "Ali",
      location: "Chust shahri",
    },
    {
      id: 3,
      title:
        "Bu yerda o‘qiganimdan so‘ng yangi bilim va tushunchalarga ega bo‘ldim. Murabbiy juda samimiy edi va menga kerakli bilimlarni olishim uchun yo'l-yo'riq ko'rsatdi. Rahmat!",
      name: "Ali",
      location: "Chust shahri",
    },
  ];
  return (
    <section className="container opinion  pad">
      <Slider {...settings}>
        {opinions.map((opinion, index) => (
          <div key={index} style={myStyle} className="row">
            <div className="opinion__img">
              <img src={Pupil} alt={`Opinion ${index + 1}`} />
            </div>
            <div className="opinion__info" >
              <p className="opinion--title">{opinion.title}</p>
              <h3 className="opinion--name">{opinion.name}</h3>
              <p className="grey--text">{opinion.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Opinions;
