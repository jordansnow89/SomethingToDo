import React, { Component } from 'react';
import './App.css';
import {withRouter} from "react-router-dom"

import { connect } from "react-redux"

import { retrieveUser } from "./ducks/user"
import routes from './routes';


class App extends Component {
  
    componentDidMount() {
        this.props.retrieveUser();
      }

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Event Finder </h1>
        </header>
        {routes}
      </div>
    );
  }
}
function mapStateToProps(user){
  return{
    user
  };
}


export default withRouter(connect(mapStateToProps, { retrieveUser })(App))
