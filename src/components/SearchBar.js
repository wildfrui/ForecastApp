import React from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../actions";
import debounce from "lodash.debounce";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onDebouncedInputChange = debounce(this.onInputChange, 1000);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.onDebouncedInputChange(e.target.value);
  }

  onInputChange = (term) => {
    this.props.setSearchTerm({ term });
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.handleInputChange} />
      </React.Fragment>
    );
  }
}

export default connect(null, { setSearchTerm })(SearchBar);
