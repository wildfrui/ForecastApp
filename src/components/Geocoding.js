import React from "react";
import { connect } from "react-redux";
import { fetchCoordinates, fetchWeatherData } from "../actions";
import SearchBar from "./SearchBar";

class Geocoding extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  // при монтировке компонента находим координаты Москвы (переделать на местоположение)
  componentDidMount() {
    this.props.fetchCoordinates(this.props.searchTerm);
    this.props.fetchWeatherData();
  }
  // передаем функцию компоненту SearchBar и при каждом вызовеполучаем координаты нового места
  handleSearch() {
    this.props.fetchCoordinates(this.props.searchTerm);
    this.props.fetchWeatherData();
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}></SearchBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchTerm: state.searchTerm.term,
    lat: state.geo.lat,
    lon: state.geo.lon,
  };
};

export default connect(mapStateToProps, { fetchCoordinates, fetchWeatherData })(
  Geocoding
);
