import React from "react";
import './Vorsorge.css'
import vorsorge from "../../img/vorsorge/vorsorge.jpg"
import firstImage from "../../img/eigenheim/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import secondImage from "../../img/eigenheim/ian-macdonald-W8z6aiwfi1E-unsplash.jpg"
import { useTranslation } from 'react-i18next';




const Vorsorge = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="eigenheim">
      <img className="eigenheim__title-image" src={vorsorge}></img>
      <h1 className="eigenheim__title">{t(Eigenheim)}</h1>
      <div className="eigenheim__grid">
        <div className="eigenheim__text">
          <h2 className="eigenheim__paragraph-title">{t("eigenheim_paragraph_1_title")}</h2>
          <p>{t("eigenheim_paragraph_1_text")}</p>
        </div>
        <img className="eigenheim__image-left" alt='' src={firstImage}></img>
        
        <img className="eigenheim__image-left" alt='' src={secondImage}></img>
        <div className="eigenheim__text">
          <h2 className="eigenheim__paragraph-title">{t("eigenheim_paragraph_2_title")}</h2>
          <p>{t("eigenheim_paragraph_2_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Eigenheim;
