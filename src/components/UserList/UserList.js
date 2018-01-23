import React, { Component } from "react"
import { connect } from "react-redux"

import { retrieveUserList } from "../../ducks/user"
import { removeEventFromList } from "../../ducks/user"

class UserList extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
        this.handleRemove = this.handleRemove.bind(this)
    }
        
    componentDidMount(){
    
        this.props.retrieveUserList(this.props.user.user.userid)
    }

    handleRemove(val){

        this.props.removeEventFromList(val, this.props.user.user.userid)

    }

    render(){
        console.log(this.props.user)
        const user = this.props.user
        return(
        <div>

            <h1> User List </h1>
             {this.props.events.isLoading && (
             <div>
             <h1>Loading Content....</h1>
             </div>
            )}

            <div> 
               { user.userList && user.userList.map((event, index) =>
                (   <div key={index}>
                    <div> EVENT NAME: {event.name} </div>
                    { event.imageurl ? <img src={`${event.imageurl}`} alt="event_image"/> : null}
                    <div> EVENT DESCRIPTION: {event.description} </div>
                    <div> EVENT DATE: {event.start}</div>
                    <button onClick={ () => this.handleRemove(event.selection_id)}>REMOVE</button>
                    </div>




                )
            
            )}

            </div>

        </div>
            )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {retrieveUserList, removeEventFromList}) (UserList)