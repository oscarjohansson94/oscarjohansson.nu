import React, { Component } from 'react';

import '../App.css';

export default class GridItemHeader extends Component {
  render() {
    return (
      <div className="GridItemHeader" > 
      <p/>

      {this.props.title}
      </div>
    )
  }
}
