import React from 'react';
import AppBar from 'material-ui/AppBar';
import {indigo600} from 'material-ui/styles/colors';

export default class MyAppBar extends React.Component{
  render(){
    return(
      <AppBar
       title="Places"
       style={{'backgroundColor': indigo600}}
      />
    );
  }
}
