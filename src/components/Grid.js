import React, { Component } from 'react';

import '../App.css';
import GridItem from '../components/GridItem.js';

export default class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        Grid
        {window.items.map((item,i) =>
        <GridItem index={i} object={item} />
        )}
        </div>
    )
  }
}
