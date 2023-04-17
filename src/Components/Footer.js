import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhe</span>
          <span>Carreiras</span>
          <span>Avaliações</span>
          <span>Trabalhe Conosco</span>
        </div>
        <div className="footer-section-columns">
          <span>47-8833-7783</span>
          <span>exemplo@food.com</span>
          <span>exemplo1@food.com</span>
          <span>exemplo2@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
