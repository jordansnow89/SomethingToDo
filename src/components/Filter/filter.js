import React, { Component } from 'react'
import { connect } from "react-redux"
import { retrieveEvents  } from "../../ducks/event";

class Filter extends Component {
    constructor(props){
        super(props)

        this.state = {
            category: "",
            distance: "",
            date: "",
            searchTerm: "",
            isFree: ""

        }

        this.handleCategory = this.handleCategory.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleDistance = this.handleDistance.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handlePrice = this.handlePrice.bind(this)

    }

    handleSearch(event) {
       const { category, distance, date, searchTerm, isFree } = this.state
        event.preventDefault();
        this.props.retrieveEvents(searchTerm, category, distance, date, isFree);
      }

    handleCategory(val){
         this.setState({
            category: val
        })
    }

    handleDistance(val){
        this.setState({
            distance: val
        })
    }

    handleDate(val){
        this.setState({
            date: val
        })
    }

    handlePrice(val){
        this.setState({
            isFree: val
        })
    }

    handleChange(val) {
        this.setState({
             searchTerm: val 
        })
      }

render(){
    console.log(this.state)
    return(
        <div>
            <h1> Search </h1>

            <div>
            <select onChange={ e => this.handleCategory(e.target.value)} >
                <option value="">Category</option>
                <option value="103">Music</option>
                <option value="101" >Business & Professional </option>
                <option value="110">Food & Drink</option>
                <option value="113">Community & Culture</option>
                <option value="105">Arts</option>
                <option value="104">Film & Media</option>
                <option value="108">Sports</option>
                <option value="107">Health & Wellness</option>
                <option value="102">Science & Technology</option>
                <option value="109">Travel & Outdoor</option>
                <option value="111">Charity & Causes</option>
                <option value="114">Religion & Spirituality</option>
                <option value="116">Seasonal & Holiday </option>
                <option value="115">Family & Education</option>
                <option value="112">Government & Politics</option>
                <option value="106">Fashion & Beauty</option>
                <option value="117">Home & Lifestyle </option>
                <option value="118">Auto, Boat & Air</option>
                <option value="120">School Activities</option>
                <option value="120">Hobbies & Special Interest </option>
                <option value="199">Other</option>
            </select> 
            <select onChange={ e => this.handleDistance(e.target.value)}>
                <option value="">Distance</option>
                <option value="1mi">1 Mile </option>
                <option value="5mi">5 Miles </option>
                <option value="10mi">10 Miles </option>
                <option value="20mi">20 Miles </option>
                <option value="50mi">50 Miles </option>
            </select>
            <select onChange={ e => this.handleDate(e.target.value)} >
                <option value="">Date</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this_week">This Week</option>
                <option value="this_weekend">This Weekend</option>
                <option value="next_week">Next Week</option>
                <option value="this_month">This Month</option>
            </select>
            <select onChange={e => this.handlePrice(e.target.value)}>
                <option value="">Price</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
            </select>
            </div>

            <form onSubmit={this.handleSearch}>
            <input placeholder="City State or Zipcode"  onChange={e => this.handleChange(e.target.value)} />
            <button> SEARCH </button>
        </form>
        </div>
     
    
        )
    }
    

}

function mapStateToProps(state){
    return state
};

export default connect (mapStateToProps, {retrieveEvents })(Filter)