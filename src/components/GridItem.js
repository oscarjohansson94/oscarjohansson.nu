import React, { Component } from 'react';

import '../App.css';
import GridItemHeader from '../components/GridItemHeader.js';
import GridItemPhoto from '../components/GridItemPhoto.js';
import GridItemInfo from '../components/GridItemInfo.js';

export default class GridItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  clickMe(href, i) {
    this.props.call(i);
  }
  render() {
    const expanded = this.props.expanded;
    const index = this.props.index;
    const zindex = this.props.zindex;
    const size = '40%';
    var item = this.props.object;
    var trans = expanded ? 'scale(2.45,2.45) translate(' +( 28 - item.left) + '%' + ', ' + (28 - item.top ) + '%)' : '';
    let body;
    if(expanded) {
      body = (<GridItemInfo info={item.info} />);
    } else {
      body = ( <GridItemPhoto url={item.url} />);
    }


    return (
      <div className="GridItem" style={{
        transform: trans,
        height: size,
        zIndex: zindex,
        top: item.top + '%',
        left: item.left + '%',
        width: size }
      }
      onClick={this.clickMe.bind(this, item.href, index)}>
      <GridItemHeader title={item.title}/>
      {body}
      </div>
    )
  }
}
