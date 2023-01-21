import React from "react";
import "./index.scss";
const About3Area = () => {
  return (
    <div>
      <div className="area">
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about3.png.webp"
            alt=""
          />
        </div>
        <div className="right">
          <div className="head">
            <h2>Learner outcomes on courses you will take</h2>
          </div>
          <div className="body">
            <div className="features-single">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                alt=""
              />
              <p>
                Techniques to engage effectively with vulnerable children and
                young people.
              </p>
            </div>{" "}
            <div className="features-single">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                alt=""
              />
              <p>
                Join millions of people from around the world learning together.
              </p>
            </div>{" "}
            <div className="features-single">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                alt=""
              />
              <p>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3Area;
