import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { BrowserRouter } from 'react-router-dom';

//IMPORT REDUX
import { Provider } from "react-redux";
import store from "./store";

//MATERIAL UI IMPORTS
const getTheme = () => {
  let overwrites = {
    "palette": {
      "primary1Color": "#1976d2",
      "primary2Color": "#ff5722",
      "primary3Color": "#283593",
      "accent1Color": "#ff5722"
    }
  };
  return getMuiTheme(baseTheme, overwrites);
}



ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getTheme()}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

