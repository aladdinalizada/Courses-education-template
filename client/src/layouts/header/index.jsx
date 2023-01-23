import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  const handleJoinButton = () => {
    window.location.href = "/pages/sign-up";
  };
  const handleLogInButton = () => {
    window.location.href = "/pages/login";
  };
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
              <button className="joinBtn" onClick={() => handleJoinButton()}>
                Join
              </button>
              <button className="loginBtn" onClick={() => handleLogInButton()}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
