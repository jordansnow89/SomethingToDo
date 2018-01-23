import React, { Component } from 'react';
import './App.css';
import {withRouter, NavLink} from "react-router-dom"

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
          <NavLink to="/search"> Search </NavLink>
          <br />
          <NavLink to="/login"> Login </NavLink>
          <br />
          <NavLink to="/profile"> Profile </NavLink>
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
