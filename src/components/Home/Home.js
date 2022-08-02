import React from "react";
import './Home.css'
import SlideShow from "../SlideShow/SlideShow";
import frau_zeigt from "../../img/frau-zeigt.jpg"
import portrait from "../../img/quadrat.jpg"
import Dienstleistungen from "../dienstleistung/Dienstleistungen";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <SlideShow></SlideShow>
      <div className="home__border">
      <div className="home__about-finanzplanung">
        <div className="home__text">
          <h1>{t("Warum Finanzplanung")}</h1>
          <p>
          {t("Warum_Finanzplanung_text_paragraph_1")}
          </p>
          <p>
          {t("Warum_Finanzplanung_text_paragraph_2")}
          </p>
          <p>
          {t("Warum_Finanzplanung_text_paragraph_3")}
          </p>
          <p>
          {t("Warum_Finanzplanung_text_paragraph_4")}
          </p>
        </div>
        
        <img className="home__about-finazplannung-image" alt='' src={frau_zeigt}></img>

       
      </div>
      <Dienstleistungen></Dienstleistungen>
      <div className="home__miriam">
        <div className="home__miriam-image-container">
          <img className="home__miriam-image" alt='' src={portrait}></img>
        </div>
        <div className="home__miriam-text">
          <h2>{t("Miriam über Finanzplanung")} </h2>
        <p>{t("Miriam_über_finanzplanung_text")}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
