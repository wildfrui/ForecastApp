import React from "react";
import geo from "../apis/GeocodingAPI";

class Geocoding extends React.Component {
  state = { lat: null, lon: null };

  componentDidMount = () => {
    const fetchLocation = async () => {
      const { data } = await geo.get("/direct", {
        params: {
          q: "Moscow",
          limit: "6",
          appid: "b0f9a26df43beb87f682a76da5674de9",
        },
      });
      this.setState({ lat: data[0].lat, lon: data[0].lon });
    };
    fetchLocation();
  };

  render() {
    return (
      <div>
        <div>Lat: {this.state.lat}</div>
        <div>Lon: {this.state.lon}</div>
      </div>
    );
  }
}

export default Geocoding;
