import React, { Component } from 'react';

import '../App.css';
import GridItem from '../components/GridItem.js';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      index: 0,
    }
    this.expand = this.expand.bind(this)
  }

  expand(i) {
    this.setState({
      expanded: !this.state.expanded,
      index: i 
    });
  }

  render() {
    let items = [];
    for(var i = 0; i < window.items.length; i++) {
      let zi;
      let expndd = false;
      if(this.state.expanded && i == this.state.index) {
        zi = 1000;
        expndd = true;
      } else if(i == this.state.index) {
        zi = 100;
      } else {
        zi = 1;
      }

      items.push(
        <GridItem key={i}  expanded={expndd} call={this.expand} zindex={zi} index={i} object={window.items[i]} />
      );
    }
    return (
      <div className="Grid">
      {items}
        </div>
    )
  }
}
