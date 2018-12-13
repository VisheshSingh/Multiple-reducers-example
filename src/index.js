import React from "react";
import ReactDOM from "react-dom";
import MyComp from "./MyComp";
import rootReducer from "./store/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <MyComp />
    </div>
  );
}

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
