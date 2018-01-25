import React, { Component } from "react"
import { connect } from "react-redux"

import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

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
        const style = {
            margin: 12,
          };
    
        return(
        <div>

            { user.user.name ? <h3>{`${user.user.name}'s Saved Events`}</h3> :
             <div> Please Log In  
                <a href={process.env.REACT_APP_LOGIN}>
                <RaisedButton label="Login" secondary={true} style={style} /></a>
             </div>
            } 


            
             {this.props.user.isLoading && (  <div> <CircularProgress size={80} thickness={5} /></div>)} 
             
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