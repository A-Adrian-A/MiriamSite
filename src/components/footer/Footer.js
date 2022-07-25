import React from "react";
import './Footer.css'
import SlideShow from "../SlideShow/SlideShow";
import frau_zeigt from "../../img/frau-zeigt.jpg"
import portrait from "../../img/quadrat.jpg"
import Dienstleistungen from "../dienstleistung/Dienstleistungen";
import { Trans } from "react-i18next";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__column">
        <h3 className="footer__column-title">Get in Touch</h3>
        <p className="footer__column_text">
          Miriam Adam<br></br>
          +41 77 498 16 13<br></br>
          miriam.adam@swislife-select.ch
        </p>
      </div>

      <div className="footer__column">
        <h3 className="footer__column-title">Connect</h3>
        <p className="footer__column_text">
          <a>instagram</a><br></br>
          <a>Likedin</a><br></br>
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Explore</h3>
        <p className="footer__column_text">
          <a><Trans>FAQ</Trans></a><br></br>
          <a><Trans>Datenschutz</Trans></a><br></br>
        </p>
      </div>
    </div>
  );
};

export default Footer;
