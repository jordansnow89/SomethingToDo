import React, { Component } from 'react';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
   
    render() {

        const style = {
            margin: 12,
          };

        return (
        <div>
            <h3> Log In and Lets Get Started</h3>

            <div>
                <a href={process.env.REACT_APP_LOGIN}>
                <RaisedButton label="Login" secondary={true} style={style} />
                </a>
            </div>
        </div>
            )
    }
}
