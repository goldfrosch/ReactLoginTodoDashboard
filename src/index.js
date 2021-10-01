import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const SagaMiddleware = createSagaMiddleware({
  context: {
    history: history,
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
