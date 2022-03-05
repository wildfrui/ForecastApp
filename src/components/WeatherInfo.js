import React from "react";
import { connect } from "react-redux";

class WeatherInfo extends React.Component {
  renderInfo(data) {
    if (data) {
      return <div>{[data.list[0].main.feels_like]}</div>;
    }
  }

  render() {
    const { data } = this.props;
    return <div>{this.renderInfo(data)}</div>;
  }
}

const mapStateToProps = (state) => {
  return { data: state.geo.data };
};

export default connect(mapStateToProps)(WeatherInfo);
