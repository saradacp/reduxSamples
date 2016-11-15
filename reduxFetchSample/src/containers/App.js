import React, {Component} from "react";
import { Provider } from "react-redux";
import * as reducers from "../reducers";
import FetchFriendsApp from "./FetchFriendsApp";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {() => <FetchFriendsApp/>}
      </Provider>
    );
  }
}
