import React from "react";
import "../styles/certificates-page.css";
import certificateData from "../constant/certificateData";

export default class Certificates extends React.Component {
  render() {
    return (
      <div className="certificate-wrapper">
        {certificateData.map(({ id, alert, image }) => (
          <div className="certificate-card" key={id}>
            <img src={image} alt={alert} />
          </div>
        ))}
      </div>
    );
  }
}
