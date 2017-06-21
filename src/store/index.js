/**
 * Created by rroman681 on 6/20/17.
 * Redux index
 */

import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers";

export default (initialState = {}) => {
    return applyMiddleware(thunk)(createStore)(appReducer, initialState);
};
