import React from "react";
import './AboutMe.css'

import { useTranslation } from "react-i18next";
import image from "../../img/about_me/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"



const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="about-me">
      <img className="about-me__image" alt='' src={image}></img>
      <div className="about-me__text">
        <h1>{t("Ueber_mich_title")}</h1>
        <p>{t("Ueber_mich_text")}</p>
      </div>
    
    </div>
  );
};

export default AboutMe;
