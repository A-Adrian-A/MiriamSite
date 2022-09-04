import React, { Component } from 'react';
import './Test.css';

import vorsorge from '../../img/vorsorge.jpg';
import eigenheim from '../../img/eigenheim.jpg';
import versicherungen from '../../img/jamie-street-JtP_Dqtz6D8-unsplash.jpg';
import vermögensaufbau from '../../img/vermögensaufbau2.jpg';


class Test extends Component {
  render() {
    return (
      <div className='test'>
        
        <div className='test__grid'>
          <div className='test__container'>
            <div className='box1' >
              
              
            </div>
            <div className='box2' ></div>
          </div>
          <div className='test__container'>
            <div className='box1' >
             
            </div>
            <div className='box2' ></div>
          </div>
          <div className='test__container'>
            <div className='box1' >
              
            </div>
            <div className='box2' ></div>
          </div>
          <div className='test__container'>
            <div className='box1' >
              
            </div>
            <div className='box2' ></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Test;