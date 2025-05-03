// ContactSection.jsx

import React from "react";

const ContactSection = ({ title, subtitle, description }) => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">{title}</h1>
      <div className="contact-subtitle">
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactSection;
