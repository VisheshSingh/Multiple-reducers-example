import reducerA from "./reducerA";
import reducerB from "./reducerB";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  redA: reducerA,
  redB: reducerB
});

export default rootReducer;
