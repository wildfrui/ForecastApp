import React from "react";
import { connect } from "react-redux";
import { fetchCoordinates } from "../actions";
import SearchBar from "./SearchBar";

class Geocoding extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  // при монтировке компонента находим координаты Москвы (переделать на местоположение)
  componentDidMount() {
    this.props.fetchCoordinates(this.props.searchTerm);
  }
  // передаем функцию компоненту SearchBar и при каждом вызовеполучаем координаты нового места
  handleSearch() {
    this.props.fetchCoordinates(this.props.searchTerm);
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
  return { searchTerm: state.searchTerm.term, lat: state.geo.lat };
};

export default connect(mapStateToProps, { fetchCoordinates })(Geocoding);
