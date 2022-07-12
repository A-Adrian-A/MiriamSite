import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './Button.css';
class Button extends Component {
  render() {
    return (
      <a className='button' href={this.props.link} target='_blank' rel='noreferrer'>
        <Trans>{this.props.text}</Trans>
      </a>
    );
  }
}

export default Button;