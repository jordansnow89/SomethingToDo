import React, { Component } from "react"
import { connect } from "react-redux"
import  Filter  from "../Filter/filter"


import { retrieveEvents  } from "../../ducks/event";
import { addEventToProfile  } from "../../ducks/event";

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchTerm: ""
        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAlert = this.handleAlert.bind(this)
    }



    handleSearch(event) {
        event.preventDefault();
        this.props.retrieveEvents(this.state.searchTerm);
      }

    handleAdd(val) {
        const userid = this.props.user.user.userid
        this.props.addEventToProfile( userid , val);
    }

    handleChange(val) {
        this.setState({
             searchTerm: val 
        })
      }

    handleAlert(){
        alert("Please log in to add events")
        }

render() {
const eventList = this.props.events.events.events
    console.log(this.props)
    return(
        <div>
            <h1> Search Page </h1>
            {this.props.events.isLoading && (
          <div>
            <h1>Loading Content....</h1>
          </div>
        )}

        <Filter />
        <br/>

        <form onSubmit={this.handleSearch}>
            <input placeholder="City State or Zipcode"  onChange={e => this.handleChange(e.target.value)} />
            <button> SEARCH </button>
        </form>
            <div className="searchbox" >
                {eventList && eventList.map((event, index) =>
                 ( <div key={index}>
                <div> EVENT NAME: {event.name.text} </div>
                {event.logo ? <img src={`${event.logo.url}`} alt="event_image"/> : null}
                <div> EVENT DATE: {event.start.local} </div>
                <div> EVENT CATEGORY: {event.category_id} </div>
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