import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home';
import  './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      <MuiThemeProvider>

        <Home></Home>

      </MuiThemeProvider>
    );
  }
}

export default App;
