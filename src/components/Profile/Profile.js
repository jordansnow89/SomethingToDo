import React, { Component } from "react";
import { connect } from "react-redux"
import  { Link } from "react-router-dom"

import { retrieveUser } from "../../ducks/user"


class Profile extends Component {

  
     
render(){
    console.log(this.props.user);
    return(
    <div>
        <h1> Profile Page </h1>
        <div>
            Name: {this.props.user.user.name}
         </div>
        <div>
            Email: {this.props.user.user.email ? <div> {this.props.user.user.email}</div> : <input type="text" name="email"/>}
        </div>
        <Link to="/search">
            <button>Search Page</button>
        </Link>
    </div>
        )
    }


}

function mapStateToProps(user){
    return{
      user
    };
  }


export default connect(mapStateToProps, { retrieveUser })(Profile)
