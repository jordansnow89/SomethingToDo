import React, { Component } from "react";
import { connect } from "react-redux"
import  { Link } from "react-router-dom"

import { retrieveUser } from "../../ducks/user"


class Profile extends Component {

  
     
render(){

    console.log(this.props);
    return(
    <div>
        <h1> Profile Page </h1>
        <div>
     { this.props.user.name ? <div> {this.props.user.name} </div> : <div> Please Log In </div> }
        </div>
        <div>
            {/* Email: {this.props.user.email ? <div> {this.props.user.email}</div> : <input type="text" name="email"/>} */}
        </div>
        <Link to="/search">
            <button>Search Page</button>
        </Link>
    </div>
        )
    }


}

function mapStateToProps(state){
    return state.user
  }


export default connect(mapStateToProps, { retrieveUser })(Profile)
