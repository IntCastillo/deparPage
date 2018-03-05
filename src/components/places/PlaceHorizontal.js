import React from 'react';
import Card from 'material-ui/Card';
import {Card, CardHeader} from 'material-ui/Card';

export default  class PlaceHorizontal extends React.Component{
  render(){
    return(
      <Card style={{'marginTop':'1em', 'overflow': 'hidden'}}>
         <div className="row">
         <div className="PlaceH-avatar">
          <img src={this.props.place.imageUrl } />
         </div>
         <div className="col-xs">
          <CardHeader
           title={this.props.place.title}
           adress={this.props.place.address}
          />
         </div>
         </div>
      </Card>
    );
  }
}
