import React from "react";
import "./MonumentCard.css";

const MonumentCard = ({ title, image, onClick }) => {
  return (
    <div className="monument-card" onClick={onClick}>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default MonumentCard;
