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

export const fetchCoordsAndData = (term) => {
  return async (dispatch, setState) => {
    await dispatch(fetchCoordinates(term));
    const { lat, lon } = setState().geo;
    console.log(lat, lon);
    dispatch(fetchWeatherData(lat, lon));
  };
};

export const fetchCoordinates = (term) => {
  return async (dispatch, getState) => {
    console.log("sending");
    const { data } = await geo.get("/geo/1.0/direct", {
      params: {
        q: term,
        limit: "1",
        appid: "b0f9a26df43beb87f682a76da5674de9",
      },
    });
    console.log("recieved");
    dispatch({
      type: "FETCH_COORDINATES",
      payload: { lat: data[0].lat, lon: data[0].lon },
    });
  };
};

export const fetchWeatherData = (lat, lon) => {
  return async (dispatch, getState) => {
    const { data } = await geo.get("/data/2.5/forecast", {
      params: {
        units: "metric",
        lang: "ru",
        lat,
        lon,
        appid: "b0f9a26df43beb87f682a76da5674de9",
      },
    });
    console.log("data");
    dispatch({
      type: "FETCH_WEATHER",
      payload: { data },
    });
  };
};
