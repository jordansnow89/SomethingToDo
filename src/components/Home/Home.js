import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { retrieveUser } from "../../ducks/user";

class Home extends Component {
 
  componentDidMount() {
    this.props.retrieveUser();
  }
  
  render() {
      console.log(this.props);
    return (
      <div>
        <div>
          <h1>Welcome To The Home Page</h1>
          <Link to="/login">
            <button>Login Page</button>
          </Link>
        </div>
        {this.props.isLoading && (
          <div>
            <h1>Loading Content....</h1>
          </div>
        )}
        {this.props.user && <div className='displayName'>{this.props.user.displayName}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser })(Home);