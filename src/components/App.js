import React from "react";
import Geocoding from "./Geocoding";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import "../css/fonts.css";
import "../css/normalize.css";

class App extends React.Component {
  render() {
    return (
      <div className="geo__container">
        <Geocoding></Geocoding>
        <WeatherInfo></WeatherInfo>
      </div>
    );
  }
}

export default App;
