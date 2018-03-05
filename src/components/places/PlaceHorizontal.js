import React from 'react';

export default  class PlaceHorizontal extends React.Component{
  render(){
    return(<h1 style={{'textAlign': 'left'}}>{this.props.place.title}</h1>);
  }
}
