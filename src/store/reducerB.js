const initState = {
  b: 1
};

const reducerB = (state = initState, action) => {
  if (action.type === "UPDATE_B") {
    return {
      ...state,
      b: action.value + state.b
    };
  }
  return state;
};

export default reducerB;
