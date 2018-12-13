const initState = {
  a: 1
};

const reducerA = (state = initState, action) => {
  if (action.type === "UPDATE_A") {
    return {
      ...state,
      a: state.a + action.value
    };
  }
  return state;
};

export default reducerA;
