import React from 'react';

const ContactHeader = ({ title, subtitle, description }) => {
  return (
    <>
      <h1 className="contact-title">{title}</h1>
      <div className="contact-subtitle">
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ContactHeader;
