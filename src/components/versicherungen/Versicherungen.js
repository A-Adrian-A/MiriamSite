import React from "react";
import './Versicherungen.css'
/* import versicherungen from "../../img/versicherungen/versicherungen.jpg"
import firstImage from "../../img/versicherungen/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import secondImage from "../../img/versicherungen/ian-macdonald-W8z6aiwfi1E-unsplash.jpg" */
import { useTranslation } from 'react-i18next';




const Versicherung = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="versicherungen">
      {/*   <img className="versicherungen__title-image" src={versicherungen}></img>
      <h1 className="versicherungen__title">{t(versicherungen)}</h1>
      <div className="versicherungen__grid">
        <div className="versicherungen__text">
          <h2 className="versicherungen__paragraph-title">{t("versicherungen_paragraph_1_title")}</h2>
          <p>{t("versicherungen_paragraph_1_text")}</p>
        </div>
        <img className="versicherungen__image-left" alt='' src={firstImage}></img>
        
        <img className="versicherungen__image-left" alt='' src={secondImage}></img>
        <div className="versicherungen__text">
          <h2 className="versicherungen__paragraph-title">{t("versicherungen_paragraph_2_title")}</h2>
          <p>{t("versicherungen_paragraph_2_text")}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Versicherung;
