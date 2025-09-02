import React from 'react';
import CardWithInfo from './CardWithInfo';
import './CardsContainer.css';

const cardsData = [
  {
    id: 1,
    title: 'Vestido all rosa',
  colors: ['#EBC2CA', '#000', '#B2E1FF'],
    price: 'R$ 499',
    image: 'roupa1.png',
  },
  {
    id: 2,
    title: 'Conjunto all',
     colors: ['#FDF4A9', '#EBC2CA', '#000'], 
    price: 'R$ 399',
    image: '/roupa2.png',
  },
  {
    id: 3,
    title: 'Saia all school',
      colors: ['#0B696E', '#CD4662', '#FDF4A9'], 
    price: 'R$ 299',
    image: '/roupa3.png',
  },
];

const CardsContainer = () => {
  return (
    <div className="cards-container">
      {cardsData.map(({ id, title, colors, price, image }) => (
        <CardWithInfo
          key={id}
          title={title}
          colors={colors}
          price={price}
          image={image}
        />
      ))}
      <div className="overlay"></div>
    </div>
  );
};
export default CardsContainer;