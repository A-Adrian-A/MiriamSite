import React from "react";
import './Vorsorge.css'
import vorsorge from "../../img/vorsorge/vorsorge.jpg"
import firstImage from "../../img/vermoegensaufbau/"
import secondImage from "../../img/vermoegensaufbau/"
import { useTranslation } from 'react-i18next';




const Vorsorge = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="vorsorge">
      <img className="vorsorge__title-image" src={vorsorge}></img>
      <h1 className="vorsorge__title">{t(vorsorge)}</h1>
      <div className="vorsorge__grid">
        <div className="vorsorge__text">
          <h2 className="vorsorge__paragraph-title">{t("vorsorge_paragraph_1_title")}</h2>
          <p>{t("vorsorge_paragraph_1_text")}</p>
        </div>
        <img className="vorsorge__image-left" alt='' src={firstImage}></img>
        
        <img className="vorsorge__image-left" alt='' src={secondImage}></img>
        <div className="vorsorge__text">
          <h2 className="vorsorge__paragraph-title">{t("vorsorge_paragraph_2_title")}</h2>
          <p>{t("vorsorge_paragraph_2_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default vorsorge;
