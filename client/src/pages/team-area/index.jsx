import React from "react";
import "./index.scss";
const TeamArea = () => {
  return (
    <div>
      <div className="team-area">
        <div className="head">
          <h2>Community experts</h2>
        </div>
        <div className="body">
          <div className="team">
            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/gallery/team1.png.webp"
                  alt="team member"
                />
              </div>
              <div className="team-member-context">
                <h5>
                  <a href="">Mr. Urela </a>
                </h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/gallery/team2.png.webp"
                  alt="team member"
                />
              </div>
              <div className="team-member-context">
                <h5>
                  <a href="">Mr. Uttom </a>
                </h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/gallery/team3.png.webp"
                  alt="team member"
                />
              </div>
              <div className="team-member-context">
                <h5>
                  <a href="">Mr. Shakil </a>
                </h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/gallery/team4.png.webp"
                  alt="team member"
                />
              </div>
              <div className="team-member-context">
                <h5>
                  <a href="">Mr. Arafat </a>
                </h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
