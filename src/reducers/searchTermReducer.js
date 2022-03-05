const initialState = {
  term: "Moscow",
};

export const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TERM":
      return action.payload;
    default:
      return state;
  }
};
