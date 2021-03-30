import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {formReducer} from "./reducer/formReducer";


export const store = createStore(formReducer, compose(applyMiddleware(thunk)))