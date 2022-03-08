import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./WeatherInfo.css";

class WeatherInfo extends React.Component {
  renderDays() {
    const days = _.map(this.props.data.list, "dt_txt");
    const uniqDays = _.uniq(
      days.map((day) => {
        const arr = day.split(" ");
        if (arr[1] === "15:00:00") {
          return day;
        }
      })
    );

    if (this.props.data) {
      return uniqDays.map((day) => {
        if (day === undefined) {
          return;
        }
        let dayWeather = this.props.data.list.find(
          (fetchedDay) => fetchedDay.dt_txt === day
        );
        const color = defineColor(dayWeather.main.temp);
        console.log(color);
        return (
          <div
            className="days__one"
            style={{
              backgroundColor: color,
            }}
          >
            <div className="days__temp">{Math.round(dayWeather.main.temp)}</div>
            <div className="days__date">{dayWeather.dt_txt.split(" ")[0]}</div>
          </div>
        );
      });
    }
  }

  renderInfo(data) {
    if (data) {
      return (
        <div className="weather__info">
          <div className="weather__header">
            <div className="weather__name">{data.city.name}</div>
            <div className="weather__data">
              <div className="weather__temp">
                {Math.round(data.list[0].main.temp)}
              </div>
              <div className="weather__like">
                Ощущается как {Math.round(data.list[0].main.feels_like)}
              </div>
            </div>
          </div>

          <div className="weather__days days">{this.renderDays()}</div>
        </div>
      );
    }
  }
  render() {
    const { data } = this.props;
    return <div>{this.renderInfo(data)}</div>;
  }
}

const defineColor = (temp) => {
  if (temp <= -30) {
    return "rgb(5, 28, 160)";
  } else if (temp > -30 && temp < -10) {
    return "rgb(55, 79, 212)";
  } else if (temp > -10 && temp < 0) {
    return "rgb(204, 255, 255)";
  } else if (temp >= 30) {
    return "rgb(207, 41, 35)";
  } else if (temp < 30 && temp > 10) {
    return "rgb(255, 153, 153)";
  } else if (temp < 10 && temp > 0) {
    return "rgb(255, 204, 153)";
  }
};

const mapStateToProps = (state, ownProps) => {
  return { data: state.geo.data };
};

export default connect(mapStateToProps)(WeatherInfo);
