import React, { Component } from "react";
import { connect } from "react-redux"
import  { Link } from "react-router-dom"

import './Profile.css'
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { retrieveUser } from "../../ducks/user"


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }



    }
  
     
render(){
    
    console.log(this.props);
    const user = this.props.user

    const style = {
        margin: 12,
      };



    return(
    <div>

        <h2> Profile Page </h2>
        <h4> { user.name ? `Hello, ${user.name}` : null }</h4>
    { user.userid ?
        <div> 
                { user.profile_picture ? <img src={`${user.profile_picture }`} alt="default profile photo"/> : null} 
            <div>
                { user.name ? <div> {user.name} </div> : null  }
            </div>
            <div>
                { user.email ? <div> {user.email } </div> : null }
            </div>
            <Link to={`/edit/${user.userid}`}>
            <RaisedButton label="Edit Profile" secondary={true} style={style} />
            </Link>
            <Link to={`/userList/${this.props.user.userid}`}>
            <RaisedButton label="Your Saved Events" primary={true} style={style} />
            </Link>



        </div>
         : <div className="loginContainer">
              Please Log In  
         <a href={process.env.REACT_APP_LOGIN}>
         <RaisedButton label="Login" secondary={true} style={style} />
         </a>
     </div> }

    </div>

    
        )
    }


}

function mapStateToProps(state){
    return state.user
  }


export default connect(mapStateToProps, { retrieveUser })(Profile)
