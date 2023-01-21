import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="leftLogo">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp"
              alt=""
            />
          </div>
          <div className="navButtonsRight">
            <div className="navButton">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link>Courses</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="joinLoginBtn">
              <button className="joinBtn">Join</button>
              <button className="loginBtn">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
