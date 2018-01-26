import React, { Component } from 'react'
import { connect } from "react-redux"

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Card
    , CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { retrieveEvents  } from "../../ducks/event";

class Filter extends Component {
    constructor(props){
        super(props)

        this.state = {
            category: "",
            selectedCategory: "",

            distance: "",
            selectedDistance: "",

            date: "",
            selectedDate: "",

            selectedPrice: "",
            isFree: "",

            searchTerm: "",
        };

        this.handleCategory = this.handleCategory.bind(this)
        this.handSearch= this.handleSearch.bind(this)
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

    handleCategory(category){
         this.setState({ 
             selectedCategory: category,
             category: category.value
             });
    }

    handleDistance(distance){
        this.setState({
            selectedDistance: distance,
            distance: distance.value
        });
    
    }

    handleDate(date){
        this.setState({
            selectedDate: date,
            date: date.value
        })
        console.log(`Selected Date: ${date}`);
    }

    handlePrice(price){
        this.setState({
            selectedPrice: price,
            isFree: price.value
        })
    }

    handleSearchTerm(val) {
        this.setState({
             searchTerm: val 
        })
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
      }

      

render(){
    console.log(this.state)
    const eventList = this.props.events.events.events
    const { selectedCategory, selectedDistance, selectedDate, selectedPrice } = this.state;
    // const categoryValue = selectedCategory && selectedCategory.value;
    // const distanceValue = selectedDistance && selectedDistance.label;

    

    const styles = {
        errorStyle: {
          color: orange500,
        },
        underlineStyle: {
          borderColor: orange500,
        },
        floatingLabelStyle: {
          color: orange500,
        },
        floatingLabelFocusStyle: {
          color: blue500,
        },
      };
      const style = {
        margin: 12,
      };
    
    
    return(
<div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>    
         
    <br/>
    <div className="filterContainer" style={{width: "60%"}}>
    <Card>
    <CardHeader
      title={<h3>Filters</h3>}
    //   subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
        style={{textAlign: "left"}}
    />
    <CardText expandable={true}>
    <h4> What Kind Of Event? </h4>
    <Select
    name="Category"
    value={selectedCategory}
    onChange={this.handleCategory}
    backspaceRemoves={false}
    options={[
      { value: '103', label: 'Music' },
      { value: '101', label: 'Business & Professional' },
      { value: '110', label: 'Food & Drink' },
      { value: '113', label: 'Community & Culture' },
      { value: '105', label: 'Arts' },
      { value: '104', label: 'Film & Media' },
      { value: '108', label: 'Sports' },
      { value: '107', label: 'Health & Wellness' },
      { value: '102', label: 'Science & Technology' },
      { value: '109', label: 'Travel & Outdoor' },
      { value: '111', label: 'Charity & Causes' },
      { value: '114', label: 'Religion & Spirituality' },
      { value: '116', label: 'Seasonal & Holiday' },
      { value: '115', label: 'Family & Education' },
      { value: '112', label: 'Government & Politics' },
      { value: '106', label: 'Fashion & Beauty' },
      { value: '117', label: 'Home & Lifestyle' },
      { value: '118', label: 'Auto Boat & Air' },
      { value: '120', label: 'School Activites' },
      { value: '119', label: 'Hobbies & Special Interest' },
      { value: '199', label: 'Other' },          
    ]}
    resetValue=""
    />

    <h4> How Far Do You Want Look? </h4>
    <Select
    name="Distance"
    value={selectedDistance}
    onChange={this.handleDistance}
    backspaceRemoves={false}
    options={[
      { value: '1mi', label: '1 Mile' },
      { value: '15mi', label: '15 Miles' },
      { value: '30mi', label: '30 Miles' },
      { value: '50mi', label: '50 Miles' },
      { value: '150mi', label: '150 Miles' },
    ]}
    resetValue=""
    />

    <h4> When Do You Feel Like Going? </h4>
    <Select
    name="Date"
    value={selectedDate}
    onChange={this.handleDate}
    backspaceRemoves={false}
    options={[
      { value: 'today', label: 'Today' },
      { value: 'tomorrow', label: 'Tomorrow' },
      { value: 'this_week', label: 'This Week' },
      { value: 'this_weekend', label: 'This Weekend' },
      { value: 'next_week', label: 'Next Week' },
      { value: 'this_month', label: 'This Month' },
    ]}
    resetValue=""
    />
    
    <h4> Feel Like Paying?</h4>
    <Select
    name="Price"
    value={selectedPrice}
    onChange={this.handlePrice}
    backspaceRemoves={false}
    options={[
      { value: 'free', label: 'Free' },
      { value: 'paid', label: 'Paid' },
    ]}
    resetValue=""
    />
    </CardText>
  </Card>
  </div>
        <div>
            <br/>
        <form onSubmit={this.handleSearch}>
            <TextField
            floatingLabelText="Search by City & State or Zip"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            onChange={e => this.handleSearchTerm(e.target.value)}
            />
             <RaisedButton label="Search" secondary={true} style={style} onClick={ this.handleSearch}/>
            {/* <button> SEARCH </button> */}
        </form>
        

        <div>
            {this.state.searchTerm && <h4>{`We found something for you in ${this.state.searchTerm}` } </h4>}
        </div>
    </div>
     
</div>

     
    
        )
    }
    

}

function mapStateToProps(state){
    return state
};

export default connect (mapStateToProps, {retrieveEvents })(Filter)