import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios"
// import { Link } from "react-router-dom";

//FILE IMPORTS
import "./Home.css"
import Slider from "react-slick"
import SliderImage1 from '../../images/img1.jpg'
import SliderImage2 from '../../images/img2.jpg'
import SliderImage3 from '../../images/img3.jpg'

//MATERIAL UI IMPORTS
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

//REDUX IMPORTS
import { retrieveUser } from "../../ducks/user";
import { retrieveEvents  } from "../../ducks/event";

class Home extends Component {
  constructor(props){
    super(props)

    this.state= {
      searchTerm: ""
    }
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  
  }
  componentDidMount() {
    this.props.retrieveUser();

    //USING GEOLOCATOIN TO GET USER'S CITY AND STATE
    navigator.geolocation.getCurrentPosition((position) => {
    axios.get(`https://us1.locationiq.org/v1/reverse.php?key=91a4fb428d8243&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
    .then(response  => {this.setState({searchTerm: `${response.data.address.city}, ${response.data.address.state}`} ); console.log(response)
    }
);
    
})}

  handleChange(val) {
    this.setState({
         searchTerm: val 
    })
  }

  handleSearchTerm(val) {
    this.setState({
         searchTerm: val 
    })
  }
  
  handleSearch(event) {
    const { category, distance, date, searchTerm, isFree } = this.state
     event.preventDefault();
     this.props.retrieveEvents(searchTerm);
     this.props.history.push("/search")
   }


  render() {

    //SETTINGS FOR IMAGE SLIDER
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: "slider",
        arrows: false,
        autoplaySpeed: 5000
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
      console.log(this.props)
    return (
        <div className="homeBody">
          <div>
            <h2 style={{color: "rgb(255, 87, 34"}}>Let's Do  Something!</h2>
          </div>
          <div className="imageslider">
          <Slider {...settings}>
          <div style={{background: `url(${SliderImage1})`, height: '50vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
          <div style={{background: `url(${SliderImage3})`, height: '50vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
          <div style={{background: `url(${SliderImage2})`, height: '50vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
          </Slider>
          </div>
          <div className="imageslider-mobile">
          <Slider {...settings} style={{height: "30vh"}}>
          <div style={{background: `url(${SliderImage1})`, height: '30vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
          <div style={{background: `url(${SliderImage2})`, height: '50vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
          <div style={{background: `url(${SliderImage3})`, height: '30vh', backgroundSize: 'cover', backgroundPosition: '50%'}}></div>
      
          </Slider>
          </div>
          
            <div className="searchBox">
                <form onSubmit={this.handleSearch}>
                <TextField
                floatingLabelText=" or Search by City & State or Zip"
                floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              value={this.state.searchTerm}
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