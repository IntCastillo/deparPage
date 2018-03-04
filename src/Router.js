import React from 'react';

import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import App from './App';

export default class Router extends React.Component{

  render(){
    return(
    <ReactRouter>
       <App>
         <Route exact path="/" component={Home}></Route>
         <Route path="/login" component={Login}></Route>
          </App>
      </ReactRouter>
      );
  }
}
