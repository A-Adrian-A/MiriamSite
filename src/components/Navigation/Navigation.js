import React, { useState } from 'react';

import './Navigation.css'
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import i18n from '../../i18n';
import logo from './img/LogoRed.png'
import { ReactComponent as ExpandMore } from '../../icon/expand_more.svg';


export const languages = [
  {
    title: "DE Deutsch",
    lng: "de"
  },
  {
    title: "FR Français",
    lng: "fr"
  },
];



const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className='navigation'>
      <img className='navigation__logo' src={logo} alt=""></img>
      <div className='navigation__meta'>
        <ul className='navigation__meta-links '>
          <li className='navigation__meta-link'>
            <Link to="/"><Trans>Über mich</Trans></Link>
          </li>
          <li className='navigation__meta-link'>
            <Link to="/faq"><Trans>FAQ</Trans></Link>
          </li>
          <li className='navigation__meta-link'>
            <Link to="/Contact"><Trans>Kontakt</Trans></Link>
          </li>
        </ul>

        <div className='navigation__language-selector '
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => {
            setDropdown((prev) => !prev);
            return;
          }
          }>
          <div className='navigation__language-selector-text'>
            <div className={i18n.language === 'de' ? 'navigation__selected-color' : ''}>DE</div>/<div className={i18n.language === 'fr' ? 'navigation__selected-color' : ''}>FR</div>
            <ExpandMore className='navigation__dropdown-expand'></ExpandMore>
          </div>



          <ul className={`navigation__dropdown${dropdown ? "show" : ""}`}>
            {languages.map((language, index) => (
              <li key={index} className="menu-items"
                onClick={() => changeLanguage(language.lng)}>
                {language.title}
              </li>
            ))}
          </ul>
        </div>

      </div>
      <ul className='navigation__links'>
        <li>
          <Link to="/"><Trans>Home</Trans></Link>
        </li>
        <li>
          <Link to="/pension"><Trans>Vorsorge</Trans></Link>
        </li>
        <li>
          <Link to="/home-owner"><Trans>Eigenheim</Trans></Link>
        </li>
        <li>
          <Link to="/asset"><Trans>Vermögensaufbau</Trans></Link>
        </li>
        <li>
          <Link to="/insurance"><Trans>Versicherungen</Trans></Link>
        </li>
      </ul>
    </div>
  );
};

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng)
}

export default Navigation;