import React, { Component } from "react"
import { connect } from "react-redux"
import  Filter  from "../Filter/filter"

import CircularProgress from 'material-ui/CircularProgress';

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
    }

    handleAlert(){
        alert("Please log in to add events")
        }

render() {
const eventList = this.props.events.events.events
    console.log(this.props)
    return(
        <div>
            <h2> Find Something To Do </h2>

        <Filter />
        <br/>

            <div >
                {this.props.events.isLoading && ( <div> <CircularProgress size={80} thickness={5} /></div>)}    
                {eventList && eventList.map((event, index) =>
                 ( 
                <div key={index}>
                <div> EVENT NAME: {event.name.text} </div>
                {event.logo ? <img src={`${event.logo.url}`} alt="event_image"/> : null}
                <div> EVENT DATE: {event.start.local} </div>
                <div> EVENT DESCRIPTION: {event.description.text} </div>
                 <button onClick={ () => this.props.user.user.userid ? this.handleAdd(event) : this.handleAlert() }> ADD </button>
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