import React, { Component } from 'react'
import { connect } from "react-redux"

class Filter extends Component {


render(){
    return(
        <div>
            <p> I'M A FILTER </p>
        </div>
    )
}

}

function mapStateToProps(state){
    return state
};

export default connect (mapStateToProps)(Filter)