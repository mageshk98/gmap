import React, { Component } from "react";
import ReactDOM from "react-dom";

import Map from "./Map";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        center={{ lat: 40.7484, lng: -73.9857 }}
        height="300px"
        zoom={15}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
