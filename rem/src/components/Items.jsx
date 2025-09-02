// src/components/Hero.jsx
import React from "react";
import "./Items.css";
import Card from "./Card";
import CardsContainer from "./CardsContainer";
import HotItemsContainer from './HotItemsContainer'


const Items = () => {
  return (
    <section className="items">
        <p className="titulo_item">COMPRE COM QUALIDADE</p>
         <HotItemsContainer />

<p className="m2">{"mais >>"}</p>

    </section>
  );
};

export default Items;
