import React, { Component } from "react"
import { connect } from "react-redux"


import { retrieveEvents } from "../../ducks/event";

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchTerm: ""
        }

        this.handleSearch = this.handleSearch.bind(this)
        this.addToProfile = this.addToProfile.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }



    handleSearch() {
        this.props.retrieveEvents(this.state.searchTerm);
      }

    addToProfile() {

      }

      handleChange(val) {
        this.setState({
             searchTerm: val 
        })
      }


render() {
    return(
        <div>
            <h1> Search Page </h1>
            {this.props.isLoading && (
          <div>
            <h1>Loading Content....</h1>
          </div>
        )}
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <button type="submit" onClick={() => this.handleSearch()}> SEARCH </button>
            <div className="searchbox" >
            {this.props.events.events && this.props.events.events.map((event, index) =>
                 ( <div key={index}>{event.name.text} <button> ADD </button> </div> )
            )}
            </div>

        </div>
        )
    }

}

function mapStateToProps ( state ){
    console.log(state)
    return state.eventReducer
        state.isLoading
    
};

export default connect(mapStateToProps, { retrieveEvents})(Search)