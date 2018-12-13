const initState = {
  a: 1,
  b: 1
};

const rootReducer = (state = initState, action) => {
  if (action.type === "UPDATE_A") {
    return {
      ...state,
      a: state.a + state.b
    };
  }
  if (action.type === "UPDATE_B") {
    return {
      ...state,
      b: state.a + state.b
    };
  }
  return state;
};

export default rootReducer;
