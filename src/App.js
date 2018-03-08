import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './components/navigation/MyAppBar';
import  './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar />
       {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;

//Configurar el sistema para el posterior control