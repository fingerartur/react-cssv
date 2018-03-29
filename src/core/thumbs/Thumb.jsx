import React, { Component } from 'react';
import './thumb.css';
import { decisions } from '../../customer-specific/Decisions';

export class Thumb extends Component {
  render() {
    const style = decisions.get('MAIN_THUMB_CORNERS_STYLE');
    const description = decisions.get('MAIN_THUMB_DESCRIPTION');
    return (
      <div>
        <img className='Thumb-img' src={this.props.src} title={this.props.title} alt={this.props.title}  style={style}/>
        <small>{description}</small>
      </div>
    );
  }
}
