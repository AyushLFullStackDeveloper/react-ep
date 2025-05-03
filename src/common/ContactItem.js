import React from 'react';

const ContactItem = ({ icon: Icon, title, text }) => {
  return (
    <div className="contact-item">
      <Icon className="contact-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ContactItem;
