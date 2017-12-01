import React, { Component } from 'react';

import '../App.css';

export default class Photo extends Component {
  render() {
    return (
      <div className="Photo"> 
      <img src={process.env.PUBLIC_URL  + 'images/profile.png'} />
      </div>
    )
  }
}
