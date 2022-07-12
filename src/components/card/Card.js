import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './Card.css';

import vorsorge from '../../img/vorsorge.jpg';
import eigenheim from '../../img/eigenheim.jpg';
import versicherungen from '../../img/jamie-street-JtP_Dqtz6D8-unsplash.jpg';
import vermögensaufbau from '../../img/vermögensaufbau2.jpg';

const cards = [
  {
    title: 'Vorsorge',
    punkte: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: vorsorge
  },
  {
    title: 'Versicherungen',
    punkte: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: versicherungen
  }, {
    title: 'Eigenheim',
    punkte: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: eigenheim
  },
  {
    title: 'Vermögensaufbau',
    punkte: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    src: vermögensaufbau
  }
]

class Card extends Component {
  render() {
    return (
      <div className='cards'>
        {cards.map((card, index) => (
          <div className='cards__card'>
            <img className='cards__image' src={card.src} alt=''></img>
            <div className='cards__text'>
              <h2>{card.title}</h2>
              <ul>
                {card.punkte.map((punkt, index) => (
                  <li>{punkt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
        }

      </div>
    );
  }
}

export default Card;