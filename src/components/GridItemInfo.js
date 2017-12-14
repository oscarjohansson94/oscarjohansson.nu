import React, { Component } from 'react';

import '../App.css';

export default class GridItemPhoto extends Component {
  render() {
    return (
      <div className="GridItemInfo" > 
      { this.props.info }
      </div>
    )
  }
}
