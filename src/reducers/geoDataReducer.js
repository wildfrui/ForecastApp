const initialState = {
  lat: null,
  lon: null,
};

export const geoDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COORDINATES":
      return { ...state, ...action.payload };
    case "FETCH_WEATHER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
