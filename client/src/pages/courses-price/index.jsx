import React, { useEffect, useState } from "react";
import "./index.scss";
import "swiper/css";
import { Link, useParams } from "react-router-dom";

const FeaturedCourses = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handledetails = (e) => {
    const id = e.target.id;
    const details = data.find((item) => item.id === id);
    window.location.href = `/details/${id}`;
  };

  return (
    <div>
      <div className="box">
        <div className="box-header">
          <h2 className="box-title"> Our featured courses</h2>
        </div>
        <div className="box-body">
          {data.slice(0, 3).map((item) => (
            <div className="card" key={item.id}>
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <div className="content-bos">
                <div className="category">
                  <span>{item.category}</span>
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="description">
                  <p>{item.description}</p>
                </div>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className="bottom">
                  <div className="left">
                    <span>(4.5)</span> based on 120
                  </div>
                  <div className="price">
                    <span>${item.price}</span>
                  </div>
                </div>
                <button id={item.id}>
                  <Link id={item.id} onClick={(e) => handledetails(e)}>
                    Find Out More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
