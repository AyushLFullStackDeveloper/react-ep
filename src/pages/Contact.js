import React from "react";
import "../styles/contact-page.css";
import ContactItem from "../common/ContactItem";
import contactData from "../constant/contactData";


const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-subtitle">
        <h2>Have you any question?</h2>
        <p>We Are At Your Service</p>
      </div>

      <div className="contact-info">
        {contactData.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
