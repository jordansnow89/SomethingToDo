import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import "./Home.css"

import Slider from "react-slick"
import SliderImage1 from '../../images/img1.jpg'
import SliderImage2 from '../../images/img2.jpg'
import SliderImage3 from '../../images/img3.jpg'
import SliderImage4 from '../../images/img4.jpg'
import SliderImage5 from '../../images/img5.jpg'
import SliderImage6 from '../../images/img6.jpg'

import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


import { retrieveUser } from "../../ducks/user";
import { retrieveEvents  } from "../../ducks/event";

class Home extends Component {
  constructor(props){
    super(props)

    this.state= {
      searchTerm: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  
  }
  componentDidMount() {
    this.props.retrieveUser();
  }

  handleChange(val) {
    this.setState({
         searchTerm: val 
    })
  }

  handleSearch(event) {
     event.preventDefault();
     this.props.retrieveEvents(this.state.searchTerm);
   }
  
  
  render() {
      console.log(this.props);
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: "slider"
      }

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

    return (
      <div>
        <div>
          <h1>Find Something To Do</h1>

        <div className="imageslider">

        <Slider {...settings}>
        <div style={{background: `url(${SliderImage1})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
        <div style={{background: `url(${SliderImage3})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
        <div style={{background: `url(${SliderImage4})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
        <div style={{background: `url(${SliderImage5})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
        <div style={{background: `url(${SliderImage2})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
        <div style={{background: `url(${SliderImage6})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
        </Slider>

        </div>

          <form onSubmit={this.handleSearch}>
           
            <TextField
            floatingLabelText="Search by City & State or Zip"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            onChange={e => this.handleSearchTerm(e.target.value)}
            />
            <RaisedButton label="Search" secondary={true} style={style} onClick={ this.handleSearch}/>
            </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ){
  return{
    state
  };

}

export default connect(mapStateToProps, { retrieveUser, retrieveEvents })(Home);