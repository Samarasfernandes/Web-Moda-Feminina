// src/components/Hero.jsx
import React from "react";
import "./Roupas.css";
import Card from "./Card";
import CardsContainer from "./CardsContainer";

const Roupas = () => {
  return (
    <section className="roupas">
        <p className="titulo_roupas">PARA TREINAR E JOGAR</p>
        <CardsContainer />

<p className="m">{"mais >>"}</p>

    </section>
  );
};

export default Roupas;
