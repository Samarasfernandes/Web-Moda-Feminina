// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>The Girls</h3>
          <p>Marca feminina de roupas e acessórios esportivos.</p>
        </div>
        <div className="footer-section">
          <h3>Moda</h3>
          <ul>
            <li><a href="#home">Feminina</a></li>
            <li><a href="#sobre">Categoria</a></li>
            <li><a href="#contato">Para mulheres</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@minhamarca.com</p>
          <p>WhatsApp: (99) 99999-9999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 01/09/2025 Feito por Samara Sona Fernandes .</p>
      </div>
    </footer>
  );
};

export default Footer;
