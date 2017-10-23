import React from 'react';

import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import {indigo400,redA400,lightBlueA400,amberA400} from 'material-ui/styles/colors';

import FadeAndScale from '../animations/FadeAndScale';


export default class PlaceCard extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        show: true
      }
  }

  render(){
    return(
      <FadeAndScale className="col-xs-12 col-sm-4"  in={this.props.in}>
        <div >
          <Card>
            <CardMedia>
              <img src={process.env.PUBLIC_URL + this.props.place.imageUrl}/>
            </CardMedia>
            <CardTitle title={this.props.place.title}></CardTitle>
            <CardText>{this.props.place.description}</CardText>
            <CardActions style={{'textAlign': 'right'}}>
              <FlatButton secondary={true} label="Ver más" />
              <FlatButton secondary={true} onClick={()=> this.props.onRemove(this.props.place)} label="Ocultar" />
            </CardActions>
          </Card>
        </div>
      </FadeAndScale>
    );
  }
}
