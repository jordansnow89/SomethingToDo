import React, { Component } from 'react';
import './App.css';
import {withRouter, NavLink} from "react-router-dom"

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Footer from './components/Footer/footer';

import logo from "./images/logo.png"
import logo2 from "./images/desktoplogo.jpg"

import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
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
      

 
  render(){

  const logoimg = <img className="logo-img" src={logo} />;
  const desktopimg = <img className="desktopimg" src={logo2} />
  
    return (
    <div>
    <div className="App">

    <div className="mobileNav">
      <AppBar
      className="mobileappbar"
    title={logoimg}
    onLeftIconButtonClick={this.handleClick}
    />
  </div>
  
    <div className="desktopNav">
    <AppBar 
    className="desktopappbar"
    iconElementLeft={desktopimg}
    />
    <RaisedButton label="Home"  style={{ height: "100%", border: "1px solid #666A73"}} onClick={() =>this.props.history.push("/")} />
    <RaisedButton label="Search"  style={{ height: "100%", border: "1px solid #666A73"}} onClick={() =>this.props.history.push("/search")} />
     <RaisedButton label="Contact" style={{ height: "100%", border: "1px solid #666A73"}} onClick={() =>this.props.history.push("/contact")} />
    <RaisedButton label="Profile"  style={{ height: "100%", border: "1px solid #666A73"}} onClick={() =>this.props.history.push("/profile")} />
    <a href={process.env.REACT_APP_LOGIN}><RaisedButton label="Login" secondary={true} style={{ height: "100%", border: "1px solid ##666A73"}} /></a>
    </div>
{/* <div className="desktopNav">
  <NavLink className="navlink-wrapper" to="/">
    <p className="navlink"> </p>
  </NavLink>
  <NavLink className="navlink-wrapper" to="/search">
    <p className="navlink"> Searcj </p>
  </NavLink>
  <NavLink className="navlink-wrapper" to="/contact">
    <p className="navlink"> Contact </p>
  </NavLink>
  <NavLink className="navlink-wrapper" to="/profile">
    <p className="navlink"> MY Profile </p>
  </NavLink>
  <NavLink className="navlink-wrapper" to="/profile">
    <p className="navlink"> Contact </p>
  </NavLink>
</div>
 */}

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
