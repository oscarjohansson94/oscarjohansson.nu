import React, { Component } from 'react';

import '../App.css';

export default class GridItemPhoto extends Component {
  render() {
    return (
      <div className="GridItemPhoto" > 
      <img src={process.env.PUBLIC_URL  + this.props.url} />
      </div>
    )
  }
}
