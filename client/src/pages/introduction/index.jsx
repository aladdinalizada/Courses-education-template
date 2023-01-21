import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="content">
            <h1>Online Learning platform</h1>
            <p>
              Build skills with courses, certificates, and degrees online from
              world-class universities and companies
            </p>
            <button>
              <Link>Join For Free</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
