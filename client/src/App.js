import React, { Component } from "react";
import "./styles/css/main.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
