import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './Button.css';
import { Link } from 'react-router-dom';
class Button extends Component {
  render() {
    return (
        <div className='button'>
        <Link to={this.props.link}><Trans>{this.props.text}</Trans></Link>
      </div>
    );
  }
}

export default Button;