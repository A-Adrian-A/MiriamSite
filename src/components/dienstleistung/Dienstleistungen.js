import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './Dienstleistungen.css';

import vorsorge from '../../img/vorsorge.jpg';
import eigenheim from '../../img/eigenheim.jpg';
import versicherungen from '../../img/jamie-street-JtP_Dqtz6D8-unsplash.jpg';
import vermögensaufbau from '../../img/vermögensaufbau2.jpg';

const cards = [
  {
    title: 'Vorsorge',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: vorsorge
  },
  {
    title: 'Versicherungen',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: versicherungen
  }, {
    title: 'Eigenheim',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: eigenheim
  },
  {
    title: 'Vermögensaufbau',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: vermögensaufbau
  }
]

class Dienstleistungen extends Component {
  render() {
    return (
      <div className='Dienstleistungen'>
        <h1>Dienstleistungen</h1>
        <div className='cards__grid'>
          {cards.map((card, index) => (
            <div className='cards__card'>
              <div className='cards__image-container' >
                <img className='cards__image' src={card.src} alt=''></img>
              </div>
              <div className='cards__text-container'>
                <h2><Trans>{card.title}</Trans></h2>
                {card.paragraphs.map((paragraph, index) => (
                  <p className='cards__text-paragraph'>{paragraph}</p>
                ))}

              </div>
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

export default Dienstleistungen;