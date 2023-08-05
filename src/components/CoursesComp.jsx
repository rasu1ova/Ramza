import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function CoursesComp() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/rasu1ova/ramzaApi/CoursesData")
      .then((res) => res.json())
      .then((res) => setData(res));
    console.log(data);
  }, []);
  return (
    <>
      {data ? (
        data.map((item, index) => {
          return (
            <div className="courses--card" key={index}>
              <img src={item.img} alt={`${item.name} yo'nalishi rasmi`} />
              <div className="courses--name"><span>{item.name}</span></div>
              <h3 className="courses--describe">{item.describe}</h3>
              <div className="courses--btn">
                <button className="btn row">
                  <Link>Batafsil</Link> <FaArrowRight />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="heading">Loading...</p>
      )}
    </>
  );
}

export default CoursesComp;
