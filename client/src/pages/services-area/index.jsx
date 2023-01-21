import React from "react";
import "./index.scss";
const Services = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg"
            alt=""
          />
          <div className="content">
            <h3>60+ UX courses</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg"
            alt=""
          />
          <div className="content">
            <h3>Expert instructors</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg"
            alt=""
          />
          <div className="content">
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
