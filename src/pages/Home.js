import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


import {indigo400} from 'material-ui/styles/colors';

import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import data from '../requests/places';

import TransitionGroup from 'react-transition-group/TransitionGroup';


export default class Home extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      places: data.places
    }


    this.hidePlace = this.hidePlace.bind(this);
  }

  places(){
    return this.state.places.map((place,index)=>{
      return(
        <PlaceCard onRemove={this.hidePlace} place={place} index={index} />
      );
    })
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el != place)
    })
  }

  render(){
    return(
      <section>
        <div className="Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>

              <RaisedButton label="Crear cuenta gratuita" secondary={true} />

              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} />
            </div>
            <div>
              <Benefits/>
            </div>
          </div>

        </div>
        <div style={{'backgroundColor': indigo400, 'padding': '50px', color: 'white'}}>
          <h3 style={{'fontSize': '24px'}}>Sitios Populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    );
  }

}
