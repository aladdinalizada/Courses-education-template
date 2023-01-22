import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Support = () => {
  return (
    <div>
      <div className="support">
        <div className="left">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about2.png.webp"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <h2>
            Take the next step toward your personal and professional goals with
            us.
          </h2>
          <p>
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>
          <button>
            <Link>Join Now For Free</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
