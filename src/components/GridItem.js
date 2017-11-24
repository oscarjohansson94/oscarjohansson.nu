import React, { Component } from 'react';

import '../App.css';

export default class GridItem extends Component {
  render() {
    var i = this.props.index;
    var item = this.props.object;
    return (
      <div className="GridItem"> 
      {item.title}
      </div>
    )
  }
}
