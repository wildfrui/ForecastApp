import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "./reducers";
import App from "./components/App.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
