import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="courses">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo2_footer.png.webp"
            alt=""
          />
          <p>
            The automated process starts as soon as your clothes go into the
            machine.
          </p>
          <ul>
            <li>
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="ourSolutions">
          <h3>Our Solutions</h3>
          <ul>
            <li>
              <a href="">Design & creatives</a>
            </li>
            <li>
              <a href="">Telecommunication</a>
            </li>
            <li>
              <a href="">Restaurant</a>
            </li>
            <li>
              <a href="">Programing</a>
            </li>
            <li>
              <a href="">Architecture</a>
            </li>
          </ul>
        </div>
        <div className="ourSupport">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="">Design & creatives</a>
            </li>
            <li>
              <a href="">Telecommunication</a>
            </li>
            <li>
              <a href="">Restaurant</a>
            </li>
            <li>
              <a href="">Programing</a>
            </li>
            <li>
              <a href="">Architecture</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="">Design & creatives</a>
            </li>
            <li>
              <a href="">Telecommunication</a>
            </li>
            <li>
              <a href="">Restaurant</a>
            </li>
            <li>
              <a href="">Programing</a>
            </li>
            <li>
              <a href="">Architecture</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <i class="fa-solid fa-heart"></i> by <a href="">Colorib</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
