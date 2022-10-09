import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
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
          <div  className="footer__column_link">
            <a href="https://www.instagram.com/madamselect/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer__column_link">
            <a href="https://www.linkedin.com/in/miriamadam" target="_blank" rel="noopener noreferrer">Linkedin</a><br></br>
          </div>
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Explore</h3>
        <p className="footer__column_text">
          <Link to="/faq"><Trans>FAQ</Trans></Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
