import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const ExploreTopSubject = () => {
  const images = [
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic1.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic2.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic3.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic4.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic5.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic6.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic7.png.webp",
    "https://preview.colorlib.com/theme/courses/assets/img/gallery/topic8.png.webp",
  ];
  return (
    <div>
      <div className="ExploreTopSubject">
        <div className="head">
          <h2>Explore top subjects</h2>
        </div>
        <div className="body">
          <div className="items">
            <div className="itemCard">
              <div className="img">
                <img src={images[0]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[1]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[2]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[3]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[4]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[5]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[6]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>{" "}
            <div className="itemCard">
              <div className="img">
                <img src={images[7]} alt="img" />
                <div className="text">
                  <span>PROGRAMING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>
          <Link>View More Subjects</Link>
        </button>
      </div>
    </div>
  );
};

export default ExploreTopSubject;
