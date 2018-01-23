import React, { Component } from "react";
import { connect } from "react-redux"
import  { Link } from "react-router-dom"

import { retrieveUser } from "../../ducks/user"


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }



    }
  
     
render(){
    console.log(this.props.user);
    const user = this.props.user
    return(
    <div>

        <h1> Profile Page </h1>

    { user ?
        <div> 
                { user.profile_picture ? <img src={`${user.profile_picture }`} alt="default profile photo"/> : null} 
            <div>
                { user.name ? <div> {user.name} </div> : null  }
            </div>
            <div>
                { user.email ? <div> {user.email } </div> : null }
            </div>
            <Link to={`/edit/${user.userid}`}>
                <button> Edit </button>
            </Link>
        </div>
         : <div> Please Log In <Link to="/login"> <button>Login</button> </Link> </div> }

    </div>

    
        )
    }


}

function mapStateToProps(state){
    return state.user
  }


export default connect(mapStateToProps, { retrieveUser })(Profile)
