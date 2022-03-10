import React from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../actions";
//импортируем функцию debouncer
import debounce from "lodash.debounce";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //делаем из обычной функции функцию debouncer
    this.onDebouncedInputChange = debounce(this.onInputChange, 1000);
    //привязываем функцию к окружению, чтобы внутри нее можно было использовать this
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillUnmount() {
    this.onDebouncedInputChange.cancel();
  }

  //функция, непосредственно вызываемая обработчиком событий
  handleInputChange(e) {
    this.onDebouncedInputChange(e.target.value);
  }
  //функция, вызывающая action и props, уведомляющий родителя о изменении term
  onInputChange = (term) => {
    this.props.setSearchTerm(term);
    if (this.props.handleSearch) {
      this.props.handleSearch();
    }
  };

  render() {
    return (
      <React.Fragment>
        <input
          className="geo__input"
          type="text"
          onChange={this.handleInputChange}
        />
      </React.Fragment>
    );
  }
}

export default connect(null, { setSearchTerm })(SearchBar);
