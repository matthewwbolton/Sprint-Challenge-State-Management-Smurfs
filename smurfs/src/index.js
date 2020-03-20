import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { smurfReducer } from "./reducers";
import thunk from "redux-thunk";

// const reducer = () => {
//     return {
//         name: 'Brainey',
//         age: 200,
//         height: '5 cm',
//         id: 0
//     }
// }

const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
