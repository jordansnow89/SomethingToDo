import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"

import { retrieveEvents } from "../../ducks/event";

class Search extends Component {

    componentDidMount() {
        this.props.retrieveEvents();
      }

render() {
    console.log(this.props);
    return(
        <div>
            <h1> Search Page </h1>
            {this.props.isLoading && (
          <div>
            <h1>Loading Content....</h1>
          </div>
        )}
            <div className="searchbox">
            {this.props.events.events && this.props.events.events.map(event => {
                return <div>{event.name.text}
                    </div>
            })}
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