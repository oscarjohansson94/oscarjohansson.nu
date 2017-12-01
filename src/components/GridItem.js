import React, { Component } from 'react';

import '../App.css';
import GridItemHeader from '../components/GridItemHeader.js';
import GridItemPhoto from '../components/GridItemPhoto.js';

export default class GridItem extends Component {
  render() {
    var i = this.props.index;
    var item = this.props.object;
    console.log("width:", window.innerWidth);
    let css;
      css = {top:item.top, left: item.left};


    return (
      <div className="GridItem" style={css}> 
      <GridItemHeader title={item.title} />
      <GridItemPhoto url={item.url} />
      </div>
    )
  }
}
