import React, { Fragment } from "react";
import './ZPattern.css'
import { useTranslation } from 'react-i18next';


const ZPattern = (param) => {
  const { t } = useTranslation();
  const prefix = param.page.title.toLowerCase()
  return (
    <div className="zpattern">
      <img className="zpattern__title-image" src={param.page.image} alt=''></img>
      <h1 className="zpattern__title">{t(param.page.title)}</h1>

      <div className="zpattern__grid">
        {param.page.images.map((image, index) => (
          index % 2 !== 0 ?
            <Fragment>
              <img className="zpattern__image" alt='' src={image}></img>
              <div className="zpattern__text">
                <h2 className="zpattern__paragraph-title">{t(prefix + "_paragraph_" + index + "_title")}</h2>
                <p>{t(prefix + "_paragraph_" + index + "_text")}</p>
              </div>
            </Fragment>
            :
            <Fragment>
              <div className="zpattern__text">
                <h2 className="zpattern__paragraph-title">{t(prefix + "_paragraph_" + index + "_title")}</h2>
                <p>{t(prefix + "_paragraph_" + index + "_text")}</p>
              </div>
              <img className="zpattern__image" alt='' src={image}></img>
            </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ZPattern;
