import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import routes from './routes';


class App extends Component {
  constructor(props){
    super(props)

      this.state = {
      test: null
    }
}
componentDidMount(){
  axios
    .get('/api/me')
    .then(response => {
      console.log(response)
      this.setState({ test: response.data.displayname })
    })
    .catch(console.log);
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
