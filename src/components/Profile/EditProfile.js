import React , { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { updateProfile  } from "../../ducks/user";

class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {

            updatedName: this.props.user.name,
            updatedPictureURL: this.props.user.profile_picture,
            updatedEmail: this.props.user.email
        }

        this.handleName = this.handleName.bind(this)
        this.handlePicture = this.handlePicture.bind(this)
        this.handledEmail = this.handleEmail.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

    }

    handleName(val) {
        this.setState({
            updatedName: val 
        })
    }

    handlePicture(val) {
        this.setState({
            updatedPictureURL: val 
        })
    }

    handleEmail(val) {
        this.setState({
            updatedEmail: val 
        })
    }

    handleUpdate(){
        this.props.updateProfile(this.state, this.props.user.userid).then(() =>
        this.props.history.push(`/Profile`))
    }

 render() {
    //  console.log(this.state, this.props)
     const user = this.props.user
    return(
      
        <div>
            
        <h1> EDIT PROFILE </h1>

        { user.userid ?
            <div className="edit_box">
                <div>
                 User Name: <input onChange={ e => this.handleName(e.target.value)} placeholder={`${this.props.user.name}`} />
                </div>
                 <br />
                 <div>
                Profile Picture URL: <input onChange={ e => this.handlePicture(e.target.value)} placeholder={`${this.props.user.profile_picture}`} />
                </div>
                <br/> 
                <div>
                    Email: <input onChange={e => this.handleEmail(e.target.value)} placeholder={`${this.props.user.email}`} />
                </div>
                <button onClick={ this.handleUpdate }> UPDATE </button>
            </div>
           
               :
               <div> Please Log In <Link to="/login"> <button>Login</button> </Link> </div>

            }

        </div>

       
        )
    }
}


function mapStateToProps(state){
    return state.user
}


export default connect(mapStateToProps, {updateProfile})(EditProfile)

