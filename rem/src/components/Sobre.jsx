// src/components/Hero.jsx
import React from "react";
import "./Sobre.css";

const Sobre = () => {
  return (
    <section className="sobre">
        <p className="tsobre">Sobre</p>
      <img src="/f1.jpg" alt="" className="f1" />
      <img src="/f2.jpg" alt="" className="f2" />

      
      <p className="ssobre">
        O tênis feminino vai além das quadras: é <br />
        estilo, atitude e confiança. <br />
        Nossas roupas e equipamentos unem <br />
        tecnologia, conforto e design sofisticado, <br />
        para que cada jogadora se sinta única em <br />
        cada movimento. <br />
        Somos uma marca feita por mulheres e <br />
        para mulheres, inspirada na força, na <br />
        determinação e na elegância de quem <br />
        transforma cada partida em uma <br />
        expressão de poder e autenticidade.
      </p>
    </section>
  );
};

export default Sobre;
