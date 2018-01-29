import React, { Component } from "react"
import { connect } from "react-redux"

import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import "./userList.css"
import swal from 'sweetalert'

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
        swal({
            text: "Event Removed!"
        })

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
             
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}> 
               { user.userList && user.userList.map((event, index) =>
                (<div key={index}>
                    <Card style={{width: "80vw", marginBottom: "10px"}}>
                    <CardHeader actAsExpander={true} showExpandableButton={true}>

                    <div style={{ padding: "10px"}}> EVENT NAME: {event.name} </div>
                    { event.imageurl ? <img src={`${event.imageurl}`} alt="event_image"/> : null}
                    </CardHeader>
                    <CardText expandable={true}>
                    <div className="descriptioncontainer"> Description: {event.description} </div>
                    <div style={{ padding: "10px"}}> Date: {event.start}</div>
                    <RaisedButton style={style} label="Remove From Favorites"  secondary="true" onClick={ () => this.handleRemove(event.selection_id)}/>
                    </CardText>
                    </Card>
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