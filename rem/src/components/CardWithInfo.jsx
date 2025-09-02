// src/components/CardWithInfo.jsx
import React from 'react';
import Card from './Card';
import './CardWithInfo.css';
import './HotCard.css'; // novo CSS só para os hot items

const CardWithInfo = ({ title, colors, price, image, variant }) => {
  return (
    <div className={`card-with-info ${variant === "hot" ? "hot-card" : ""}`}>
      <Card image={image} />
      <div className="card-info">
        <p className="card-title">{title}</p>
        <div className="color-circles">
          {colors.map((color, index) => (
            <span
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default CardWithInfo;
