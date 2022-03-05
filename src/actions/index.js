import geo from "../apis/GeocodingAPI";

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
    const { data } = await geo.get("/direct", {
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
