import React from "react";
import "./index.scss";
const AbourArea = () => {
  return (
    <div>
      <div className="about">
        <div className="left">
          <div className="svg">
            <img
              style={{ backgroundColor: "black" }}
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/about.svg"
              alt=""
            />
          </div>
          <div className="text">
            <h2>Learn new skills online with top educators</h2>
          </div>
          <div className="desc">
            <p>
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>
          </div>
          <div className="features">
            <div className="single-features">
              <div className="icon">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Techniques to engage effectively with vulnerable children and
                  young people.
                </p>
              </div>
            </div>
            <div className="single-features">
              <div className="icon">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Join millions of people from around the world learning
                  together.
                </p>
              </div>
            </div>
            <div className="single-features">
              <div className="icon">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Join millions of people from around the world learning
                  together. Online learning is as easy and natural.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="video">
            <video src="https://www.youtube.com/watch?v=up68UAfH0d0">
            </video>
            <div className="play">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbourArea;
