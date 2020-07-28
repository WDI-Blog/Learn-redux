const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW":
      return true;
    case "HIDE":
      return false;
    default:
      return state;
  }
};

export default loggedReducer;
