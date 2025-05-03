import React from "react";
import "../styles/portfolio.css";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="/assets/images/student/Ayush.png"
          alt="Ayush Nakade"
          className="profile-img"
        />
      </div>
      <div className="card-body">
        <h2>Ayush Nakade</h2>
        <p>B-Tech 1st yr</p>
        <p>NIT Nagpur</p>
        <p>Katol, Maharashtra, India</p>
        <a
          href="https://linkedin.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Linkedin Profile ↗
        </a>
        <a
          href="https://portfolio-link.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Visit Ayush N's portfolio ↗
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
