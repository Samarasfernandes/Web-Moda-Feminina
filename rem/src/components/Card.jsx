import React from 'react';
import './Card.css';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="card-image" />
    </div>
  );
};

export default Card;
