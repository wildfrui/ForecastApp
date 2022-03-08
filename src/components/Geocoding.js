import React from "react";
import { connect } from "react-redux";
import { fetchCoordsAndData } from "../actions";
import SearchBar from "./SearchBar";

class Geocoding extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  // при монтировке компонента находим координаты Москвы и дату(переделать на местоположение)
  componentDidMount() {
    this.props.fetchCoordsAndData(this.props.searchTerm);
  }
  // передаем функцию компоненту SearchBar и при каждом вызовеполучаем координаты нового места
  handleSearch() {
    this.props.fetchCoordsAndData(this.props.searchTerm);
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
  console.log(state, "hi");
  return {
    searchTerm: state.searchTerm.term,
    lat: state.geo.lat,
    lon: state.geo.lon,
  };
};

export default connect(mapStateToProps, { fetchCoordsAndData })(Geocoding);
