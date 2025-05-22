// src/pages/Contact.js
import React from "react";
import "../styles/contactPage.css";
import contactData, {
  title,
  subtitle,
  description,
} from "../helper/contactHelper/ContactData.js";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">{title}</h1>
      <div className="contact-subtitle">
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>

      <div className="contact-info">
        {contactData.map((item, index) => (
          <div key={index} className="contact-item">
            {item.icon}
            <h3 className="contact-heading">{item.title}</h3>
            <a
              href={item.link}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
