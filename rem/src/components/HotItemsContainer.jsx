import React from 'react';
import CardWithInfo from './CardWithInfo'; // Reutilizando o componente que já tem
import './HotItemsContainer.css'; // Pode usar o mesmo CSS do container
import './Card.css';

const hotItemsData = [
  {
    id: 101,
    title: 'Bola de tenis',
    colors: ['#99FF62', '#CD4662', '#fff'], // tons quentes
    price: 'R$ 299',
    image: '/equi1.png',
  },
  {
    id: 102,
    title: 'Meias esporte',
    colors: ['#fff', '#B2E1FF', '#FDF4A9'],
    price: 'R$ 299',
    image: '/equi2.png',
  },
  {
    id: 103,
    title: 'Raquete',
    colors: ['#FFf', '#CD4662', '#000'],
    price: 'R$ 599',
    image: '/equi3.png',
  },
];

const HotItemsContainer = () => {
  return (
    <div className="cards-container">
      {hotItemsData.map(({ id, title, colors, price, image }) => (
        <CardWithInfo
          key={id}
          title={title}
          colors={colors}
          price={price}
          image={image}
           variant="hot"
        />
      ))}
    </div>
  );
};

export default HotItemsContainer;
