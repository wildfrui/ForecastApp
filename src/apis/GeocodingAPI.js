import axios from "axios";

export default axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0",
});
