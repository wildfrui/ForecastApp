const initialState = {
  lat: null,
  lon: null,
};

export const geoDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COORDINATES":
      return action.payload;
    default:
      return state;
  }
};
