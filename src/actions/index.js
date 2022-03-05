import geo from "../apis/geoApi";

export const setSearchTerm = (term) => {
  console.log(term);
  return {
    type: "SET_TERM",
    payload: {
      term,
    },
  };
};

export const fetchCoordinates = (term) => {
  return async (dispatch, getState) => {
    const { data } = await geo.get("/geo/1.0/direct", {
      params: {
        q: term,
        limit: "1",
        appid: "b0f9a26df43beb87f682a76da5674de9",
      },
    });
    dispatch({
      type: "FETCH_COORDINATES",
      payload: { lat: data[0].lat, lon: data[0].lon },
    });
  };
};

export const fetchWeatherData = () => {
  return async (dispatch, getState) => {
    const { data } = await geo.get("/data/2.5/forecast", {
      params: {
        lat: getState().geo.lat,
        lon: getState().geo.lon,
        appid: "b0f9a26df43beb87f682a76da5674de9",
      },
    });
    console.log(data);
    dispatch({
      type: "FETCH_WEATHER",
      payload: { data },
    });
  };
};
