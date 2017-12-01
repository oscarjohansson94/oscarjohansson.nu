import React, { Component } from 'react';

import '../App.css';
import Photo from '../components/Photo.js';
import BioBody from '../components/BioBody.js';
import BioFooter from '../components/BioFooter.js';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar"> 
        <p />
      <Photo />
      <BioBody />
      <BioFooter />
      </div>
    )
  }
}
