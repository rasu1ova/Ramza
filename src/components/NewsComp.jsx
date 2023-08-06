import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewsComp(props) {
  const { img, name } = props;
  return (
    <div className="courses--card">
      <div className="courses--img">
        <img src={img} alt={`${name} yo'nalishi rasmi`} />
      </div>
      <h3 className="courses--describe news--describe">{name}</h3>
      <p className="grey--text">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
        eiusmod.
      </p>
      <div className="courses--btn">
        <button className="nonActive row ">
          <Link className="green">Batafsil</Link>{" "}
          <FaArrowRight className="white" />
        </button>
      </div>
    </div>
  );
}

export default NewsComp;
