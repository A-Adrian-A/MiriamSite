import React from "react";
import './Footer.css'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
          <a >Instagram</a><br></br>
          <a>Linkedin</a><br></br>
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Explore</h3>
        <p className="footer__column_text">
          <a href="/faq">{t("FAQ")}</a><br></br>
        </p>
      </div>
    </div>
  );
};

export default Footer;
