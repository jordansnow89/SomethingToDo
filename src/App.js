import React, { Component } from 'react';
import './App.css';
import {withRouter} from "react-router-dom"

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Footer from './components/Footer/footer';

import { connect } from "react-redux"

import { retrieveUser } from "./ducks/user"
import routes from './routes';



class App extends Component {
  constructor(props) {
    super(props);

        this.state = {
          open: false,
        };
      }
    
      componentDidMount() {
        this.props.retrieveUser();
      }

      handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
      };
    
      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
      

     
 
  render() {
    return (
    <div>
    <div className="App">
      
      <AppBar
    title="EventFinder"
    onLeftIconButtonClick={this.handleClick}/>

    <Popover
    open={this.state.open}
    anchorEl={this.state.anchorEl}
    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    onRequestClose={this.handleRequestClose}>

    <Menu>
    <MenuItem primaryText="Home" onClick={() =>this.props.history.push("/")} />
    <MenuItem primaryText="Search" onClick={() =>this.props.history.push("/search")}/>
    <MenuItem primaryText="Login" onClick={() =>this.props.history.push("/login")}/>
    <MenuItem primaryText="My Profile" onClick={() =>this.props.history.push("/profile")}/>
    <MenuItem primaryText="Contact Us" onClick={() =>this.props.history.push("/contact")}/>
    </Menu>
  </Popover>
    
        
        {routes}

  
  </div>
  <Footer/>
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
