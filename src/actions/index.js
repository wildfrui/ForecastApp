export const setSearchTerm = (term) => {
  return {
    type: "SET_TERM",
    payload: {
      term,
    },
  };
};
