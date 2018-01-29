import React, { Component } from "react"
import { connect } from "react-redux"
import  Filter  from "../Filter/filter"

import "./Search.css"
import CircularProgress from 'material-ui/CircularProgress';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import swal from 'sweetalert'

import { retrieveEvents  } from "../../ducks/event";
import { addEventToProfile  } from "../../ducks/event";

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchTerm: ""
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleAlert = this.handleAlert.bind(this)
    }

    handleAdd(val) {
        const userid = this.props.user.user.userid
        this.props.addEventToProfile( userid , val);
        swal({
            text:"Event Added!",
            icon: "success"
        })
    }

    handleAlert(){
        swal({
            text:"Please log in to add to favorites.",
            icon: "error"
        })
    }
    

render() {
const eventList = this.props.events.events.events
    console.log(this.props)
   
      
    return(
        <div>
            <h4> Search & Use The FIlters To Help Find Something To Do </h4>

        <Filter />
        <br/>

            <div className="eventContent">
                {this.props.events.isLoading && ( <div style={{padding: "10px"}}> <CircularProgress size={150} thickness={5} /></div>)}    
                {eventList && eventList.map((event, index) =>
                 ( 
                     
                <div className="eventList" key={index}>
                <Card style={{width: "80vw"}}>
                <CardHeader actAsExpander={true} showExpandableButton={true}>
               
                <div className="eventName"  > {event.name.text} </div>

                {event.logo ? <img style={{width: "50%"}}src={`${event.logo.url}`} alt="event_image"/> : null} 
                </CardHeader>
                <CardText expandable={true}>
                <div className="eventDate">{`Date: ${event.start.local} `}</div>
                <div className="descriptioncontainer">  <p className="description">Description:</p> <div className="descriptionbox"> {event.description.text}</div> </div>
                 {/* <button onClick={ () => this.props.user.user.userid ? this.handleAdd(event) : this.handleAlert() }> ADD </button> */}
                 <RaisedButton label="Add To Your Favorites" secondary={true} style={{ margin: "10px"}} onClick={ () => this.props.user.user.userid ? this.handleAdd(event) : this.handleAlert() }/>
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

function mapStateToProps ( state ){
   
    return state
        
        
};

export default connect(mapStateToProps, { retrieveEvents, addEventToProfile } )(Search)