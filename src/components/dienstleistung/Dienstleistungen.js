import React from 'react';

import './Dienstleistungen.css';

import vorsorge from '../../img/vorsorge/vorsorge.jpg';
import eigenheim from '../../img/eigenheim/eigenheim.jpg';
import versicherungen from '../../img/versicherungen/versicherungen.jpg';
import vermögensaufbau from '../../img/vermoegensaufbau/vermoegensaufbau.jpg';
import { useTranslation } from 'react-i18next';

const cards = [
  {
    title: 'Vorsorge',
    paragraphs: [
      'Card_Vorsorge_paragraph_1',
      'Card_Vorsorge_paragraph_2',
      'Card_Vorsorge_paragraph_3',
    ],
    src: vorsorge
  },
  {
    title: 'Versicherungen',
    paragraphs: [
      'Card_Versicherungen_paragraph_1',
      'Card_Versicherungen_paragraph_2',
      'Card_Versicherungen_paragraph_3',
    ],
    src: versicherungen
  }, {
    title: 'Eigenheim',
    paragraphs: [
      'Card_Eigenheim_paragraph_1',
      'Card_Eigenheim_paragraph_2',
      'Card_Eigenheim_paragraph_3',
    ],
    src: eigenheim
  },
  {
    title: 'Vermögensaufbau',
    paragraphs: [
      'Card_Vermögensaufbau_paragraph_1',
      'Card_Vermögensaufbau_paragraph_2',
      'Card_Vermögensaufbau_paragraph_3',
    ],
    src: vermögensaufbau
  }
]



const Dienstleistungen =()=>{

    const { t } = useTranslation();
    return (
      <div className='dienstleistungen'>
        <h1>{t("Dienstleistungen")}</h1>
        <div className='cards__grid'>
          {cards.map((card, index) => (
            <div className='cards__card'>
              <div className='cards__image-container' >
                <img className='cards__image' src={card.src} alt=''></img>
              </div>
              <div className='cards__text-container'>
                <h2>{t(card.title)}</h2>
                {card.paragraphs.map((paragraph, index) => (
                  <p className='cards__text-paragraph'>{t(paragraph)}</p>
                ))}

              </div>
            </div>
          ))
          }
        </div>
      </div>
    );
  
  
}

export default Dienstleistungen;